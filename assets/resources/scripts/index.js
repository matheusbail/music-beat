function move() {
    window.location.href = "/music-beat/app/pages/login/login.html";
}
		function Previous() {
			window.history.back()
        }

$(document).ready(function(){
    $('.carousel').carousel();
  });

  setInterval(() => {
    $('.carousel').carousel('next')
  }, 2000);

