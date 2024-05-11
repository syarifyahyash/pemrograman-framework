const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDokar = async (req, res, next) => {
  try {
    const result = await prisma.Dokar.create({
      data:{
        nis: req.body.nis,
        id_prodi: req.body.id_prodi,
        id_unit: req.body.id_unit,
        nidn: req.body.nidn,
        nama: req.body.nama,
      }
    });

    return res.json({
      status: 200,
      message: 'Dokar berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getDokar = async (req, res, next) => {
  try {
    const result = await prisma.dokar.findMany();

    return res.json({
      status: 200,
      message: 'Semua Dokar berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getDokarById = async (req, res, next) => {
  try {
    const result = await prisma.dokar.findFirst({
      where:{
        id_Dokar: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Dokar berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateDokar = async (req, res, next) => {
  try {
    const result = await prisma.dokar.update({
      where:{
        id_dokar: parseInt(req.params.id)
      },
      data:{
        nis: req.body.nis,
        id_prodi: req.body.id_prodi,
        id_unit: req.body.id_unit,
        nidn: req.body.nidn,
        nama: req.body.nama,
      }
    });

    return res.json({
      status: 200,
      message: 'Dokar berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyDokar = async (req, res, next) => {
  try {
    const result = await prisma.dokar.delete({
      where:{
        id_dokar: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Dokar berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createDokar, getDokar, getDokarById, updateDokar, destroyDokar};