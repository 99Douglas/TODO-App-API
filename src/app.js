const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8080;

const tarefaController = require('./controllers/tarefa-controller');
const usuarioController = require('./controllers/usuario-controller');
const bd = require('./infra/sqlite-db');

app.use(bodyParser.json());
app.use(cors());

tarefaController(app, bd);
usuarioController(app, bd);


app.listen(port, () => {
    console.log(`Tudo funcionando. Testar em localhost:${port}`)
});