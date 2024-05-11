const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createKegiatan = async (req, res, next) => {
  try {
    const result = await prisma.Kegiatan.create({
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
      message: 'Kegiatan berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getKegiatan = async (req, res, next) => {
  try {
    const result = await prisma.Kegiatan.findMany();

    return res.json({
      status: 200,
      message: 'Semua Kegiatan berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getKegiatanById = async (req, res, next) => {
  try {
    const result = await prisma.Kegiatan.findFirst({
      where:{
        id_Kegiatan: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Kegiatan berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateKegiatan = async (req, res, next) => {
  try {
    const result = await prisma.Kegiatan.update({
      where:{
        id_Kegiatan: parseInt(req.params.id)
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
      message: 'Kegiatan berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyKegiatan = async (req, res, next) => {
  try {
    const result = await prisma.Kegiatan.delete({
      where:{
        id_Kegiatan: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Kegiatan berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createKegiatan, getKegiatan, getKegiatanById, updateKegiatan, destroyKegiatan};