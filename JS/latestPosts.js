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

        console.log(error);

    }


}

getLatestPosts();


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

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
