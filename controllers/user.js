//importar o model correspondente ao controller
const {User} = require ('../models')

const controller = { } // objeto vazio
/*
Métodos CRUD do controller
create: cria um novo registro
retrive: lista (recupera) apenas um registro
update: atualiza um registro 
deleta: exclui um registro
*/
//inicio primeiro metodo CREATE API------------------
controller.create = async (req, res) => {
try{
   await User.create(req.body)
    // HTTP 201: Create
    res.status(201).end()
}
catch(error){
    console.error(error)
 }
}
//-------------------------------------------------FIM
//inici segundo metodo RETRIVE-------------------------
controller.retrive = async (req, res) => {
    try{
        const data = await User.findAll()
        //HTTP 200. OK (Implicito)
        res.send(data)
    }
    catch(error){

        console.error(error)
    }
}
//------------esse é o retrive one pra pegar um só---------
controller.retriveOne = async (req, res) => {
    try{
        const data = await User.findByPk(req.param.id)
        //HTTP 200. OK (Implicito)
        if(data) res.send(data)

        //HTTP 404: Not Found
        else res.status(404).end()
    }

    catch(error){
        console.error(error)
    }
}
//---------------------------------------------------FIM Retrive

module.exports = controller