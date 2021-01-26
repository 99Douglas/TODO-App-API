const Usuario = require('../models/usuario-model');

module.exports = (app, bd) => { 
    app.get('/usuario', (req, res) => {
        res.send(bd.usuarios);
    });
    app.get('/usuario/:email', (req, res) => {
        for (let usuario of bd.usuarios) {
            if (usuario._email == req.params.email) {
                res.send(usuario);
            }
        }
        res.send('Email não encontrado no banco de dados')
    });
    app.post('/usuario', (req, res) => {
        const novoUsuario = new Usuario(req.body.nome, req.body.email, req.body.senha);
        bd.usuarios.push(novoUsuario);
        res.send('Rota POST de tarefa ativada: usuario adicionado ao banco de dados');
    });
    app.delete('/usuario/:email', (req, res) => {
        let novoArray = [];
        for (let i = 0; i < bd.usuarios.length; i++) {
            if (bd.usuarios[i]._email !== req.params.email) {
                novoArray.push(bd.usuarios[i]);
            }
        }
        bd.usuarios = novoArray;
        res.send(`Rota de deleção ativada! ${req.params.email} retirado do banco de dados.`);
    });
    app.put('/usuario/:email', (req, res) => {
        for (let usuario of bd.usuarios) {
            if (usuario._email == req.params.email) {
                usuario._nome = req.body.nome;
                usuario._senha = req.body.senha;
            }
        }
        res.send(`Rota de update ativada! ${req.params.email} atualizado no banco de dados.`);
    });
}