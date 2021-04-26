const postContainer = document.querySelector(".post");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://charlottelucas.no/wp-json/wp/v2/posts?consumer_key=ck_3ec56e0df1d84b1124aae1a0a1410ca10118e47c&consumer_secret=cs_aecf0438accdd0f441fdb569b49c89666b4806c3" + id;

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

            const list = result[i];

        console.log(list._links[7]);

        // console.log(list.attributes[0].options[0]);
        postContainer.innerHTML += `<h1>${list.title.rendered}</h1>
                                    
                                    <div>${list._links[7]}</div>`
        
    }
}