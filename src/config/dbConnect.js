import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://admin:Papai123@cluster0.vre6zdq.mongodb.net/senac2'); 
// A função connect guarda a string de conexão dentro dos parênteses

let db = mongoose.connection;
// Agora criamos uma variável que guarda a ação de conectar nosso usuário ao mongoDB

export default db;