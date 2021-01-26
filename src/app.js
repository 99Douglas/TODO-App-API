const express = require('express');
const app = express();
const port = 8080;

const tarefaController = require('./controllers/tarefa-controller');
const usuarioController = require('./controllers/usuario-controller');
const tarefaModel = require('./models/tarefa-model');
const usuarioModel = require('./models/usuario-model');
const bd = require('./infra/bd');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

tarefaController(app, bd);
usuarioController(app, bd);


app.listen(port, () => {
    console.log(`Tudo funcionando. Testar em localhost:${port}`)
});