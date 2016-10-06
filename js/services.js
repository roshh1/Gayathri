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

var sil_thumb01 = document.getElementById("sil-thumb01");
var sil_thumb02 = document.getElementById("sil-thumb02");
var sil_thumb03 = document.getElementById("sil-thumb03");

var sil_01 = document.getElementById("sil-01");
var sil_02 = document.getElementById("sil-02");
var sil_03 = document.getElementById("sil-03");

sil_thumb01.addEventListener("click", imgExp);
sil_thumb02.addEventListener("click", imgExp);
sil_thumb03.addEventListener("click", imgExp);

function imgExp () {
	var allImg = [sil_01, sil_02, sil_03];	
	for (var i = 0; i < allImg.length; i++) {
		allImg[i].className = "hide";
	}
	var imgId = this.attributes["data-img"].value;
	var imgBig = document.getElementById(imgId);
	
	if ( imgBig.className === "hide") {
		imgBig.className = "about-txt magniflier";
	}
	else {
		imgBig.className = "hide";
	}
}