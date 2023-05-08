"use strict"
import { UserData } from './user.js';

// funcao anonima, e confirm
(function() {
  let nome = confirm('Voce gostaria de receber as novidades de musicas?');}());
  
$(document).ready(function(){
$('.sidenav').sidenav();});
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
  let email = dados.email;
  let senha = dados.senha;
  let user = new UserData(dados.email,dados.senha);
  user.teste();

  // imprime na tela 
  console.log("Email: " + email);
  console.log("Senha: " + senha);
}
// recupera dados do JSON
recuperarDados();
