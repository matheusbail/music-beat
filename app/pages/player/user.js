export class UserData{
    user(email, senha){
    this.email = email;
    this.senha = senha ;
}
        teste(){
            console.log(`Olá, ${this.email}`);
        }
}

let color = sessionStorage.backgroundColor;
  if(color){
    document.body.style.backgroundColor = color;
  }