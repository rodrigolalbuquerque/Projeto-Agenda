const express = require('express');
const route = express.Router();

const { loginRequired } = require('./src/middlewares/middleware');
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

//Rotas da home
route.get('/', homeController.index);

//Rotas de login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

//Rotas de contato
route.get('/contato', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.registerContact);
route.get('/contato/:id', loginRequired, contatoController.editContact);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.delete);


module.exports = route;

