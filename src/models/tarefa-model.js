module.exports = class Tarefa {
    constructor(titulo, descricao, status, dataDeCriacao) {
        this._titulo = titulo;
        this._descricao = descricao;
        this._status = status;
        this._dataDeCriacao = dataDeCriacao;
    }
};