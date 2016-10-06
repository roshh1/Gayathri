var img_normal = document.getElementById("img-normal");
var img_grayscale = document.getElementById("img-grayscale");
var img_saturate = document.getElementById("img-saturate");
var img_sepia = document.getElementById("img-sepia");
var img_brightness = document.getElementById("img-brightness");
var img_contrast = document.getElementById("img-contrast");
var img_huerotate = document.getElementById("img-huerotate");
var img_opacity = document.getElementById("img-opacity");
var img_blur = document.getElementById("img-blur");
var img_invert = document.getElementById("img-invert");

img_normal.addEventListener("click", imgFilter);
img_grayscale.addEventListener("click", imgFilter);
img_saturate.addEventListener("click", imgFilter);
img_sepia.addEventListener("click", imgFilter);
img_brightness.addEventListener("click", imgFilter);
img_contrast.addEventListener("click", imgFilter);
img_huerotate.addEventListener("click", imgFilter);
img_opacity.addEventListener("click", imgFilter);
img_blur.addEventListener("click", imgFilter);
img_invert.addEventListener("click", imgFilter);

var img_white = document.getElementById("img-white");
var img_cream = document.getElementById("img-cream");
var img_Blue = document.getElementById("img-Blue");
var img_Green = document.getElementById("img-Green");

img_white.addEventListener("click", imgMat);
img_cream.addEventListener("click", imgMat);
img_Blue.addEventListener("click", imgMat);
img_Green.addEventListener("click", imgMat);

function imgMat() {
        var imgCol = document.getElementById("change-img");
        var f = getComputedStyle(imgCol, null);
           var fStyle = f.padding;
           var framePad = parseInt(fStyle.replace("px" , ""));

        var matFil = ["white", "cream", "Blue", "Green"];
        for (var i = 0; i < matFil.length; i++) {  
          var removerFilter = imgCol.className.indexOf(matFil[i]);
          var editFilter = imgCol.className;
             if ( removerFilter !== -1 ) {
              var padFil = matFil[i];
              var newFil = editFilter.replace(padFil , "");
              document.getElementById("change-img").className = newFil;
              
              var removePad = (50 - framePad) ;
              imgCol.style.padding = removePad + "px";
            }
        }

        var matColor = this.className;
            imgCol.className += " " + matColor ;
             var addPad = (50 + framePad) ;
           imgCol.style.padding = addPad + "px";
        
        }

function imgFilter() {
        var img = document.getElementById("change-img");
                
        //removing existing filter
        var imgFil = ["grayscale", "saturate", "sepia", "brightness", "contrast", "huerotate", "opacity", "blur", "invert"];
        for (var i = 0; i < imgFil.length; i++) {  
        var removerFilter = img.className.indexOf(imgFil[i]);
        var editFilter = img.className;
        if ( removerFilter !== -1 ) {
        var newFil = editFilter.replace(imgFil[i] , "");
          document.getElementById("change-img").className = newFil;
          
          }
        }
        // adding new filter
        var filterName = this.className; 
        img.className += ' ' + filterName ;
           
            	
          }

function previewFile(){
       var preview = document.getElementById('change-img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
           preview.src = reader.result;


           var imgHeight = preview.height;
           var imgWidth = preview.width;
           var changeFrame = document.getElementById("change-frame");
           var f = getComputedStyle(document.getElementById("change-img"), null);
           var fStyle = f.padding;
           var framePad = parseInt(fStyle.replace("px" , ""));
           if (imgWidth > imgHeight)
           {
            changeFrame.className = "fimg-position frame-rotate";
            changeFrame.width = imgHeight + framePad + framePad;
            changeFrame.height =  imgWidth + framePad + framePad;
           }else{
            changeFrame.className = "fimg-position";
            changeFrame.width = imgWidth + framePad + framePad;
            changeFrame.height = imgHeight + framePad + framePad;
           }
       }

       if (file) {
           reader.readAsDataURL(file);
           
       } else {
           preview.src = "img/nature-bg.jpg";
           var changeFrame = document.getElementById("change-frame");
           var f = getComputedStyle(document.getElementById("change-img"), null);
           var fStyle = f.padding;
           var framePad = parseInt(fStyle.replace("px" , ""));

           changeFrame.className = "fimg-position frame-rotate";
            changeFrame.height = preview.width + framePad + framePad;
            changeFrame.width = preview.height + framePad + framePad;
       }
  }
   previewFile();  //calls the function named previewFile()


// frames
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("frame-set");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  
  x[slideIndex-1].style.display = "block";
}

var custom_01 = document.getElementById("custom-01");
var custom_02 = document.getElementById("custom-02");
var custom_03 = document.getElementById("custom-03");
var custom_04 = document.getElementById("custom-04");
var custom_05 = document.getElementById("custom-05");
var custom_06 = document.getElementById("custom-06");
var custom_07 = document.getElementById("custom-07");
var custom_08 = document.getElementById("custom-08");
var custom_09 = document.getElementById("custom-09");
var custom_10 = document.getElementById("custom-10");
var custom_11 = document.getElementById("custom-11");
var custom_12 = document.getElementById("custom-12");

custom_01.addEventListener("click", frameChange);
custom_02.addEventListener("click", frameChange);
custom_03.addEventListener("click", frameChange);
custom_04.addEventListener("click", frameChange);
custom_05.addEventListener("click", frameChange);
custom_06.addEventListener("click", frameChange);
custom_07.addEventListener("click", frameChange);
custom_08.addEventListener("click", frameChange);
custom_09.addEventListener("click", frameChange);
custom_10.addEventListener("click", frameChange);
custom_11.addEventListener("click", frameChange);
custom_12.addEventListener("click", frameChange);

  function reDo(pad){
    var frame = document.getElementById("change-frame");
    var image = document.getElementById('change-img');
    var imageHeight = image.height;
    var imageWidth = image.width;
     if (imageWidth > imageHeight)
           {
            frame.className = "fimg-position frame-rotate" ;
            frame.width = imageHeight + pad;
            frame.height =  imageWidth + pad;
     }else{
            frame.className = "fimg-position";
            frame.width = imageWidth + pad;
            frame.height = imageHeight + pad;}
    }

function frameChange() 
{
  var frame = document.getElementById("change-frame");
  var image = document.getElementById('change-img');
  
  if (this.className == "size-01") {
    image.style.padding = "20px";
    reDo(40);
  } else if (this.className == "size-02"){
    image.style.padding = "30px";
    reDo(60);
  }else if (this.className == "size-03"){
    image.style.padding = "50px";
    reDo(100);
  }else if (this.className == "size-04"){
    image.style.padding = "60px";
    reDo(120);
  }else if (this.className == "size-05"){
    image.style.padding = "70px";
    reDo(140);
  }else{
    image.style.padding = "80px";
    reDo(160);
  }

  var frameSrc = this.src ; 
      frame.src = frameSrc;
}