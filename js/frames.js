var fbutton_1 = document.getElementById("fbutton-1");
var fexp_1 = document.getElementById("fexp-1");
var fsmall_1 = document.getElementById("fsmall-1");
fbutton_1.addEventListener("click", frameExp);
var close_1 = document.getElementById("close-1");
close_1.addEventListener("click", closeExp);


var fbutton_2 = document.getElementById("fbutton-2");
var fexp_2 = document.getElementById("fexp-2");
var fsmall_2 = document.getElementById("fsmall-2");
fbutton_2.addEventListener("click", frameExp);
var close_2 = document.getElementById("close-2");
close_2.addEventListener("click", closeExp);

var fbutton_3 = document.getElementById("fbutton-3");
var fexp_3 = document.getElementById("fexp-3");
var fsmall_3 = document.getElementById("fsmall-3");
fbutton_3.addEventListener("click", frameExp);
var close_3 = document.getElementById("close-3");
close_3.addEventListener("click", closeExp);

var fbutton_4 = document.getElementById("fbutton-4");
var fexp_4 = document.getElementById("fexp-4");
var fsmall_4 = document.getElementById("fsmall-4");
fbutton_4.addEventListener("click", frameExp);
var close_4 = document.getElementById("close-4");
close_4.addEventListener("click", closeExp);


function frameExp() {
	var allExp = [fexp_1, fexp_2, fexp_3, fexp_4 ];
	var allSmall = [fsmall_1, fsmall_2, fsmall_3, fsmall_4];
	for (var i = 0; i < allExp.length; i++) {
		allExp[i].className = "hide";
		allSmall[i].className = "frames";

	}

	var frameExpId = this.attributes["data-exp"].value;
	var fexpId = document.getElementById(frameExpId);
	var frameSmallId = this.attributes["data-hide"].value;
	var fsmallId = document.getElementById(frameSmallId);
	
	fexpId.className = "frame-expand";
	fsmallId.className = "hide frames";
	}

function closeExp (){
	var frameExpclose = this.attributes["data-exp"].value;
	var fexpClose = document.getElementById(frameExpclose);
	var frameSmallclose = this.attributes["data-hide"].value;
	var fsmallclose = document.getElementById(frameSmallclose);
	
	fexpClose.className = "hide frame-expand";
	fsmallclose.className = "frames";
}

