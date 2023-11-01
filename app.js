const express = require('express')
const userServices = require('./services/users')
const app = express()

const port = 3000


app.use(express.json());

app.get('/users', (request, response) => { 
  response.json(userServices.getUsers()); 
})

app.get('/users/:id', (request, response) =>{ 
  const idUser = request.params.id;
  response.json(userServices.getUserById(idUser));

})

app.post("/users", (request, response) =>{ 
  const body = request.body;
  response.status(201).json(userServices.createUser(body));
})

app.delete("/users/:id", (request, response)=>{ 
  const idUser = request.params.id;

  userServices.deleteUser(idUser),
  response.json("Apagado com sucesso");
})

app.patch("/users/:id", (request, response) => { 
  const idUser = request.params.id;

  const body = request.body;

  
  userServices.updateUser(idUser, body);
  response.status(200).json();
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})