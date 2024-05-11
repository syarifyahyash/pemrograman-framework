const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createProdi = async (req, res, next) => {
  try {
    const result = await prisma.prodi.create({
      data:{
        id_fakultas: req.body.id_fakultas,
        nama_prodi: req.body.nama_prodi
      }
    });

    return res.json({
      status: 200,
      message: 'Prodi berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getProdi = async (req, res, next) => {
  try {
    const result = await prisma.prodi.findMany();

    return res.json({
      status: 200,
      message: 'Semua Prodi berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getProdiById = async (req, res, next) => {
  try {
    const result = await prisma.prodi.findFirst({
      where:{
        id_prodi: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Prodi berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateProdi = async (req, res, next) => {
  try {
    const result = await prisma.prodi.update({
      where:{
        id_prodi: parseInt(req.params.id)
      },
      data:{
        id_fakultas: req.body.id_fakultas,
        nama_Prodi: req.body.nama_Prodi
      }
    });

    return res.json({
      status: 200,
      message: 'Prodi berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyProdi = async (req, res, next) => {
  try {
    const result = await prisma.prodi.delete({
      where:{
        id_prodi: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Prodi berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createProdi, getProdi, getProdiById, updateProdi, destroyProdi};