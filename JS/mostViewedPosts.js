const posts = "https://charlottelucas.no/wp-json/wp/v2/posts?per_page=100";

async function getMostViewedPosts() {

    try {

        const response = await fetch(posts);

        const result = await response.json();

        var topViewedPosts = createTopViewedPosts(result);
        getMostViewedPostDetails(topViewedPosts);


    }

    catch(error) {

        console.log(error);

    }

}


getMostViewedPosts();


function createTopViewedPosts(result) {

//Declaring arrays
    var a = [];
    var keys = [];

//Iterating through posts from API call
    for (var i = 0; i < result.length; i++) {
        
//creating a new element in the DOM and parsing result from API call as HTML
        var el = document.createElement( 'html' );
        el.innerHTML = result[i].content.rendered;

//Selecting all the spans with that class name from the HTML we just parsed
        var spans = el.querySelectorAll('.post-views-count');

//Iterating through each of the spans           
        for (j = 0; j < spans.length; j++) {

//Grabbing innerText of the span and parsing it as an int            
            var postViews = parseInt(spans[j].innerText);

//Creating a key value pair inside of the a array
            a.push({postViews:postViews, postId:result[i].id});

//sorting the a array by the value of postViews
            var sorted = a.slice(0).sort(function(a, b) {
                return a.postViews - b.postViews;
            });

//Adding the postIds to a new array in order to return them to the other function             
                for (var k = 0, len = sorted.length; k < len; ++k) {
                    keys[k] = sorted[k].postId;
                    
                }
        }
    }
//returning the last four in the sorted array of postIds; if there are less than four, return all  
        if (keys.length > 4) {
            return(keys.slice(Math.max(keys.length - 4, 1)));
        } else {
            return(keys.slice(Math.max(keys.length, 1)));
        }
        
}

async function getMostViewedPostDetails(postIds) {

    const html = document.querySelector(".mostViewedPosts");
    
    const url = "https://charlottelucas.no/wp-json/wp/v2/posts/";

    for (var i = 0; i < postIds.length; i++) {

        try {

            const response = await fetch(url + postIds[i]);
    
            const result = await response.json();

            // console.log(result);

            html.innerHTML += `<div class="post-container">
                                            <a href="post.html?id=${result.id}" alt="Link to ${result.acf.post_title} post" class="post-link">
                                                <div class="most-viewed-post-image-container" style="background-image: url(${result.acf.image1})">
                                                    <div class="most-viewed-title-container">
                                                        <h3>${result.acf.post_title}</h3>
                                                    </div>
                                                </div>
                                                <div class="most-viewed-excerpt-container">
                                                    <p class="p2">${result.acf.excerpt}</p>
                                                </div>
                                            </a>
                                        </div>`
    
        }
    
        catch(error) {
    
            console.log(error);
    
        }

    }

}

