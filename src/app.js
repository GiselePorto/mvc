const  express = require ('express'); // Importamos biblioteca
const index = require ('./routes/index.js');

const app = express(); // esta variável recebe o express e será usada em outros arquivos.

//.use é um elemento de express, ele roteia um caminho.


app.use(express.json()); //Começo da conexão para as rotas.
app.use('/', index); //Primeira rota que teremos acesso.

module.exports = app; //Agora estamos exportando arquivos após importá-los