# TODO-App-API

**Bem-vindo!** Aqui você encontrará minha primeira API, feita com o intuito de ser o MVP de um TODO App.

## Instalando as dependências e inicializando o projeto

Para instalar as dependências do projeto é necessário utilizar o comando _npm install_ ou _npm i_.

Para inicializar o projeto, é necessário utilizar o comando _npm start_.

## Rotas, comandos e especificações

A API segue o **padrão REST**, sendo responsável pelas **operações de CRUD** em um banco de dados.

Sendo assim, aqui estão as possíveis operações e rotas para as duas entidades (**Usuários** e **Tarefas**):

_Usuários_:

Rota para **buscar todos os usuários**: [http://localhost:8080/usuarios](http://localhost:8080/usuarios) - Rota do tipo GET.

Rota para **buscar _um único_ usuário**: [http://localhost:8080/usuarios/id](http://localhost:8080/usuarios/id) - Rota do tipo GET, insira o **id do usuário** no lugar da palavra **id**.

Rota para **inserir um novo usuário**: [http://localhost:8080/usuarios](http://localhost:8080/usuarios) - Rota do tipo POST, escreva no corpo da requisição os valores a serem inseridos, seguindo o padrão mostrado na requisição GET.

Rota para **deletar um usuário**: [http://localhost:8080/usuarios/id](http://localhost:8080/usuarios/id) - Rota do tipo DELETE, insira o **id do usuário** no lugar da palavra **id**.

Rota para **atualizar um usuário**: [http://localhost:8080/usuarios/id](http://localhost:8080/usuarios/id) - Rota do tipo UPDATE, insira o **id do usuário** no lugar da palavra **id** e escreva todas as informações do usuário no corpo da requisição, já com as mudanças feitas.

_Tarefas_:

Rota para **buscar todas as tarefas**: [http://localhost:8080/tarefas](http://localhost:8080/tarefas) - Rota do tipo GET.

Rota para **buscar _uma única_ tarefa**: [http://localhost:8080/tarefas/id](http://localhost:8080/tarefas/id) - Rota do tipo GET, insira o **id da tarefa** no lugar da palavra **id**.

Rota para **inserir uma nova tarefa**: [http://localhost:8080/tarefas](http://localhost:8080/tarefas) - Rota do tipo POST, escreva no corpo da requisição os valores a serem inseridos, seguindo o padrão mostrado na requisição GET.

Rota para **deletar uma tarefa**: [http://localhost:8080/tarefas/id](http://localhost:8080/tarefas/id) - Rota do tipo DELETE, insira o **id da tarefa** no lugar da palavra **id**.

Rota para **atualizar uma tarefa**: [http://localhost:8080/tarefas/id](http://localhost:8080/tarefas/id) - Rota do tipo UPDATE, insira o **id do usuário** no lugar da palavra **id** e escreva todas as informações do usuário no corpo da requisição, já com as mudanças feitas.