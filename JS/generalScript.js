// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.querySelector("#wrapper");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// Search bar
const searchIcon = document.querySelector(".fa-search");
const searchLabel = document.querySelector(".search-label");
const searchBar = document.querySelector("input[type='text']");


searchIcon.onclick = function(){
  searchLabel.classList.toggle("visible");
  searchBar.classList.toggle("visible");
}
