const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wp/v2/posts/" + id;

const detailsContainer = document.querySelector(".post-details");

async function getPostDetails() {

    try {
        const response = await fetch(url);
        const details = await response.json();
        
        createPostDetails(details);
    }
    catch (error) {
        console.log(error);
    }

}

getPostDetails();

function createPostDetails(details) {
    
    const postDetails = details.acf;

    console.log(details);

    detailsContainer.innerHTML += `<h1>${postDetails.post_title}</h1>
                                    <h2>Author: ${postDetails.author}</h2>
                                    <h4>Date: ${details.date}</h4>
                                    <div class="post-image-container-1" style="background-image: url(${postDetails.image1})"></div>
                                    <p class="p2">${postDetails.paragraph1}</p>
                                    <div class="post-image-container-2" style="background-image: url(${postDetails.image2})"></div>
                                    <h4 class="latest-quote">${postDetails.quote}</h4>
                                    <div class="dark-grey-div-postpage"></div>
                                    <div class="post-image-container-1" style="background-image: url(${postDetails.image3})"></div>
                                    <p>${postDetails.paragraph2}</p>
                                    <p>${postDetails.paragraph3}</p>`

}