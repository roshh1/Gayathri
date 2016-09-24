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
        

        var matFil = ["white", "cream", "Blue", "Green"];
        for (var i = 0; i < matFil.length; i++) {  
        var removerFilter = imgCol.className.indexOf(matFil[i]);
        var editFilter = imgCol.className;
        if ( removerFilter !== -1 ) {
          padFil = " img-pad " + matFil[i];
        newFil = editFilter.replace(padFil , "");
          document.getElementById("change-img").className = newFil;
          }
        }

        var matColor = this.className;
            imgCol.className += " img-pad " + matColor ;
        }

function imgFilter() {
        var img = document.getElementById("change-img");
        
        //removing existing filter
        var imgFil = ["grayscale", "saturate", "sepia", "brightness", "contrast", "huerotate", "opacity", "blur", "invert"];
        for (var i = 0; i < imgFil.length; i++) {  
        var removerFilter = img.className.indexOf(imgFil[i]);
        var editFilter = img.className;
        if ( removerFilter !== -1 ) {
        newFil = editFilter.replace(imgFil[i] , "");
          document.getElementById("change-img").className = newFil;
          }
        }
        // adding new filter
        var filterName = this.className; 
            img.className += ' ' + filterName ;	}

function previewFile(){
       var preview = document.getElementById('change-img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
           preview.src = reader.result;
       }

       if (file) {
           reader.readAsDataURL(file); //reads the data as a URL
       } else {
           preview.src = "img/nature-bg.jpg";
       }
       
  }
   previewFile();  //calls the function named previewFile()
