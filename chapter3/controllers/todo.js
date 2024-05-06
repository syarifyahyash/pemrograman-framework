const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getTodos = async (req, res, next) =>{
  try {
    const result = await prisma.todo.findMany();
  
    return res.json({
      status: true,
      message: 'Todo retrieved successfully',
      data: result,
    });
    
  } catch (error) {
    next(error);
  }
}

const getTodosById = async (req, res, next) =>{
  try {
    const result = await prisma.todo.findFirst()({
      data: {
        todo: req.body.todo,
        status: false,
      }
    });
  
    return res.json({
      status: true,
      message: 'Todo retrieved successfully',
      data: result,
    });
    
  } catch (error) {
    next(error);
  }
}

const createTodo = async (req, res, next) =>{
  try {
    const result = await prisma.todo.create({
      data: {
        todo: req.body.todo,
        status: 0,
      }
    });
  
    return res.json({
      status: true,
      message: 'Todo created successfully',
      data: result,
    });
    
  } catch (error) {
    next(error);
  }
}


module.exports = {
  createTodo, getTodos, getTodosById
}