// const hamburger = document.querySelector(".hamburger");

// const navi = document.getElementById("navi");


// hamburger.addEventListener("click", function () {
//     navi.classList.toggle("active");
// });

// navi.addEventListener("click", function () {
//     navi.classList.toggle("active");
// });
const hamburger = document.querySelector(".hamburger");
const navi = document.getElementById("navi");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");
});


navi.addEventListener("click", function (){
    navi.classList.remove("active");
});