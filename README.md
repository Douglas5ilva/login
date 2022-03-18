# login e Cadastro de Usuário

Back-end de login sem a implementação do front-end sendo usado por qualquer outra tecnologia front-end. Foi implememtado o JWT que gera os tokens para facilitar o login do usuario. Os dados do usuário são criptografatos e armazenados em um banco de dados NoSQL(mongoDB).

## Tecnologias Usadas
* [Node js](https://nodejs.org/en/)
  * [express](https://expressjs.com/pt-br/)
* [MangoDB](https://mongodb.com/)
  * [mongoose](https://mongoosejs.com/)
* [bcript](https://www.npmjs.com/package/bcrypt)
* [JWT](https://jwt.io/)

Como o intuito é um back-end de cadastro e login para ser usado com qualquer outras tecnologias, foi usado o [insomnia](https://insomnia.rest/) para inserir os dados.

## Como Usar

Abra o terminal 
* node app
* abra o navegador, na barra de pesquisa coloque http://localhost:3000
* com o insomia crie as rotas GET, POST, DELETE, agora e so inserir os dados 
agora você pode cadastrar, fazer login, atualizar, mostrar ou deletar um usuario. 
