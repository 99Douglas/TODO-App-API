const UsuariosDao = require('../DAO/usuarios-DAO')

module.exports = (app, bd) => { 

    const usuariosDAO = new UsuariosDao(bd);

    app.get('/usuarios', async (req, res) => {
        try {
            const retornoPositivo = await usuariosDAO.listaUsuarios();
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.get('/usuarios/:id', async (req, res) => {
        try {
            const retornoPositivo = await usuariosDAO.buscaUmUsuario(req.params.id);
            res.status(200).send(retornoPositivo);
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.post('/usuarios', async (req, res) => {
        try {
            const retornoPositivo = await usuariosDAO.adicionaUsuario([req.body.nome, req.body.email, req.body.senha]);
            res.status(200).send(retornoPositivo)
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.delete('/usuarios/:id', async (req, res) => {
        try {
            const retornoPositivo = await usuariosDAO.deletaUsuario(req.params.id);
            res.status(200).send(retornoPositivo)
        } catch (erro) {
            res.status(400).send(erro);
        };
    });

    app.put('/usuarios/:id', async (req, res) => {
        try {
            const retornoPositivo = await usuariosDAO.atualizaUsuario([req.body.nome, req.body.email, req.body.senha, req.params.id]);
            res.status(200).send(retornoPositivo)
        } catch (erro) {
            res.status(400).send(erro);
        };
    });
}