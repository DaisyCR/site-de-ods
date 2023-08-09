window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop;
let mybutton = document.getElementById("back-to-top-btn");

function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}