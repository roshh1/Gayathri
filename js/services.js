var printing = document.getElementById("printing");
var lamination = document.getElementById("lamination");
var shooting = document.getElementById("shooting");
var dimond = document.getElementById("dimond");
var silver = document.getElementById("silver");

var other_services = document.getElementById("other-services");
var txt_printing = document.getElementById("txt-printing");
var txt_lamination = document.getElementById("txt-lamination");
var txt_shooting = document.getElementById("txt-shooting");
var txt_dimond = document.getElementById("txt-dimond");
var txt_silver = document.getElementById("txt-silver");

printing.addEventListener("click", pickLink);
lamination.addEventListener("click", pickLink);
shooting.addEventListener("click", pickLink);
dimond.addEventListener("click", pickLink);
silver.addEventListener("click", pickLink);

function pickLink () {
	var allContent = [other_services, txt_printing, txt_lamination, txt_shooting, txt_dimond, txt_silver];	
	for (var i = 0; i < allContent.length; i++) {
		allContent[i].className = "hide";
	}
	var pickId = this.attributes["data-content"].value;
	var pick = document.getElementById(pickId);
	
	if ( pick.className === "hide") {
		pick.className = "services col-9";
	}
	else {
		pick.className = "hide";
	}
}

function imgExp (close, imgId) {
	var closeSel = close;
	var allImg = document.getElementsByClassName(close);	
	for (var i = 0; i < allImg.length; i++) {
		allImg[i].className = "hide";
	}
	
	var imgBig = document.getElementById(imgId);
	
	if ( imgBig.className = "hide") {
		var selNam = closeSel + " about-txt magniflier";
		imgBig.className = selNam ;
	}
	else {
		imgBig.className = "hide";
	}
}