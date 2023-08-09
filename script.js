const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const hiddenElements = document.querySelectorAll(".hidden");

//Add class to keep navbar stuck on top after scrolling past it
window.onscroll = () => {
  window.scrollY >= sticky
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

//Return to the start of the page
const backToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add("show")
      : entry.target.classList.remove("show");
  });
});
hiddenElements.forEach((e) => observer.observe(e));
