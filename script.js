
let valueDisplays = document.querySelectorAll(".num")
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    });
});


window.addEventListener("scroll", function(){
    var navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})



let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");



scrollContainer.addEventListener("wheel", (evt)=> {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});


nextBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});
backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});



$(document).ready(function(){
  $("#product-slider").owlCarousel({
    items: 6,
    itemsDestop: [1199,2],
    itemsDestopSmall: [980,2],
    itemsMoile: [700,1],
    pagination: false,
    navigation: true,
    navigationText: ["",""],
    autoPlay: true
  });
});




// const productContainers = [...document.querySelectorAll(".product-container")];
// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];


// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect()
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener('click', () =>{
//     item.scrollLeft += containerWidth;
//   })
//   preBtn[i].addEventListener('click', () =>{
//     item.scrollLeft -= containerWidth;
//   })
// })