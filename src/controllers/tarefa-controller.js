const TarefasDao = require('../DAO/tarefas-DAO')

module.exports = (app, bd) => { 

    const tarefasDAO = new TarefasDao(bd);

    app.get('/tarefas', async (req, res) => {
        try {
            const retornoPositivo = await tarefasDAO.listaTarefas();
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.get('/tarefas/:id', async (req, res) => {
        try {
            const retornoPositivo = await tarefasDAO.buscaUmaTarefa(req.params.id);
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.post('/tarefas', async (req, res) => {
        try {
            const retornoPositivo = await tarefasDAO.criaTarefa([req.body.titulo, req.body.descricao, req.body.status, req.body.data_criacao, req.body.id_usuario]);
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.delete('/tarefas/:id', async (req, res) => {
        try {
            const retornoPositivo = await tarefasDAO.deletaTarefa(req.params.id)
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.put('/tarefas/:id', async (req, res) => {
         try {
            const retornoPositivo = await tarefasDAO.atualizaTarefa([req.body.titulo, req.body.descricao, req.body.status, req.body.data_criacao, req.body.id_usuario, req.params.id]);
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });
}