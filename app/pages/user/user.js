"use strict"



  fetch('http://localhost:3000/users')
.then(req=> req.json()) //faz requerimento aoJson
.then(data => showUser(data)) // executa a funcao usando os dados requeridos


function showUser(users){
  const usuario = users.map((user) =>`${user.email}`); // mapeia so dados do Json como uma array para listar

  document.getElementById('server').innerHTML = usuario; // altera o elemento do DOM com os dados, altera a div
}

fetch('http://localhost:3000/users')
.then(req=> req.json())
.then(data => showName(data));

function showName(names){
  const nomes = names.map((name) =>`${name.nomedeUsuario}`);

  document.getElementById('serverName').innerHTML = nomes;
}

let color = sessionStorage.backgroundColor;
  if(color){
    document.body.style.backgroundColor = color;
  }

  