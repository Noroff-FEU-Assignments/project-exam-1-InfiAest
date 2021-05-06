/* Image Modal ---------- */
const imgModal = document.querySelector("#image-modal");

/*Images---------*/
const image1 = document.querySelector("#img1");
const image2 = document.querySelector("#img2");
const image3 = document.querySelector("#img3");
const imageContainer = document.querySelector(".modal-image");
var span = document.getElementsByClassName("close")[0];

image1.onclick = function() {
    imgModal.style.display = "block";
    imageContainer.src = this.src;
}
image2.onclick = function() {
    imgModal.style.display = "block";
    imageContainer.src = this.src;
}
image3.onclick = function() {
    imgModal.style.display = "block";
    imageContainer.src = this.src;
}

/* Close button --------*/
span.onclick = function() { 
  imgModal.style.display = "none";
}

/* Click window (outside modal)------------*/
window.onclick = function(event) {
    if (event.target === imgModal) {
        imgModal.style.display = "none";
    }
}