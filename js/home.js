var myIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("hide");
    var dots = document.getElementsByClassName("selImg");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";

    }
    for (i = 0; i < dots.length; i++) {
            dots[i].style.background = "#bfae80" ;
    dots[i].style.border = "1px solid #bfae80 " 
  }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
  dots[myIndex-1].style.background = "none" ;
    
    setTimeout(carousel, 3000);
}
carousel();

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("hide");
  var dots = document.getElementsByClassName("selImg");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].style.background = "#bfae80" ;
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].style.background = "none" ;
    dots[slideIndex-1].style.border = "1px solid #bfae80 " ;
}
