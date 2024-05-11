const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createUnit = async (req, res, next) => {
  try {
    const result = await prisma.unit.create({
      data:{
        nama_unit: req.body.nama_unit,
      }
    });

    return res.json({
      status: 200,
      message: 'Unit berhasil dibuat!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getUnit = async (req, res, next) => {
  try {
    const result = await prisma.unit.findMany();

    return res.json({
      status: 200,
      message: 'Semua Unit berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const getUnitById = async (req, res, next) => {
  try {
    const result = await prisma.unit.findFirst({
      where:{
        id_unit: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Unit berhasil ditampilkan!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const updateUnit = async (req, res, next) => {
  try {
    const result = await prisma.unit.update({
      where:{
        id_unit: parseInt(req.params.id)
      },
      data:{
        nama_unit: req.body.nama_unit,
      }
    });

    return res.json({
      status: 200,
      message: 'Unit berhasil diupdate!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}

const destroyUnit = async (req, res, next) => {
  try {
    const result = await prisma.unit.delete({
      where:{
        id_unit: parseInt(req.params.id)
      }
    });

    return res.json({
      status: 200,
      message: 'Unit berhasil dihapus!',
      data: result
    });
  } catch (error) {
    next(error);
  }
}


module.exports = {createUnit, getUnit, getUnitById, updateUnit, destroyUnit};