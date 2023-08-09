let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

//Add class to keep navbar stuck on top after scrolling past it
window.onscroll = () => {
  (window.scrollY >= sticky) ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

//Return to the start of the page
backToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}