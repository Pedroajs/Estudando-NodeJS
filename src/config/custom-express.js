require('marko/node-require');
require('marko/express');


const express = require('express');
const bodyParser = require('body-parser');
const app = express();
module.exports = app;

const rotas = require('../app/rotas/rotas');

app.use(
    bodyParser.urlencoded(
        {
            extended: true
        }
    )
)
rotas(app);