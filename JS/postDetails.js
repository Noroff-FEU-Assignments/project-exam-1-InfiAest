// calling the api
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wp/v2/posts/" + id;

const pageTitle = document.querySelector("title");
const postHeaders = document.querySelector(".post-headers");
const postImage1 = document.querySelector(".image-1");
const postImage2 = document.querySelector(".image-2");
const postImage3 = document.querySelector(".image-3");
const postParagraph1 = document.querySelector(".post-paragraph1");
const postquote = document.querySelector(".post-quote");
const postParagraph2 = document.querySelector(".post-paragraph2");
const postParagraph3 = document.querySelector(".post-paragraph3");


async function getPostDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        
        createPostDetails(details);
    }
    catch (error) {
      const contentContainer = document.querySelector(".page-content");

        contentContainer.innerHTML = `<div class="error-message">
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

        console.log(error);
    }

}

getPostDetails();

// loading screen

const loadingAnimation = document.querySelector(".loader-overlay");

window.onload = function() {
  window.setInterval(function(){
    loadingAnimation.style.display = "none";
  }, 1500);
}


//Adding the details to the html

function createPostDetails(details) {

    const formatedDate = new Date(details.date).toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const postViewsCount = details.content.rendered;
    const postDetails = details.acf;
    

    pageTitle.innerHTML += ` | ${postDetails.post_title}`

    postHeaders.innerHTML += `<div class="grunge-container">
                                 <h1 class="postH1 text-mask-white">${postDetails.post_title}</h1>
                              </div>
                              <div class="author-container">
                                <div class="grunge-container">
                                    <h2 class="postH2 text-mask-gold">${postDetails.author}, ${formatedDate}</h2>   
                                </div>
                                ${postViewsCount}
                              </div>`
    
    postImage1.src = `${postDetails.image1}`

    postParagraph1.innerHTML+= `<p class="post2">${postDetails.paragraph1}</p>`

    postImage2.src = `${postDetails.image2}`

    postquote.innerHTML += `<h3 class="latest-quote">${postDetails.quote}</h3>`

    postImage3.src = `${postDetails.image3}`

    postParagraph2.innerHTML += `<p class="p3">${postDetails.paragraph2}</p>`

    postParagraph3.innerHTML += `<p>${postDetails.paragraph3}</p>`
}


