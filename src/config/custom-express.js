const express = require('express');
const app = express();
module.exports = app;

const rotas = require('../app/rotas');

rotas(app);