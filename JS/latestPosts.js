/* Getting the latest posts --------------*/

const url = "https://charlottelucas.no/wp-json/wp/v2/posts?per_page=100";

const latestPostsContainer1 = document.querySelector(".latestPostsContainer1");
const latestPostsContainer2 = document.querySelector(".latestPostsContainer2");
const latestPostsContainer3 = document.querySelector(".latestPostsContainer3");
const latestPostsContainer4 = document.querySelector(".latestPostsContainer4");

async function getLatestPosts() {

    try {

        const response = await fetch(url);

        const result = await response.json();

        createLatestPosts(result);

    }

    catch(error) {

        const latestPosts = document.querySelector(".latestPosts");
        const mostViewed = document.querySelector(".most-viewed");

        latestPosts.innerHTML = `<div class="error-message">
                                    <div class="grunge-container">
                                        <h1 class="text-mask-white error-heading">Oops! Something is broken</h1>
                                    </div>
                                    <div class="error-img-container">
                                        <img class="error-img" src="/images/error-img.jpg" alt="tattered and broken old guitar amp">
                                    </div>
                                    <div class="grunge-container">
                                        <h2 class="text-mask-gold error-subheading">Even legends have technical difficulties!</h2>
                                    </div>
                                    <p class="error-text">"Mama, oooh,</p>
                                    <p class="error-text">Didn't mean to make you cry,</p>
                                    <p class="error-text bold">If I'm not back again this time tomorrow,</p>
                                    <p class="error-text">Carry on, carry on as if nothing really matters"</p>
                                    <br>
                                    <p class="error-link">Or you know... You could send us a message</p>
                                    <div class="button-container">
                                        <a href="contact.html" class="error-button">Send us a message</a>
                                    </div>
                                </div>`;

        mostViewed.style.display = "none";

        console.log(error);

    }


}

getLatestPosts();

// loading screen

const loadingAnimation = document.querySelector(".loader-overlay");

window.onload = function() {
  window.setInterval(function(){
    loadingAnimation.style.display = "none";
  }, 1500);
}


function createLatestPosts(result) {

    for(let i = 0; i < result.length; i++) {

        if (i == 4) {
            break;
        }

    }  
    latestPostsContainer1.innerHTML += `<a href="post.html?id=${result[0].id}" alt="Link to ${result[0].acf.post_title} post" class="post-link">
                                            <div class="post-image-container" style="background-image: url(${result[0].acf.image1})">
                                                <div class="title-container">
                                                    <h3>${result[0].acf.post_title}</h3>
                                                    <p class="latest-quote">${result[0].acf.quote}</p>
                                                </div>
                                            </div>
                                        </a>`

    latestPostsContainer2.innerHTML += `<a href="post.html?id=${result[1].id}" alt="Link to ${result[1].acf.post_title} post" class="post-link">
                                            <div class="post-image-container" style="background-image: url(${result[1].acf.image1})">
                                                <div class="title-container">
                                                    <h3>${result[1].acf.post_title}</h3>
                                                    <p class="latest-quote">${result[1].acf.quote}</p>
                                                </div>
                                            </div>
                                        </a>`

    latestPostsContainer3.innerHTML += `<a href="post.html?id=${result[2].id}" alt="Link to ${result[2].acf.post_title} post" class="post-link">
                                            <div class="post-image-container" style="background-image: url(${result[2].acf.image1})">
                                                <div class="title-container">
                                                    <h3>${result[2].acf.post_title}</h3>
                                                    <p class="latest-quote">${result[2].acf.quote}</p>
                                                </div>
                                            </div>
                                        </a>`

    latestPostsContainer4.innerHTML += `<a href="post.html?id=${result[3].id}" alt="Link to ${result[3].acf.post_title} post" class="post-link">
                                            <div class="post-image-container" style="background-image: url(${result[3].acf.image1})">
                                                <div class="title-container">
                                                    <h3>${result[3].acf.post_title}</h3>
                                                    <p class="latest-quote">${result[3].acf.quote}</p>
                                                </div>
                                            </div>
                                        </a>`

}



/* Slideshow function for latest posts --------------*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(x) {
  showSlides(slideIndex += x);
}

function currentSlide(x) {
  showSlides(slideIndex = x);
}

function showSlides(x) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dot");

  if (x > slides.length) {
      slideIndex = 1
    };

  if (x < 1) {
      slideIndex = slides.length;
    };

  for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  };

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  };
  
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
