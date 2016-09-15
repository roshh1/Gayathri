var fbutton_1 = document.getElementById("fbutton-1");
var fexp_1 = document.getElementById("fexp-1");
var fsmall_1 = document.getElementById("fsmall-1");
fbutton_1.addEventListener("click", frameExp);

var fbutton_2 = document.getElementById("fbutton-2");
var fexp_2 = document.getElementById("fexp-2");
var fsmall_2 = document.getElementById("fsmall-2");
fbutton_2.addEventListener("click", frameExp);

var fbutton_3 = document.getElementById("fbutton-3");
var fexp_3 = document.getElementById("fexp-3");
var fsmall_3 = document.getElementById("fsmall-3");
fbutton_3.addEventListener("click", frameExp);

function frameExp() {
	var allExp = [fexp_1, fexp_2, fexp_3 ];
	var allSmall = [fsmall_1, fsmall_2, fsmall_3];
	for (var i = 0; i < allExp.length; i++) {
		allExp[i].className = "hide";
		allSmall[i].className = "frames col-3";

	}

	var frameExpId = this.attributes["data-exp"].value;
	var fexpId = document.getElementById(frameExpId);
	var frameSmallId = this.attributes["data-hide"].value;
	var fsmallId = document.getElementById(frameSmallId);
	
	fexpId.className = "frame-expand col-9";
	fsmallId.className = "hide frames col-3";
	}