import apis from '../models/apis.js'; //Importando a pasta de models, api. Dois pontos é para sair da pasta.

class ApiController {
    
    static getAllApis = (req, res) => {
        apis.find((err,apis) => {
            res.status(200).json(apis)
        })
    }
}

export default  ApiController;


//TRADUZINDO LINGUAGEM HUMANA : Criou classe apiController. Dentro da classe, colocamos algumas funções, como requisito e resposta. Colocamos apis.find (método) para encontrar epis. 
// Se der errado quando chegarmos na estrutura de dados, colocamos erro (err). Se a resposta for correta (200), traga o arquivo .json
// Classe se inicia com letra maiuscula 