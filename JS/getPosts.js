const url = "https://charlottelucas.no/wp-json/acf/v3/posts";

const topPostsContainer = document.querySelector(".topPosts");

async function getPosts() {

    try {

        const response = await fetch(url);

        const result = await response.json();

        createHTML(result);

    }

    catch(error) {

        console.log(error);

    }
}

getPosts();

function createHTML(result) {

    for(let i = 0; i < result.length; i++) {

        const posts = result[i].acf;

        console.log(posts);

        topPostsContainer.innerHTML += `<div class="post-container">
                                            <a href="post.html" alt="Link to ${posts.post_title} post" class="post-link">
                                                <div class="post-image-container" style="background-image: url(${posts.image1})">
                                                    <div class="image-overlay"></div>
                                                </div>
                                                <div class="title-container">
                                                        <h3>${posts.post_title}</h3>
                                                </div>
                                                <div class="excerpt-container">
                                                    <p>${posts.excerpt}</p>
                                                </div>
                                            </a>
                                        </div>`

    }

}
