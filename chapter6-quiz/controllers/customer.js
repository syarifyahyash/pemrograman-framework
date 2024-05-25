const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCustomer = async (req, res, next) => {
  try {
    const { name, address, gender, age } = req.body;
    const newCustomer = await prisma.customer.create({
      data: {
        name,
        address,
        gender,
        age
      }
    });
    return res.status(201).json({
      status: true,
      message: 'Customer berhasil dibuat',
      data: newCustomer
    });
  } catch (error) {
    next(error);
  }
};

const getCustomers = async (req, res, next) => {
  try {
    const customers = await prisma.customer.findMany();
    return res.status(200).json({
      status: true,
      data: customers
    });
  } catch (error) {
    next(error);
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const customer = await prisma.customer.findUnique({
      where: { id: Number(id) }
    });
    if (!customer) {
      return res.status(404).json({
        status: false,
        message: 'Customer tidak ditemukan'
      });
    }
    return res.status(200).json({
      status: true,
      data: customer
    });
  } catch (error) {
    next(error);
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, gender, age } = req.body;
    const updatedCustomer = await prisma.customer.update({
      where: { id: Number(id) },
      data: { name, address, gender, age }
    });
    return res.status(200).json({
      status: true,
      message: 'Customer berhasil diperbarui',
      data: updatedCustomer
    });
  } catch (error) {
    next(error);
  }
};

const deleteCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    await prisma.customer.delete({
      where: { id: Number(id) }
    });
    return res.status(200).json({
      status: true,
      message: 'Customer berhasil dihapus'
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
};
