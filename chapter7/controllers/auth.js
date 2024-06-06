const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const { generateToken, decodeToken } = require('../helpers/token');
const axios = require('axios');

const login = async (req, res, next) => {
  try {
    // const usernya = 'umar';
    // const passwordnya = bcrypt.hashSync('123', 10);
    const { email, password } = req.body;
    const existUser = await prisma.user.findFirst({
      where: {
        email
      }
    });

    if(!existUser){
      return res.status(404).json({
        status: false,
        message: 'Username tidak ditemukan'
      });
    }

    const validUser = bcrypt.compareSync(password, existUser.password);

    if(!validUser){
      return res.status(401).json({
        status: false,
        message: 'Password tidak valid'
      });
    }

    return  res.json({
      status: true,
      message: 'Login berhasil',
      data: {
        token: generateToken(existUser)
      }
    });
  } catch (error) {
    next(error);
  }
}

const loginSimat = async (req, res, next) => {
  try {
    const { nim, password } = req.body;
    const response = await axios.post('https://api.unira.ac.id/v1/token', {
      username: nim,
      password
    }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    const response2 = await axios.get('https://api.unira.ac.id/v1/saya', {
      headers: {
        'Authorization': 'Bearer ' + response.data.data.attributes.access
      }
    });

    const user = await prisma.user.create({
      data: {
        username: response2.data.data.id,
        password: bcrypt.hashSync(password, 10),
        email: response2.data.data.attributes.email,
        thumbnail: response2.data.data.attributes.thumbnail,
        role: response2.data.data.attributes.type
      }
    });

    return res.json({
      status: true,
      message: 'Login berhasil dan Data berhasil tersimpan',
      data: response2.data,
      dataInputLogin: user
    
    });
  } catch (error) {
    next(error);
  }
}

const saya = async (req, res, next) => {
  try {
    // const body = req.body;
    const { token } = req.query;
    console.log(token);
    const validation = decodeToken(token);
    return res.json(validation)
  } catch (error) {
    next(error);
  }
}

const registration = async (req, res, next) => {
  try {
    const body = req.body;
    validateBodyRequest(body, res);
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: bcrypt.hashSync(body.password, 10),
        email: body.email
      }
    });

    return res.status(201).json({
      status: true,
      message: 'Data user berhasil di tambahkan',
      data: user
    });
  } catch (error) {
    next(error);
  }
}

function validateBodyRequest (body, res) {
  if(body.username == '' || body.username == undefined || body.username == null){
    return res.status(400).json({
      status: false,
      message: 'username tidak boleh kosong'
    });
  }

  if (body.password == '' || body.password == undefined || body.password == null) { 
    return res.status(400).json({
      status: false,
      message: 'password tidak boleh kosong'
    });
  }

  if(body.email == '' || body.email == undefined || body.email == null){
    return res.status(400).json({
      status: false,
      message: 'email tidak boleh kosong'
    });
  }
}

module.exports = {
  login,
  saya,
  registration,
  loginSimat
}