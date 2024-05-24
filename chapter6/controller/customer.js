const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCustomer = async (req, res, next) => {
  try {
    const result = await prisma.customer.create({
      data:{
        nama_customer: req.body.nama_customer,
        alamat: req.body.alamat,
        jk: req.body.jk,
        umur: parseInt(req.body.umur),
      }
    });

    return res.json({
      status: 200,
      message: 'Customer berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getCustomer = async (req, res, next) => {
  try {
    const result = await prisma.customer.findMany();

    return res.json({
      status: 200,
      message: 'Semua Customer berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getCustomerById = async (req, res, next) => {
  try {
    const result = await prisma.customer.findFirst({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Customer berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateCustomer = async (req, res, next) => {
  try {
    const result = await prisma.customer.update({
      where:{
        no: parseInt(req.params.no)
      },
      data:{
        nama_customer: req.body.nama_customer,
        alamat: req.body.alamat,
        jk: req.body.jk,
        umur: parseInt(req.body.umur),
      }
    });

    return res.json({
      status: 200,
      message: 'Customer berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyCustomer = async (req, res, next) => {
  try {
    const result = await prisma.customer.delete({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Customer berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createCustomer, getCustomer, getCustomerById, updateCustomer, destroyCustomer};