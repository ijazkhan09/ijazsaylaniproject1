let menu  = document.querySelector(".menu-bar i");
let navbar = document.querySelector(".navbar");
let close = document.querySelector(".close i");

menu.addEventListener("click", function(){
    navbar.classList.add("show");
})
close.addEventListener("click", function(){
    navbar.classList.remove("show");
})