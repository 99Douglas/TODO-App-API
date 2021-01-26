const Tarefa = require('../models/tarefa-model')

module.exports = (app, bd) => { 
    app.get('/tarefas', (req, res) => {
        res.send(bd.tarefas)
    });
    app.post('/tarefas', (req, res) => {
        const novaTarefa = new Tarefa(req.body.titulo, req.body.descricao, req.body.status, req.body.dataDeCriacao);
        bd.tarefas.push(novaTarefa);
        res.send('Rota POST de tarefa ativada: tarefa adicionada ao banco de dados');
    });
}