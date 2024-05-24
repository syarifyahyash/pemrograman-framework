const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = async (req, res, next) => {
  try {
    const result = await prisma.product.create({
      data:{
        kode_product: req.body.kode_product,
        nama_product: req.body.nama_product,
        harga: parseInt(req.body.harga),
        stok: parseInt(req.body.stok),
      }
    });

    return res.json({
      status: 200,
      message: 'Product berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getProduct = async (req, res, next) => {
  try {
    const result = await prisma.product.findMany();

    return res.json({
      status: 200,
      message: 'Semua Product berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getProductById = async (req, res, next) => {
  try {
    const result = await prisma.product.findFirst({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Product berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateProduct = async (req, res, next) => {
  try {
    const result = await prisma.product.update({
      where:{
        no: parseInt(req.params.no)
      },
      data:{
        kode_product: req.body.kode_product,
        nama_product: req.body.nama_product,
        harga: parseInt(req.body.harga),
        stok: parseInt(req.body.stok),
      }
    });

    return res.json({
      status: 200,
      message: 'Product berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyProduct = async (req, res, next) => {
  try {
    const result = await prisma.product.delete({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Product berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createProduct, getProduct, getProductById, updateProduct, destroyProduct};