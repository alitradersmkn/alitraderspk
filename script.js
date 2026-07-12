// Ali Traders Website

document.addEventListener("DOMContentLoaded", function () {
    console.log("Ali Traders Website Loaded Successfully!");
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Footer year
const footer = document.querySelector("footer p");
if (footer) {
    footer.innerHTML = "&copy; " + new Date().getFullYear() + " Ali Traders & Commission Shop. All Rights Reserved.";
}
const images=[
"images/shop.jpg",
"images/shop2.jpg",
"images/shop3.jpg"
];

let i=0;

setInterval(function(){

i++;

if(i>=images.length){

i=0;

}

document.getElementById("slide").src=images[i];

},3000);
