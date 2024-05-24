const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();

const createUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data : {
        "email" : req.body.email,
        "name" : req.body.name
      }
    });

    return res.json({
      "status" : "success",
      "message" : "User created successfully",
      "data" : user
    })
  } catch (error) {
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany();

    return res.json({
      "status" : "success",
      "message" : "User retrieved successfully",
      "data" : user
    })
  } catch (error) {
    next(error);
  }
}


module.exports = { createUser, getUser };