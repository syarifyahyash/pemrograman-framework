const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createTransaction = async (req, res, next) => {
  try {
    const { customerId, detailPurchase } = req.body;

    if(detailPurchase.length === 0) {
      return res.status(400).json({
        status: false,
        message: 'Detail pembelian tidak mengandung array',
      })
    }
    let totalPurchase = await getTotalPurchase(detailPurchase);
    const response = await prisma.$transaction(async (tx) => {
      const result = await tx.transaction.create({
        data: {
          customerId,
          totalPurchase: totalPurchase,
          detailPurchase: {
            createMany: {
              data: detailPurchase
            }
          }
        }
      });

      await Promise.all(
        detailPurchase.map(async(data) => {
          const stock = await searchProduct(data.productId);
    
          await tx.product.update({
            where: {
              id: data.productId,
            },
            data: {
              stock: stock.stock - 1
            }
          })
        })
      );
      return result;
    })


    return res.status(201).json({
      status: true,
      message: 'Data transaksi berhasil dibuat',
      data: response
    })
  } catch (error) {
    next(error)
  }
}

const deleteTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;

    const transaction = await prisma.transaction.findUnique({
      where: { id: Number(id) },
      include: { detailPurchase: true }
    });

    if (!transaction) {
      return res.status(404).json({
        status: false,
        message: 'Transaksi tidak ditemukan',
      });
    }

    await prisma.$transaction(async (tx) => {
      await Promise.all(
        transaction.detailPurchase.map(async (data) => {
          const product = await tx.product.findUnique({ where: { id: data.productId } });
          await tx.product.update({
            where: { id: data.productId },
            data: { stock: product.stock + data.stock }
          });
        })
      );

      await tx.transaction.delete({
        where: { id: Number(id) }
      });
    });

    return res.status(200).json({
      status: true,
      message: 'Data transaksi berhasil dihapus'
    });
  } catch (error) {
    next(error);
  }
};

const updateTransaction = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { customerId, detailPurchase } = req.body;

    const existingTransaction = await prisma.transaction.findUnique({
      where: { id: Number(id) },
      include: { detailPurchase: true }
    });

    if (!existingTransaction) {
      return res.status(404).json({
        status: false,
        message: 'Transaksi tidak ditemukan',
      });
    }

    let totalPurchase = await getTotalPurchase(detailPurchase);

    await prisma.$transaction(async (tx) => {
      // Kembalikan stok produk dari transaksi lama
      await Promise.all(
        existingTransaction.detailPurchase.map(async (data) => {
          const product = await tx.product.findUnique({ where: { id: data.productId } });
          await tx.product.update({
            where: { id: data.productId },
            data: { stock: product.stock + data.stock }
          });
        })
      );

      // Hapus detail transaksi lama
      await tx.transactionProduct.deleteMany({
        where: { transactionId: Number(id) }
      });

      // Buat detail transaksi baru
      await tx.transaction.update({
        where: { id: Number(id) },
        data: {
          customerId,
          totalPurchase: totalPurchase,
          detailPurchase: {
            createMany: {
              data: detailPurchase
            }
          }
        }
      });

      // Kurangi stok produk baru
      await Promise.all(
        detailPurchase.map(async (data) => {
          const product = await searchProduct(data.productId);
          await tx.product.update({
            where: { id: data.productId },
            data: { stock: product.stock - data.stock }
          });
        })
      );
    });

    return res.status(200).json({
      status: true,
      message: 'Data transaksi berhasil diubah'
    });
  } catch (error) {
    next(error);
  }
};



async function searchProduct(id) {
  return await prisma.product.findFirst({
    where: {
      id: Number(id)
    }
  });
}

async function getTotalPurchase(detailPurchase) {
  let totalPurchase = 0;
  await Promise.all(
    detailPurchase.map(async (data) => {
     const productPrice = await searchProduct(data.productId);
     totalPurchase = totalPurchase + productPrice.price;
   }) 
  );
  return totalPurchase;
}

const getTotalPurchases = async (req, res, next) => {
  try {
    const customers = await prisma.customer.findMany({
      include: {
        transactions: true
      }
    });

    const totalPurchases = customers.map(customer => {
      const totalPurchase = customer.transactions.reduce((sum, transaction) => sum + transaction.totalPurchase, 0);
      return {
        name: customer.name,
        totalPurchase
      };
    });

    return res.status(200).json({
      status: true,
      data: totalPurchases
    });
  } catch (error) {
    next(error);
  }
};

