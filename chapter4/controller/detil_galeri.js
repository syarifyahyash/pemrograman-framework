const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDetilGaleri = async (req, res, next) => {
  try {
    const result = await prisma.detil_Galeri.create({
      data:{
        id_galeri: req.body.id_galeri,
        keterangan: req.body.keterangan,
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

const getDetilGaleri = async (req, res, next) => {
  try {
    const result = await prisma.detil_Galeri.findMany();

    return res.json({
      status: 200,
      message: 'Semua Galeri berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getDetilGaleriById = async (req, res, next) => {
  try {
    const result = await prisma.detil_Galeri.findFirst({
      where:{
        id_detil_galeri: parseInt(req.params.id)
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

const updateDetilGaleri = async (req, res, next) => {
  try {
    const result = await prisma.detil_Galeri.update({
      where:{
        id_detil_galeri: parseInt(req.params.id)
      },
      data:{
        id_galeri: req.body.id_galeri,
        keterangan: req.body.keterangan,
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

const updateDetilFotoGaleri = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await prisma.detil_Galeri.update({
      where:{
        id_detil_galeri: parseInt(req.params.id)
      },
      data:{
        gambar: file.path 
      }
    });

    return res.json({
      status: 200,
      message: 'Gambar Galeri berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyDetilGaleri = async (req, res, next) => {
  try {
    const result = await prisma.detil_Galeri.delete({
      where:{
        id_detil_aleri: parseInt(req.params.id)
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


module.exports = {createDetilGaleri, getDetilGaleri, getDetilGaleriById, updateDetilGaleri, updateDetilFotoGaleri, destroyDetilGaleri};