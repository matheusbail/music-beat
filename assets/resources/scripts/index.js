function move() {
    window.location.href = "/music-beat/app/pages/login/login.html";
}
		function Previous() {
			window.history.back()
        }

//window.setTimeout(move(),1000);

//window.setInterval(move(),1000);

document.addEventListener('DOMContentLoaded', function () {
   
    let Modalelem = document.querySelector('.modal');
    let instance = M.Modal.init(Modalelem);
    instance.open();
 
 
});


       