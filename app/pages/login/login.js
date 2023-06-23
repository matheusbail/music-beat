"use strict";
function moveP() 
{
    window.location.href = "/app/pages/player/player.html";
}

  
function destacarCampo(campo) {
    campo.style.backgroundColor = "#FFFF99";
  }
    
  function removerDestaqueCampo(campo) {
    campo.style.backgroundColor = "";
}

// alert com funcao anonima retornando string
let runAlert = setTimeout(function(){
    window.alert('CUIDADO AO CLICAR EM POPUPS');
},2000);


function validate(frm){
  if(frm.email.value == " " || frm.email.value == null ||frm.email.value < 3)
    alert("O Campo não pode ser Vazio, por favor, preencha");
    frm.email.focus();
    return false;
}

function login() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    let dados = {
        email: email,
        senha: senha
      };

      let dadosString = JSON.stringify(dados);

      localStorage.setItem("dados", dadosString);
  }
  let color = sessionStorage.backgroundColor;
  if(color){
    document.body.style.backgroundColor = color;
  }

