const url = "https://charlottelucas.no/wp-json/acf/v3/posts?per_page=100";

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

        const posts = result[i].acf;

        if (i == 4) {
            break;
        }

        console.log(posts);

    }  
    latestPostsContainer1.innerHTML += `<div class="post-image-container" style="background-image: url(${result[0].acf.image1})">
                                            <div class="title-container">
                                                <h3>${result[0].acf.post_title}</h3>
                                                <p class="latest-quote">${result[0].acf.quote}</p>
                                            </div>
                                        </div>`

    latestPostsContainer2.innerHTML += `<div class="post-image-container" style="background-image: url(${result[1].acf.image1})">
                                            <div class="title-container">
                                                <h3>${result[1].acf.post_title}</h3>
                                                <p class="latest-quote">${result[1].acf.quote}</p>
                                            </div>
                                        </div>`

    latestPostsContainer3.innerHTML += `<div class="post-image-container" style="background-image: url(${result[2].acf.image1})">
                                            <div class="title-container">
                                                <h3>${result[2].acf.post_title}</h3>
                                                <p class="latest-quote">${result[2].acf.quote}</p>
                                            </div>
                                        </div>`

    latestPostsContainer4.innerHTML += `<div class="post-image-container" style="background-image: url(${result[3].acf.image1})">
                                            <div class="title-container">
                                                <h3>${result[3].acf.post_title}</h3>
                                                <p class="latest-quote">${result[3].acf.quote}</p>
                                            </div>
                                        </div>`

}



/* slideshow function for top posts --------------*/

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