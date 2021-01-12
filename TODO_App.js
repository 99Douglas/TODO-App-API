const express = require('express')
const app = express()
const port = 8080

app.get('/usuario', (req, res) => {
    res.send('Rota ativada com GET e recurso usuário: valores de usuário devem ser retornados')
});

app.get('/tarefas', (req, res) => {
    res.send('Rota ativada com GET e recurso tarefas: valores de tarefas devem ser retornados')
});

app.listen(port, () => {
    console.log(`Tudo funcionando. Testar em localhost:${port}`)
})