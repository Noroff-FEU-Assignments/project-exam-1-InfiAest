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
        console.log(error);
    }

}

getPostDetails();



function createPostDetails(details) {

    const formatedDate = new Date(details.date).toLocaleString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
    });
    const postViewsCount = details.content.rendered;
    const postDetails = details.acf;
    

    pageTitle.innerHTML += ` | ${postDetails.post_title}`

    postHeaders.innerHTML += `<h1>${postDetails.post_title}</h1>
                              <div class="author-container">
                                <h2 class="version2">${postDetails.author}, ${formatedDate}</h2>
                                ${postViewsCount}
                              </div>`
    
    postImage1.src = `${postDetails.image1}`

    postParagraph1.innerHTML+= `<p class="p2">${postDetails.paragraph1}</p>`

    postImage2.src = `${postDetails.image2}`

    postquote.innerHTML += `<h3 class="version2 latest-quote">${postDetails.quote}</h3>`

    postImage3.src = `${postDetails.image3}`

    postParagraph2.innerHTML += `<p class="p3">${postDetails.paragraph2}</p>`

    postParagraph3.innerHTML += `<p>${postDetails.paragraph3}</p>`
}


