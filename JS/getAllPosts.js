const url = "https://charlottelucas.no/wp-json/acf/v3/posts";
count = 1;
totalPages = 1;

const allPostsContainer = document.querySelector(".allPosts");

async function getPosts() {

    try {

        if(count == 1) {
            const response = await fetch(url + "?page=" + count);

            for (let [key, value] of response.headers) {
                console.log(key + value);
              }

            // console.log(response.headers.get('Content-Type'));

            // for (var pair of response.headers.entries()) { // accessing the entries
            //     if (pair[0] === 'X-WP-TotalPages') { // key I'm looking for in this instance
            //       totalPages = pair[1];
            //     }
            //     console.log(pair[0]);
            //     console.log(pair[1]);
            // }
        }

        const response = await fetch(url + "?page=" + count);

        console.log(totalPages);

        const result = await response.json();

        createHTML(result);

        count++;

    }

    catch(error) {

        console.log(error);

    }
}

getPosts();

function createHTML(result) {

    for(let i = 0; i < result.length; i++) {

        const posts = result[i].acf;

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
