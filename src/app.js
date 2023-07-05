import express, { json } from 'express'; 
import index from './routes/index.js';
import db from './config/dbConnect.js';
import apis from './routes/api.js';

const app = express(); // esta variável recebe o express e será usada em outros arquivos.

app.use(json()); //Começo da conexão para as rotas.
app.use('/', index); //Primeira rota que teremos acesso.
app.use('/apis', apis);

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log('conexão com o banco feita com sucesso')

});

export default app;  //Agora estamos exportando arquivos após importá-los