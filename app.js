const express = require('express') 
//passa informações da pasta express para a constante express

const userRepository = require('./repositories/users')

const app = express()
//torna express uma função e joga pra constante app

const port = 3000
//definir a porta 3000 pro node

app.use(express.json());
//permitir o uso de JSON na aplicação


//get users
app.get('/users', (request, response) => { //users, define a rota e define a requisição e resposta do servidor
  response.json(userRepository.getUsers()); //retorna todos os usuários do bd
})

app.get('/users/:id', (request, response) =>{ //adicionar informações a um usuário específico

  //pegar o id da requisição
  const idUser = request.params.id;

  //encontrar o usuário correspondente no bd
 
  //responder a requisição com as infos do users
  response.json(userRepository.getUserById(idUser));

})

app.post("/users", (request, response) =>{ //posto=creat, vai inserir um novo usuário

  //pegar o corpo da requisição
  const body = request.body;

  //criar um novo objeto a partir desse corpo
 

  //responder a requisição com o banco completo
  response.json(userRepository.createUser(body));
})

app.delete("/users/:id", (request, response)=>{ //função para deletar informações

  //pegar o id da requisição
  const idUser = request.params.id;

  userRepository.deleteUser(idUser),
  response.json("Apagado com sucesso");

  //deletar o condenado

  //responder com o meu banco atualizado
})

app.patch("/users/:id", (request, response) => { //função para atualizar informações

  //pegar o id da requisição
  const idUser = request.params.id;

  const body = request.body;

  
  userRepository.updateUser(idUser, body);
  response.status(200).json();
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})