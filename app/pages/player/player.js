"use strict"
import { UserData } from './user.js';

window.addEventListener("keydown", function(e) //funcao anonima com arg
{
      if(e.key === "+"){
        alert("Seu Dispositivo esta com defeito");
        
      }
})

document.getElementById("playAndPauseBtn").addEventListener("click", function(){ // criaçao de obj via funcao
  let musica = new Object();
    musica.Titulo = "Wake Up"
    musica.Lancamento = 1992;
    musica.Album = "Rage Against The Machine";
  let musToStr = JSON.stringify(musica, null,2);
  document.getElementById("OO").innerHTML = musToStr;
})


// funcao anonima, e confirm
(function() {
  let nome = confirm('Voce gostaria de receber as novidades de musicas?');}());
  
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




