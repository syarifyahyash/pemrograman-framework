const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTransaksi = async (req, res, next) => {
  try {
    const result = await prisma.transaksi.create({
      data:{
        kode_transaksi: req.body.kode_Transaksi,
        nama_customer: req.body.nama_customer,
        total_pembelian: parseInt(req.body.total_pembelian),
        detail_pembelian: req.body.detail_pembelian,
      }
    });

    return res.json({
      status: 200,
      message: 'Transaksi berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getTransaksi = async (req, res, next) => {
  try {
    const result = await prisma.transaksi.findMany();

    return res.json({
      status: 200,
      message: 'Semua Transaksi berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getTransaksiById = async (req, res, next) => {
  try {
    const result = await prisma.transaksi.findFirst({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Transaksi berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateTransaksi = async (req, res, next) => {
  try {
    const result = await prisma.transaksi.update({
      where:{
        no: parseInt(req.params.no)
      },
      data:{
        kode_transaksi: req.body.kode_Transaksi,
        nama_customer: req.body.nama_customer,
        total_pembelian: parseInt(req.body.total_pembelian),
        detail_pembelian: req.body.detail_pembelian,
      }
    });

    return res.json({
      status: 200,
      message: 'Transaksi berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyTransaksi = async (req, res, next) => {
  try {
    const result = await prisma.transaksi.delete({
      where:{
        no: parseInt(req.params.no)
      }
    });

    return res.json({
      status: 200,
      message: 'Transaksi berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createTransaksi, getTransaksi, getTransaksiById, updateTransaksi, destroyTransaksi};