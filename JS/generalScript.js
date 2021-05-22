// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};

// Get the navbar
const navbar = document.querySelector("#navcontainer");
// get the nav logo
const navLogo = document.querySelector(".nav-logo");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navLogo.style.display = "block";
  } else {
    navbar.classList.remove("sticky");
    navLogo.style.display = "none";
  }
}


// Search bar display
const searchIcon = document.querySelector(".fa-search");
const searchLabel = document.querySelector(".search-label");
const searchBar = document.querySelector("input[type='text']");
const searchButton = document.querySelector(".search-button");

searchIcon.onclick = function(){
  searchLabel.classList.toggle("visible");
  searchBar.classList.toggle("visible");
  searchButton.classList.toggle("visible");
};



// Search function
const searchInput = document.querySelector(".search-input");
const pageContentContainer = document.querySelector(".page-content");
const searchResultContainer = document.querySelector(".search-results");
const searchform = document.querySelector(".search-form");
const loadingSearchResults = document.querySelector(".loader-overlay");


const searchURL = "https://charlottelucas.no/wp-json/wp/v2/posts?per_page=100";

searchButton.onclick = async function getSearchResults() {

  try {

      const response = await fetch(searchURL);

      const searchResults = await response.json();

      const searchWord = searchInput.value.toLowerCase();

      // console.log(searchResults);
      // console.log(searchWord);
      if (searchWord === "astrid" || searchWord === "matt") {
        searchResultContainer.innerHTML = `<div class="grunge-container searchResultHeadingContainer">
                                              <h1 class="text-mask-white searchResultHeading">Posts written by "${searchWord}":</h1>
                                          </div>`
      } else {
        searchResultContainer.innerHTML = `<div class="grunge-container searchResultHeadingContainer">
                                              <h1 class="text-mask-white searchResultHeading">Posts containing the word "${searchWord}":</h1>
                                          </div>`
      };
      

      for (let i = 0; i < searchResults.length; i++) {

        if (searchWord === "" || searchWord === null) {
          // alert("You forgot to tell us what you want to search for!");
          searchResultContainer.innerHTML = "";
          break;
        }

        else if (searchResults[i].acf.author.toLowerCase().includes(searchWord) ||
        searchResults[i].acf.excerpt.toLowerCase().includes(searchWord)||
        searchResults[i].acf.paragraph1.toLowerCase().includes(searchWord)||
        searchResults[i].acf.paragraph2.toLowerCase().includes(searchWord)||
        searchResults[i].acf.paragraph3.toLowerCase().includes(searchWord)||
        searchResults[i].acf.post_title.toLowerCase().includes(searchWord)||
        searchResults[i].acf.quote.toLowerCase().includes(searchWord)){

          pageContentContainer.style.display = "none";
          searchResultContainer.style.display = "grid";
          searchLabel.classList.remove("visible");
          searchBar.classList.remove("visible");
          searchButton.classList.remove("visible");
          // console.log(searchResults[i]);
          searchResultContainer.innerHTML +=  `<div class="search-post-container">
                                                  <a href="post.html?id=${searchResults[i].id}" alt="Link to ${searchResults[i].acf.post_title} post" class="search-result-link">
                                                      <div class="search-result-image-container" style="background-image: url(${searchResults[i].acf.image1})">
                                                          <div class="search-result-title-container">
                                                              <h3 class="post-title">${searchResults[i].acf.post_title}</h3>
                                                          </div>
                                                      </div>
                                                      <div class="most-viewed-excerpt-container">
                                                          <p class="p2">${searchResults[i].acf.excerpt}</p>
                                                      </div>
                                                  </a>
                                              </div>`
        }

      }

  }

  catch(error) {

      console.log(error);

  }


}

//search on click and enter
searchform.addEventListener("submit", (event) => {
  event.preventDefault();
  searchButton.click();
  hideNav();
});

//close the nav when you search if the hamburger menu is checked
function hideNav(){
  let navOpen = document.querySelector("#hamburger-menu").checked;

  if(navOpen = true){
    document.querySelector("#hamburger-menu").checked = false;
  }
}
