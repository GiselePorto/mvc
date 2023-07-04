import mongoose from 'mongoose';

const apiSchema = new mongoose.Schema(
    {
            nome: {type: String, required: true},
            gênero: {type: String, required: true},
            protagonista: {type: String, required: true},
            antagonista: {type: String, required: true},
            tipoDeCombate: {type: String, required: true},
            plataforma: {type: String, required: true},
            dataDeLançamento: {type: String},
            diretor: {type: String},
            zerado : {type: Boolean, required: true}
    }
)

const apis = mongoose.model('apis', apiSchema);

module.exports = apis;