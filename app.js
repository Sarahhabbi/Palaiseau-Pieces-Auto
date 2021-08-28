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



jQuery(document).ready(function( $ ) {
    $("#google-reviews").googlePlaces({
         placeId: 'ChIJww7iohR55kcRC1g-TFrZcPw'
       , render: ['reviews']
       , min_rating: 4
       , max_rows:4
    });
 });

// SLICK SLIDER
$(document).ready(function(){
    $('.google-reviews').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    });
});


// // GOOGLE MAPS contact.html
// function initMap(){
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 48.71555563867689, lng: 2.248638069317734},
//         zoom: 15,
//         mapId: '56f4ea2ad69f76e'
//       });

//     const marker = new google.maps.Marker({
//         position: {lat: 48.71555563867689, lng: 2.248638069317734},
//         map: map,
//       });
      
//     const infowindow = new google.maps.InfoWindow({
//         content: "PALAISEAU PIECES AUTO",
//     });
    
//     marker.addListener("mouseover", () => {
//         infowindow.open(map,marker);
//     });
    
// }