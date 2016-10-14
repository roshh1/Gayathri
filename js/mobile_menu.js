var mobile_menu = document.getElementById('mobile-menu');
var active = document.getElementsByClassName('active-p');
var titleMenu = document.getElementsByClassName('title-list');

mobile_menu.addEventListener('click', menuExpand);

function menuExpand() {
	if ( active[0].style.display = "none" ) {
		 active[0].style.display = "block";
		for (var i = 0; i < titleMenu.length; i++) {
		 titleMenu[i].style.display = "block"; }

	} else {
		active[0].style.display = "none";
		for (var a = 0; a < titleMenu.length; a++) {
		 titleMenu[a].style.display = "none"; }
		}
}