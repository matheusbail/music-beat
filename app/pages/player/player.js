
(function() {
    let nome = confirm("Voce gostaria de receber as novidades de musicas?");
   
  })();
  
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
  function modalOpen(){
    let Modalelem = document.querySelector('.modal');
    let instance = M.Modal.init(Modalelem);
    instance.open();
}