const getFavoriteProduct = async (req, res, next) => {
  try {
    const productPurchases = await prisma.transactionProduct.groupBy({
      by: ['productId'],
      _count: {
        productId: true
      },
      _sum: {
        stock: true
      },
      orderBy: {
        _count: {
          productId: 'desc'
        }
      }
    });

    const products = await Promise.all(productPurchases.map(async (product) => {
      const productDetails = await prisma.product.findUnique({
        where: { id: product.productId }
      });

      return {
        name: productDetails.name,
        frequency: product._count.productId,
        total: product._sum.stock * productDetails.price
      };
    }));

    return res.status(200).json({
      status: true,
      data: products
    });
  } catch (error) {
    next(error);
  }
};


const getTopCustomers = async (req, res, next) => {
  try {
    const topCustomers = await prisma.customer.findMany({
      include: {
        transactions: {
          select: {
            totalPurchase: true
          }
        }
      }
    });

    const customersWithTotalPurchase = topCustomers.map(customer => {
      const totalPurchase = customer.transactions.reduce((sum, transaction) => sum + transaction.totalPurchase, 0);
      return {
        name: customer.name,
        totalPurchase
      };
    });

    customersWithTotalPurchase.sort((a, b) => b.totalPurchase - a.totalPurchase);

    const topThreeCustomers = customersWithTotalPurchase.slice(0, 3);

    return res.status(200).json({
      status: true,
      data: topThreeCustomers
    });
  } catch (error) {
    next(error);
  }
};


const getLowStockProducts = async (req, res, next) => {
  try {
    const lowStockProducts = await prisma.product.findMany({
      where: {
        stock: {
          lt: 5
        }
      }
    });

    return res.status(200).json({
      status: true,
      data: lowStockProducts
    });
  } catch (error) {
    next(error);
  }
};


const getDashboardData = async (req, res, next) => {
  try {
    // Total Pembelian
    const totalPurchase = await prisma.transaction.aggregate({
      _sum: {
        totalPurchase: true,
      },
    });

    // Total Product
    const totalProduct = await prisma.product.count();

    // Total Customer
    const totalCustomer = await prisma.customer.count();

    // Total Product Kurang dari 5
    const lowStockProducts = await prisma.product.count({
      where: {
        stock: {
          lt: 5,
        },
      },
    });

    // Product Favorit
    const favoriteProductData = await prisma.transactionProduct.groupBy({
      by: ['productId'],
      _count: {
        productId: true,
      },
      _sum: {
        stock: true,
      },
      orderBy: {
        _count: {
          productId: 'desc',
        },
      },
      take: 1,
    });

    let favoriteProduct = {};
    if (favoriteProductData.length > 0) {
      const productDetails = await prisma.product.findUnique({
        where: { id: favoriteProductData[0].productId },
      });
      favoriteProduct = {
        name: productDetails.name,
        frequency: favoriteProductData[0]._count.productId,
        total: favoriteProductData[0]._sum.stock * productDetails.price,
      };
    }

    return res.status(200).json({
      status: true,
      data: {
        totalPurchase: totalPurchase._sum.totalPurchase,
        totalProduct,
        totalCustomer,
        totalLowStockProducts: lowStockProducts,
        favoriteProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};


const getAverageCustomerAge = async (req, res, next) => {
  try {
    // Ambil usia pelanggan dari transaksi
    const customerAges = await prisma.transaction.findMany({
      select: {
        customer: {
          select: {
            age: true,
          },
        },
      },
    });

    // Hitung rata-rata usia
    const totalAge = customerAges.reduce((sum, transaction) => sum + transaction.customer.age, 0);
    const avgAge = totalAge / customerAges.length;

    return res.status(200).json({
      status: true,
      data: {
        avgCustomerAge: avgAge,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getGenderMostTransactions = async (req, res, next) => {
  try {
    // Ambil jumlah transaksi berdasarkan jenis kelamin
    const transactionsByGender = await prisma.customer.groupBy({
      by: ['gender'],
      _count: {
        id: true,
      },
    });

    // Temukan jenis kelamin dengan jumlah transaksi terbanyak
    const mostTransactions = transactionsByGender.reduce((prev, current) => {
      return (prev._count.id > current._count.id) ? prev : current;
    });

    return res.status(200).json({
      status: true,
      data: {
        gender: mostTransactions.gender,
        frequency: mostTransactions._count.id,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  createTransaction,
  deleteTransaction,
  updateTransaction,
  getTotalPurchases,
  getFavoriteProduct,
  getTopCustomers,
  getLowStockProducts,
  getDashboardData,
  getAverageCustomerAge,
  getGenderMostTransactions,
};