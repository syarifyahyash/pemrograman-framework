const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createFakultas = async (req, res, next) => {
  try {
    const result = await prisma.fakultas.create({
      data:{
        nama_fakultas: req.body.nama_fakultas
      }
    });

    return res.json({
      status: 200,
      message: 'Fakultas berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getFakultas = async (req, res, next) => {
  try {
    const result = await prisma.fakultas.findMany();

    return res.json({
      status: 200,
      message: 'Semua Fakultas berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getFakultasById = async (req, res, next) => {
  try {
    const result = await prisma.fakultas.findFirst({
      where:{
        id_fakultas: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Fakultas berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateFakultas = async (req, res, next) => {
  try {
    const result = await prisma.fakultas.update({
      where:{
        id_fakultas: parseInt(req.params.id)
      },
      data:{
        nama_fakultas: req.body.nama_fakultas
      }
    });

    return res.json({
      status: 200,
      message: 'Fakultas berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyFakultas = async (req, res, next) => {
  try {
    const result = await prisma.fakultas.delete({
      where:{
        id_fakultas: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Fakultas berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createFakultas, getFakultas, getFakultasById, updateFakultas, destroyFakultas};