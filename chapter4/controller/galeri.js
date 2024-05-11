const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getGaleri = async (req, res, next) => {
  try {
    const result = await prisma.galeri.findMany();

    return res.json({
      status: 200,
      message: 'Semua Galeri berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getGaleriById = async (req, res, next) => {
  try {
    const result = await prisma.galeri.findFirst({
      where:{
        id_galeri: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Galeri berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const createGaleri = async (req, res, next) => {
  try {
    const result = await prisma.galeri.create({
      data:{
        id_fakultas: parseInt(req.body.id_fakultas),
        judul_galeri: req.body.judul_galeri,
        tanggal_posting: req.body.tanggal_posting,
        nis: req.body.nis,
        status: parseInt(req.body.status)
      }
    });

    return res.json({
      status: 200,
      message: 'Galeri berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateGaleri = async (req, res, next) => {
  try {
    const result = await prisma.galeri.update({
      where:{
        id_galeri: parseInt(req.params.id)
      },
      data:{
        id_fakultas: parseInt(req.body.id_fakultas),
        judul_galeri: req.body.judul_galeri,
        tanggal_posting: req.body.tanggal_posting,
        nis: req.body.nis,
        status: parseInt(req.body.status)
      }
    });

    return res.json({
      status: 200,
      message: 'Galeri berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyGaleri = async (req, res, next) => {
  try {
    const result = await prisma.galeri.delete({
      where:{
        id_galeri: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Galeri berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {getGaleri,getGaleriById,createGaleri, updateGaleri,destroyGaleri}