import  Router  from 'express';
const router = Router();

 //Importando biblioteca
//.get é um método de requisição
// Uma variável apenas acende quando é chamada em algum momento após ser declarada

router.get('/', function (req, res) {
  res.status(200).send({
    title: 'Bem vindas a turma Devas do Full-Stack!',
    version: '1.0.0'
  })
})

export default router; 
