// const nextPosts = document.querySelector(".nextPosts");

// function loadNextPosts() {
//     for(let i = 10; i < result.length; i++) {

//         if(i > 19) {
//             continue;
//         }

//         console.log(result);

//     }
// }

const www = "https://charlottelucas.no/wp-json/acf/v3/posts?per_page=20";
const nextPosts = document.querySelector(".nextPosts");

async function getPosts() {

    try {

        const response = await fetch(www);

        const result = await response.json();

        loadNextPosts(result);

    }

    catch(error) {

        console.log(error);

    }
}

getPosts();

function loadNextPosts(result) {
    for(let i = 10; i < result.length; i++) {

                if(i > 19) {
                    continue;
                }
        
                console.log(result);
        
            }
}