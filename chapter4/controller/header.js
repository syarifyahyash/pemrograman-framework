const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createHeader = async (req, res, next) => {
  try {
    const result = await prisma.header.create({
      data:{
        id_fakultas: req.body.id_fakultas,
        judul_header: req.body.judul_header,
        subjudul_header: req.body.subjudul_header,
      }
    });

    return res.json({
      status: 200,
      message: 'Header berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getHeader = async (req, res, next) => {
  try {
    const result = await prisma.header.findMany();

    return res.json({
      status: 200,
      message: 'Semua Header berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getHeaderById = async (req, res, next) => {
  try {
    const result = await prisma.header.findFirst({
      where:{
        id_header: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Header berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateHeader = async (req, res, next) => {
  try {
    const result = await prisma.header.update({
      where:{
        id_header: parseInt(req.params.id)
      },
      data:{
        id_fakultas: req.body.id_fakultas,
        judul_header: req.body.judul_header,
        subjudul_header: req.body.subjudul_header,
      }
    });

    return res.json({
      status: 200,
      message: 'Header berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateGambarHeader = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await prisma.header.update({
      where:{
        id_header: parseInt(req.params.id)
      },
      data:{
        gambar_header: file.path 
      }
    });

    return res.json({
      status: 200,
      message: 'Gambar Header berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyHeader = async (req, res, next) => {
  try {
    const result = await prisma.header.delete({
      where:{
        id_header: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Header berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createHeader, getHeader, getHeaderById, updateHeader, updateGambarHeader, destroyHeader};