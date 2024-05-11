const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTestimoni = async (req, res, next) => {
  try {
    const result = await prisma.testimoni.create({
      data:{
        id_fakultas: req.body.id_fakultas,
        testimoner: req.body.testimoner,
        pekerjaan_testimoner: req.body.pekerjaan_testimoner,
        isi_testimoni: req.body.isi_testimoni,
        tgl_testimoni: req.body.tgl_testimoni 
      }
    });

    return res.json({
      status: 200,
      message: 'Testimoni berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getTestimoni = async (req, res, next) => {
  try {
    const result = await prisma.testimoni.findMany();

    return res.json({
      status: 200,
      message: 'Semua Testimoni berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getTestimoniById = async (req, res, next) => {
  try {
    const result = await prisma.testimoni.findFirst({
      where:{
        id_testimoni: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Testimoni berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateTestimoni = async (req, res, next) => {
  try {
    const result = await prisma.testimoni.update({
      where:{
        id_testimoni: parseInt(req.params.id)
      },
      data:{
        id_fakultas: req.body.id_fakultas,
        testimoner: req.body.testimoner,
        pekerjaan_testimoner: req.body.pekerjaan_testimoner,
        isi_testimoni: req.body.isi_testimoni,
        tgl_testimoni: req.body.tgl_testimoni 
      }
    });

    return res.json({
      status: 200,
      message: 'Testimoni berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateFotoTestimoni = async (req, res, next) => {
  try {
    const file = req.file;
    const result = await prisma.testimoni.update({
      where:{
        id_testimoni: parseInt(req.params.id)
      },
      data:{
        foto_testimoni: file.path 
      }
    });

    return res.json({
      status: 200,
      message: 'Foto Testimoni berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyTestimoni = async (req, res, next) => {
  try {
    const result = await prisma.testimoni.delete({
      where:{
        id_testimoni: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Testimoni berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createTestimoni, getTestimoni, getTestimoniById, updateTestimoni, updateFotoTestimoni, destroyTestimoni};