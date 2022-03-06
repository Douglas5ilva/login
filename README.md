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

Para rodar o programa na sua maquina além de instalar as ferramentas mostradas anteriormente você vai precisar do insomia para inserir os dodos.
Depois de baixar as ferramentas citadas, inicie o programa com node app no seu terminal, em seguida com o insomia crie as rotas POST, GET, DELETE, e pronto
agora você pode cadastrar, fazer login, apagar, mostrar ou deletar um usuario.
