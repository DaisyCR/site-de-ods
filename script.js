window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-bar");
var sticky = navbar.offsetTop+770;

function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
}