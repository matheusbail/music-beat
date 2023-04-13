function moveP() {
    window.location.href = "/music-beat/app/pages/player/player.html";
}


//document.addEventListener('DOMContentLoaded', function () {
    
//});  

let runAlert = setTimeout(function(){
    window.alert('TESTE DE TEXTO');
},2000)





function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);

    const dados = {
        email: email,
        senha: senha
      };

      const dadosString = JSON.stringify(dados);

      localStorage.setItem("dados", dadosString);
  }
  

  