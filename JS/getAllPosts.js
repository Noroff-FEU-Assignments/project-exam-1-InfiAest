//calling the api

const url = "https://charlottelucas.no/wp-json/wp/v2/posts";
count = 1;
totalPages = 0;

const listPostsContainer = document.querySelector(".listPosts");
const gridPostsContainer = document.querySelector(".gridPosts");
const button = document.querySelector(".cta-button");


async function getPosts() {

    try {
        const response = await fetch(url).then(function(response)
        { 
        if (!response.ok) 
        { 
            throw new Error("HTTP error! status: ${response.status}"); 
        }

        return response;
        });

        totalPages = response.headers.get('X-WP-TotalPages');


        if (totalPages >= count) {
            const response = await fetch(url + "?page=" + count);

            const result = await response.json();
    
            createHTML(result);
    
            count++;
        } else {
            button.style.backgroundColor = "#303336";
            button.style.transform = "none";
            button.innerHTML = "No more posts to show";
            button.style.cursor = "default";
        }

    }

    catch(error) {

        const blogPostsContainer = document.querySelector(".blog-posts");

        blogPostsContainer.innerHTML = `<div class="error-page">
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

getPosts();


// loading screen

const loadingAnimation = document.querySelector(".loader-overlay");

window.onload = function() {
  window.setInterval(function(){
    loadingAnimation.style.display = "none";
  }, 1500);
}

//loading in the posts

function createHTML(result) {

    for(let i = 0; i < result.length; i++) {

        const posts = result[i].acf;

        // console.log(result[i]);

        listPostsContainer.innerHTML += `<div class="list-post-container">
                                            <a href="post.html?id=${result[i].id}" alt="Link to ${posts.post_title} post" class="post-link">
                                                <div class="flex-container">
                                                    <div class="list-image-container" style="background-image: url(${posts.image1})"></div>
                                                    <div class="info-container">
                                                        <h3 class="list-title">${posts.post_title}</h3>
                                                        <p class="p2 list-excerpt">${posts.excerpt}</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>`

        gridPostsContainer.innerHTML += `<div class="grid-post-container">
                                            <a href="post.html?id=${result[i].id}" alt="Link to ${posts.post_title} post" class="post-link">
                                                <div class="grid-image-container" style="background-image: url(${posts.image1})">
                                                    <div class="grid-title-container">
                                                        <h3 class="grid-title">${posts.post_title}</h3>
                                                    </div>
                                                </div>
                                                <div class="most-viewed-excerpt-container">
                                                    <p class="p2">${posts.excerpt}</p>
                                                </div>
                                            </a>
                                        </div>`

    }   
}
