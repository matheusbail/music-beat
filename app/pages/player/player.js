"use strict"
import { UserData } from './user.js';

window.addEventListener("keydown", function(e) //funcao anonima com arg
{
      if(e.key === "+"){
        alert("Seu Dispositivo esta com defeito");
        
      }
})


// funcao anonima, e confirm
(function() {
  let nome = confirm('Voce gostaria de receber as novidades de musicas?');}());
  
$(document).ready(function(){
$('.sidenav').sidenav();}); //efeito de slide vindo do framework materialize

// funcao aninhada e funcao automatica
function mensagemNaTela() {
  let mensagem = "Buscando novos Lancamentos.....";

  function listarMensagem() {
    let div = document.createElement("div");
    div.textContent = mensagem;
    document.body.appendChild(div);
  }

  setTimeout(listarMensagem, 3000);
}

mensagemNaTela();
 


function recuperarDados() {
  
  let dadosString = localStorage.getItem("dados");
  let dados = JSON.parse(dadosString);
  let user = new UserData(dados.email,dados.senha);
  let email = dados.email;
  let senha = dados.senha;
  
  user.teste();

  // imprime na tela 
  console.log("Email: " + email);
  console.log("Senha: " + senha);
}
// recupera dados do JSON
recuperarDados();


let color = sessionStorage.backgroundColor;
  if(color){
    document.body.style.backgroundColor = color;
  }


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
