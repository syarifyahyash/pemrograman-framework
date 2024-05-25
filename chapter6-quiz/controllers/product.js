const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProduct = async (req, res, next) => {
  try {
    const result = await prisma.product.create({
      data:{
        name: req.body.name,
        price: parseInt(req.body.price),
        stock: parseInt(req.body.stock),
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
        id: parseInt(req.params.id)
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
        id: parseInt(req.params.id)
      },
      data:{
        name: req.body.name,
        price: parseInt(req.body.price),
        stock: parseInt(req.body.stock),
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
        id: parseInt(req.params.id)
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