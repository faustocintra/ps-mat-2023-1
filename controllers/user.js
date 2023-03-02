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
controller.retrieveOne = async (req, res) => {
    try{
        const data = await User.findByPk(req.params.id)
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
//-------------------esse é o update--------
controller.update = async (req, res) =>{
    try{
        const response = await User.update (
            req.body,
            {where: { id: req.params.id}}
            )
        if(response [0] > 0 ){
            res.status(204).end()
        }
        else{
            // Não encontrou o registro para atualizar
            //http 404: not found
            res.status(404).end()
        }
    }
    catch(error){
        console.error(error)
    }
}
//-------------------fim update
//----------------DELETE
controller.delete = async (req, res) =>{
    try{
        const response = await User.destroy(
            {where: { id: req.params.id }}
    )
    if(response) {
        //encontrou e excluiu
        //http 204: no content
        res.status(204).end() 
    }
    else{
        //Não encontrou e não excluiu
        //404: not found
        res.status(404).end()
    }
    }
    catch(error){
        console.error(error)
    }
}

module.exports = controller