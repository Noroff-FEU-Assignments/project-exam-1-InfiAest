const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wp/v2/posts/" + id;

const postHeaders = document.querySelector(".post-headers");
const postImage1 = document.querySelector(".post-image1");
const postImage2 = document.querySelector(".post-image2");
const postImage3 = document.querySelector(".post-image3");
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
        console.log(error);
    }

}

getPostDetails();

function createPostDetails(details) {
    
    const postDetails = details.acf;

    console.log(postDetails);

    postHeaders.innerHTML += `<h1>${postDetails.post_title}</h1>
                                    <h2>Written by: ${postDetails.author}</h2>
                                    <h3 class="version2">Date: ${details.date}</h3>`
    
    postImage1.innerHTML += `<a role="button" id="image-button"><img id="myImg" class="image-1" src="${postDetails.image1}" alt=""></a>`

    postParagraph1.innerHTML+= `<p class="p2">${postDetails.paragraph1}</p>`

    postImage2.innerHTML += `<img class="image-2" src="${postDetails.image2}" alt="">`

    postquote.innerHTML += `<h3 class="version2 latest-quote">${postDetails.quote}</h3>`

    postImage3.innerHTML += `<div class="post-image-container-1"><img class="image-3" src="${postDetails.image3}" alt=""></div>`

    postParagraph2.innerHTML += `<p class="p3">${postDetails.paragraph2}</p>`

    postParagraph3.innerHTML += `<p>${postDetails.paragraph3}</p>`
}


