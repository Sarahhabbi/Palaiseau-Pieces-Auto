// ANIMATION NAV BAR
window.addEventListener("scroll", ()=>{
    if(window.scrollY>0){
        document.querySelector("header").classList.add("nav-scrolled",window.scrollY>0);
    }
    else{
        document.querySelector("header").classList.remove("nav-scrolled",window.scrollY>0);
    }
})

// display hamburger menu

const nav = document.querySelector("nav");
const hamburger = document.querySelector(".bi-list");
const logo = document.querySelector(".logo");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("bi-x-lg");
    nav.classList.toggle("open");
    logo.classList.toggle("logo-hidden");
})


// google reviews
jQuery(document).ready(function($) {
    $("#google-reviews").googlePlaces({
         placeId: 'ChIJww7iohR55kcRC1g-TFrZcPw'
       , render: ['reviews']
       , min_rating: 4
       , max_rows:4
    });
 });


