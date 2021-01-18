
module.exports = (app) => { 
    app.get('/usuario', (req, res) => {
        res.send('Rastreamento da aplicação feito com nodemon')
    });
    app.post('/usuario', (req, res) => {
        res.send('Rota POST de usuario ativada: usuario adicionado ao banco de dados')
    });
}