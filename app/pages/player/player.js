
(function() {
    let nome = confirm("Voce gostaria de receber as novidades de musicas?");
   
  })();
  
  function modalOpen(){
    let Modalelem = document.querySelector('.modal');
    let instance = M.Modal.init(Modalelem);
    instance.open();
}

$(document).ready(function(){
  $('.sidenav').sidenav();
});

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
