class user{
    user(email, senha){
        this.email = email;
        this.nome = senha;
    }
}

function modalOpen(){
    let Modalelem = document.querySelector('.modal');
    let instance = M.Modal.init(Modalelem);
    instance.open();
}