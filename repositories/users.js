let {bd} = require('../databases/users')

const getUsers = () =>{

    return bd;
}

const getUserById = (idUser) => {
    return bd.filter((usuario) => usuario.id === idUser);

}

const createUser = (body) =>{
    const newUser = {
        id: (bd.length+1).toString(),
        name: body.name
      }
    
      //adicionar esse novo objeto no banco
      bd.push(newUser);
      return newUser;
}

const deleteUser = (idUser) => {
    //percorrer o banco e encontrar quem tem o id da requisição
    bd = bd.filter((usuario) => usuario.id != idUser);
    return null;
}

const updateUser = (idUser, body) => {
    bd = bd.map((usuario) => {

        if (usuario.id === idUser){
          //atualizar as informações
          usuario.name = body.name;
        }
        return usuario
})
return bd;
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}