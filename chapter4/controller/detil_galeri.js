const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createDetilGaleri = async (req, res, next) => {
  try {
    const result = await prisma.detil_galeri.create({
      data:{
        id_galeri: parseInt(req.body.id_galeri),
        gambar: req.body.gambar,
        keterangan: req.body.keterangan
      }
    });

    return res.json({
      status: 200,
      message: 'Detil Galeri berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

