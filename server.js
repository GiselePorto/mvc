import app from './src/app.js';

const port = 2727;

//.listen ouve o servidor em tempo remoto

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`)
})