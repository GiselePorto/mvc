import apis from '../models/apis.js'; //Importando a pasta de models, api. Dois pontos é para sair da pasta.

class ApiController {
    
    static getAllApis = (req, res) => {
        apis.find((err,apis) => {
            res.status(200).json(apis)
        })
    }

    static createApis = (req, res) => {
        let api = new apis(req.body);
      
        api.save((err) => {
          if (err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar api` })
          } else {
            res.status(201).send(api.toJSON())
          }
        })
    }
}

export default  ApiController;


//TRADUZINDO LINGUAGEM HUMANA : Criou classe apiController. Dentro da classe, colocamos algumas funções, como requisito e resposta. Colocamos apis.find (método) para encontrar epis. 
// Se der errado quando chegarmos na estrutura de dados, colocamos erro (err). Se a resposta for correta (200), traga o arquivo .json
// Classe se inicia com letra maiuscula 