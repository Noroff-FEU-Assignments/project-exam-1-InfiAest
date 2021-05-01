const url = "https://charlottelucas.no/wp-json/wp/v2/posts";
count = 1;
totalPages = 0;

const allPostsContainer = document.querySelector(".allPosts");
const button = document.querySelector(".cta-button");

async function getPosts() {

    try {
        const response = await fetch(url);

        totalPages = response.headers.get('X-WP-TotalPages');


        if (totalPages >= count) {
            const response = await fetch(url + "?page=" + count);

            const result = await response.json();
    
            createHTML(result);
    
            count++;
        } else {
            button.style.backgroundColor = "#303336";
            button.innerHTML = "No more posts to show";
        }

    }

    catch(error) {

        console.log(error);

    }
}

getPosts();

function createHTML(result) {

    for(let i = 0; i < result.length; i++) {

        const posts = result[i].acf;

        console.log(result[i]);

        allPostsContainer.innerHTML += `<div class="post-container">
                                            <a href="post.html" alt="Link to ${posts.post_title} post" class="post-link">
                                                <div class="post-image-container" style="background-image: url(${posts.image1})">
                                                    <div class="title-container">
                                                        <h3>${posts.post_title}</h3>
                                                    </div>
                                                </div>
                                                <div class="excerpt-container">
                                                    <p class="p2">${posts.excerpt}</p>
                                                </div>
                                            </a>
                                        </div>`

    }   
}
