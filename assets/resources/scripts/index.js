

function move() {
    window.location.href = "/music-beat/app/pages/login/login.html";
}
		function Previous() {
			window.history.back()
        }
  
$(document).ready(function(){
    $('.carousel').carousel();
  });
   //arrow function para setar timeout no carousel
  setInterval(() => {
    $('.carousel').carousel('next')
  }, 2000);

  $("html").css("cursor: url('cursor url with protocol'), auto");


  function teste(){
    alert("oi");
  }

  // prompt 
  let promptUsuario = function() {
    let nome = prompt("Qual é o seu nome?");
    alert(`Parabens, voce tem um otimo gosto musical, ${nome}!`);
  };

  