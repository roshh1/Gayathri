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

var fbutton_5 = document.getElementById("fbutton-5");
var fexp_5 = document.getElementById("fexp-5");
var fsmall_5 = document.getElementById("fsmall-5");
fbutton_5.addEventListener("click", frameExp);
var close_5 = document.getElementById("close-5");
close_5.addEventListener("click", closeExp);

var fbutton_6 = document.getElementById("fbutton-6");
var fexp_6 = document.getElementById("fexp-6");
var fsmall_6 = document.getElementById("fsmall-6");
fbutton_6.addEventListener("click", frameExp);
var close_6 = document.getElementById("close-6");
close_6.addEventListener("click", closeExp);

var fbutton_7 = document.getElementById("fbutton-7");
var fexp_7 = document.getElementById("fexp-7");
var fsmall_7 = document.getElementById("fsmall-7");
fbutton_7.addEventListener("click", frameExp);
var close_7 = document.getElementById("close-7");
close_7.addEventListener("click", closeExp);

var fbutton_8 = document.getElementById("fbutton-8");
var fexp_8 = document.getElementById("fexp-8");
var fsmall_8 = document.getElementById("fsmall-8");
fbutton_8.addEventListener("click", frameExp);
var close_8 = document.getElementById("close-8");
close_8.addEventListener("click", closeExp);

var fbutton_9 = document.getElementById("fbutton-9");
var fexp_9 = document.getElementById("fexp-9");
var fsmall_9 = document.getElementById("fsmall-9");
fbutton_9.addEventListener("click", frameExp);
var close_9 = document.getElementById("close-9");
close_9.addEventListener("click", closeExp);

var fbutton_10 = document.getElementById("fbutton-10");
var fexp_10 = document.getElementById("fexp-10");
var fsmall_10 = document.getElementById("fsmall-10");
fbutton_10.addEventListener("click", frameExp);
var close_10 = document.getElementById("close-10");
close_10.addEventListener("click", closeExp);

var fbutton_11 = document.getElementById("fbutton-11");
var fexp_11 = document.getElementById("fexp-11");
var fsmall_11 = document.getElementById("fsmall-11");
fbutton_11.addEventListener("click", frameExp);
var close_11 = document.getElementById("close-11");
close_11.addEventListener("click", closeExp);

var fbutton_12 = document.getElementById("fbutton-12");
var fexp_12 = document.getElementById("fexp-12");
var fsmall_12 = document.getElementById("fsmall-12");
fbutton_12.addEventListener("click", frameExp);
var close_12 = document.getElementById("close-12");
close_12.addEventListener("click", closeExp);

var fbutton_13 = document.getElementById("fbutton-13");
var fexp_13 = document.getElementById("fexp-13");
var fsmall_13 = document.getElementById("fsmall-13");
fbutton_13.addEventListener("click", frameExp);
var close_13 = document.getElementById("close-13");
close_13.addEventListener("click", closeExp);

//collage
var fbutton_01c = document.getElementById("fbutton-01c");
var fexp_01c = document.getElementById("fexp-01c");
var fsmall_01c = document.getElementById("fsmall-01c");
fbutton_01c.addEventListener("click", frameExp);
var close_01c = document.getElementById("close-01c");
close_01c.addEventListener("click", closeExp);

var fbutton_02c = document.getElementById("fbutton-02c");
var fexp_02c = document.getElementById("fexp-02c");
var fsmall_02c = document.getElementById("fsmall-02c");
fbutton_02c.addEventListener("click", frameExp);
var close_02c = document.getElementById("close-02c");
close_02c.addEventListener("click", closeExp);

var fbutton_03c = document.getElementById("fbutton-03c");
var fexp_03c = document.getElementById("fexp-03c");
var fsmall_03c = document.getElementById("fsmall-03c");
fbutton_03c.addEventListener("click", frameExp);
var close_03c = document.getElementById("close-03c");
close_03c.addEventListener("click", closeExp);

var fbutton_04c = document.getElementById("fbutton-04c");
var fexp_04c = document.getElementById("fexp-04c");
var fsmall_04c = document.getElementById("fsmall-04c");
fbutton_04c.addEventListener("click", frameExp);
var close_04c = document.getElementById("close-04c");
close_04c.addEventListener("click", closeExp);

var fbutton_05c = document.getElementById("fbutton-05c");
var fexp_05c = document.getElementById("fexp-05c");
var fsmall_05c = document.getElementById("fsmall-05c");
fbutton_05c.addEventListener("click", frameExp);
var close_05c = document.getElementById("close-05c");
close_05c.addEventListener("click", closeExp);

function frameExp() {
	var allExp = [fexp_1, fexp_2, fexp_3, fexp_4, fexp_5, fexp_6, fexp_7, fexp_8, fexp_9, fexp_10, fexp_11, fexp_12, fexp_13, fexp_01c, fexp_02c, fexp_03c, fexp_04c, fexp_05c ];
	var allSmall = [fsmall_1, fsmall_2, fsmall_3, fsmall_4, fsmall_5, fsmall_6, fsmall_7, fsmall_8, fsmall_9, fsmall_10, fsmall_11, fsmall_12, fsmall_13, fsmall_01c, fsmall_02c, fsmall_03c, fsmall_04c, fsmall_05c];
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