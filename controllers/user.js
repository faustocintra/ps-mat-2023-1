//importar o model correspondente ao controller
const {user} = require ('../models')

const controller = { } // objeto vazio
/*
Métodos CRUD do controller
create: cria um novo registro
retrive: lista (recupera) apenas um registro
update: atualiza um registro 
deleta: exclui um registro
*/

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
module.exports = controller