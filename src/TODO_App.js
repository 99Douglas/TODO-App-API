const express = require('express')
const app = express()
const port = 8080

const tarefaController = require('./controllers/tarefa-controller');
const usuarioController = require('./controllers/usuario-controller');

tarefaController(app);
usuarioController(app);

app.listen(port, () => {
    console.log(`Tudo funcionando. Testar em localhost:${port}`)
})