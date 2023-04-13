class user{
    user(email, senha){
        this.email = email;
        this.nome = senha;
    }
}

$(document).ready(function(){
    $('.sidenav').sidenav();
  });


function modalOpen(){
    let Modalelem = document.querySelector('.modal');
    let instance = M.Modal.init(Modalelem);
    instance.open();
}