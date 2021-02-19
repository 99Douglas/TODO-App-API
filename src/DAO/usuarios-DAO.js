module.exports = class UsuariosDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaUsuarios() {
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS", (error, linhas) => {
                if(error) reject("Erro ao consultar tabela usuários, verifique sua requisição");
                else resolve(linhas);
            });
        });
    };

    buscaUmUsuario(chave) {
        return new Promise ((resolve, reject) => {
            this.bd.all("SELECT * FROM USUARIOS WHERE id = ?", chave, (error, linhas) => {
                if(error) reject('Erro ao consultar a tabela, verifique sua requisição');
                else resolve(linhas);
            });
        });
    };

    adicionaUsuario(infos) {
        return new Promise ((resolve, reject) => {
            this.bd.run("INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)", infos, (error) => {
                if(error) reject('Erro ao adicionar usuário na tabela, verifique sua requisição');
                else resolve('Usuário inserido com sucesso!');
            });
        });
    };

    deletaUsuario(chave) {
        return new Promise ((resolve, reject) => {
            this.bd.run("DELETE FROM USUARIOS WHERE id = ?", chave, (error) => {
                if(error) reject('Erro ao deletar usuário da tabela, verifique sua requisição');
                else resolve('Usuário deletado com sucesso!')
            });
        });
    };

    atualizaUsuario(infos) {
        return new Promise((resolve, reject) => {
            this.bd.run("UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE id = ?", infos, (error) => {
                if(error) reject('Erro ao atualizar usuário da tabela, verifique sua requisição');
                else resolve('Usuário atualizado com sucesso!');
            });
        });
    };
}