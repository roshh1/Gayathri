var myIndex = 0;

function carousel() {
    var x = document.getElementsByClassName("hide");
    for (var i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }

    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 5000); // Change image every 2 seconds
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
  var x = document.getElementsByClassName("hide");
  var dots = document.getElementsByClassName("change-no");

  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for ( var i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" Green", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " Green";
}


