const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createContent = async (req, res, next) => {
  try {
    const result = await prisma.content.create({
      data:{
        id_jenis_kontent: req.body.id_jenis_kontent,
        id_fakultas: req.body.id_fakultas,
        id_prodi: req.body.id_prodi,
        judul_content: req.body.judul_content,
        isi_content: req.body.isi_content,
        tanggal_posting: req.body.tanggal_posting,
        nis: req.body.nis,
        status: req.body.status,
        dibaca: req.body.dibaca,
      }
    });

    return res.json({
      status: 200,
      message: 'Content berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getContent = async (req, res, next) => {
  try {
    const result = await prisma.content.findMany();

    return res.json({
      status: 200,
      message: 'Semua Content berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getContentById = async (req, res, next) => {
  try {
    const result = await prisma.content.findFirst({
      where:{
        id_content: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Content berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateContent = async (req, res, next) => {
  try {
    const result = await prisma.content.update({
      where:{
        id_content: parseInt(req.params.id)
      },
      data:{
        id_jenis_kontent: req.body.id_jenis_kontent,
        id_fakultas: req.body.id_fakultas,
        id_prodi: req.body.id_prodi,
        judul_content: req.body.judul_content,
        isi_content: req.body.isi_content,
        tanggal_posting: req.body.tanggal_posting,
        nis: req.body.nis,
        status: req.body.status,
        dibaca: req.body.dibaca,
      }
    });

    return res.json({
      status: 200,
      message: 'Content berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateGambarContent = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await prisma.content.update({
      where:{
        id_content: parseInt(req.params.id)
      },
      data:{
        gambar_content: file.path 
      }
    });

    return res.json({
      status: 200,
      message: 'Gambar Content berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyContent = async (req, res, next) => {
  try {
    const result = await prisma.content.delete({
      where:{
        id_content: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Content berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createContent, getContent, getContentById, updateContent, updateGambarContent, destroyContent};