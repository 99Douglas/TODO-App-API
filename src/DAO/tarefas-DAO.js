module.exports = class TarefasDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaTarefas() {
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS", (error, linhas) => {
                if(error) reject('Erro ao consultar a tabela, verifique sua requisição');
                else resolve(linhas);
            });
        })
    };

    buscaUmaTarefa(chave) {
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM TAREFAS WHERE id = ?", chave, (error, linhas) => {
                if(error) reject('Erro ao consultar a tabela, verifique sua requisição');
                else resolve(linhas);
            });
        });
    };

    criaTarefa(infos) {
        return new Promise ((resolve, reject) => {
            this.bd.run("INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)", infos, (error) => {
                if(error) reject('Erro ao adicionar tarefa na tabela, verifique sua requisição');
                else resolve('Tarefa adicionada com sucesso!')
            });
        });
    };

    deletaTarefa(chave) {
        return new Promise ((resolve, reject) => {
            this.bd.run("DELETE FROM TAREFAS WHERE id = ?", chave, (error) => {
                if(error) reject('Erro ao deletar tarefa da tabela, verifique a requisição');
                else resolve('Tarefa deletada com sucesso!')
            });
        });
    };

    atualizaTarefa(infos) {
        return new Promise ((resolve, reject) => {
            this.bd.run("UPDATE TAREFAS SET TITULO = ?, DESCRICAO = ?, STATUS = ?, DATACRIACAO = ?, ID_USUARIO = ? WHERE id = ?", infos, (error) => {
                if(error) reject('Erro ao atualizar tarefa na tabela, verifique a requisição');
                else resolve('Tarefa atualizada com sucesso!')
            })
        })
    }

};