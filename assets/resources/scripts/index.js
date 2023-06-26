"use strict";

function move() {
    window.location.href = "/app/pages/login/login.html";
}
		function Previous() {
			window.history.back();
        }
   
$(document).ready(function(){ 
    $('.carousel').carousel(); // uso de class tag jquery
  });
   //arrow function para setar timeout no carousel
  setInterval(() => {
    $('.carousel').carousel('next'); //uso de seletor next
  }, 2000);

  $("html").css("cursor: url('cursor url with protocol'), auto");

  // prompt 
  let promptUsuario = function(coValue, expiTime) {
    let nome = prompt("Qual é o seu nome?");
    alert(`Parabens, voce tem um otimo gosto musical, ${nome}!`);
    const d = new Date();
    d.setTime(d.getTime() + (expiTime*24*69*60*1000));
    let expire = "expire=" + d.toUTCString();
    document.cookie = nome + "=" + coValue + ";" + expire + ";path=/";
  };
  const theme = document.getElementById('theme');

  theme.addEventListener('click', function onClick(event) {
    document.body.style.backgroundColor = 'DarkSlateGrey ';
    sessionStorage.backgroundColor ="DarkSlateGrey";
  });


  function playAndPause(){
    let mediaPlayer = document.getElementById("myPlayer");
    let playAndPauseBtn = document.getElementById("playAndPauseBtn")
    if(mediaPlayer.paused == true){ 
      mediaPlayer.play();
      playAndPauseBtn.innerText="pause"
    }
    else {
      mediaPlayer.pause();
      
    }
  } 

  function toUser() 
{
    window.location.href = "/app/pages/user/user.html";
}

// funcao aninhada e funcao automatica criando div
function mensagemNaTela() {
  let mensagem = "Mensagem automática......checando servidor";

  function listarMensagem() {
    let div = document.createElement("div");
    div.classList.add('msg');
    div.textContent = mensagem;
    document.body.appendChild(div);
  }

  setTimeout(listarMensagem, 1500);
}

mensagemNaTela();