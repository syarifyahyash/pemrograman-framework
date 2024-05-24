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



module.exports = { createTransaction , deleteTransaction, updateTransaction}