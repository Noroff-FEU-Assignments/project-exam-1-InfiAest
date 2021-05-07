const listButton = document.querySelector(".listButton");
const gridButton = document.querySelector(".gridButton");
const listPosts = document.querySelector(".listPosts");
const gridPosts = document.querySelector(".gridPosts");

function gridView() {
    gridPosts.style.display = "grid";
    listPosts.style.display = "none";
    gridButton.classList.add("active");
    listButton.classList.remove("active");
}

function listView() {
    listPosts.style.display = "block";
    gridPosts.style.display = "none";
    listButton.classList.add("active");
    gridButton.classList.remove("active");
}