function openNav() {
  document.getElementById("Therightnav").style.width = "300px";
  document.getElementById("footer_container").style.marginRight = "300px";
  var x = document.getElementsByClassName("slideshow-container");
  x[0].style.marginRight = "300px";
}

function closeNav() {
  document.getElementById("Therightnav").style.width = "0";
  document.getElementById("footer_container").style.marginRight = "50px";
var x =   document.getElementsByClassName("slideshow-container");
  x[0].style.marginRight = "50px";
}