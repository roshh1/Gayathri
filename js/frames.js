function frameExp(frameExpId, frameSmallId) {
	var allExp = document.getElementsByClassName('frame-expand');
	var allSmall = document.getElementsByClassName('smallhide');
	for (var i = 0; i < allExp.length; i++) {
		allExp[i].className = "hide";
		allSmall[i].className = "frames";

	}

	var fexpId = document.getElementById(frameExpId);
	var fsmallId = document.getElementById(frameSmallId);
	
	fexpId.className = "frame-expand";
	fsmallId.className = "smallhide hide";
	}

function closeExp (frameExpclose, frameSmallclose){
	var fexpClose = document.getElementById(frameExpclose);
	var fsmallclose = document.getElementById(frameSmallclose);
	
	fexpClose.className = "hide";
	fsmallclose.className = "frames";
}
// image change
function imgExp (close, imgId) {
	var closeSel = close;
	var allImg = document.getElementsByClassName(closeSel);	
	for (var i = 0; i < allImg.length; i++) {
		allImg[i].className = "hide";
	}
	
	var imgBig = document.getElementById(imgId);
	
	if ( imgBig.className = "hide") {
		var selNam = closeSel + " fexp-img magniflier";
		imgBig.className = selNam ;
	}
	else {
		imgBig.className = "hide";
	}
}

// sidebar 
var ready = document.getElementById("ready");
var collage = document.getElementById("collage");
var lighting = document.getElementById("lighting");

var ready_frames = document.getElementById("ready-frames");
var collage_frames = document.getElementById("collage-frames");
var lighting_box = document.getElementById("lighting-box");


ready.addEventListener("click", pickLink);
collage.addEventListener("click", pickLink);
lighting.addEventListener("click", pickLink);


function pickLink () {
	var allContent = [ready_frames, collage_frames, lighting_box];	
	for (var i = 0; i < allContent.length; i++) {
		allContent[i].className = "hide";
	}
	var pickId = this.attributes["data-content"].value;
	var pick = document.getElementById(pickId);
	
	if ( pick.className === "hide") {
		pick.className = "";
	}
	else {
		pick.className = "hide";
	}
}

function finalPrice(selId){
	var x = document.getElementById(selId);
	var y = x.attributes["data-p"].value;
	var z = document.getElementById(y);

	var price = x.value;
	z.innerHTML = price;

}