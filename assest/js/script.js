const slider = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const dark = document.querySelector(".dark");
const topBtn = document.querySelector(".top");
const icon = dark.querySelector("i");
const element = document.body;
let slideIndex = 1;

function showSlider(n) {
    if (n > slider.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slider.length;
    }
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = "dot";
    }
    slider[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
showSlider(slideIndex);

function sliders(n) {
    showSlider(slideIndex = slideIndex + n)
}

function nextDots(n) {
    showSlider(slideIndex = n);
}

dark.addEventListener("click", darkMood);

function darkMood() {
    if (icon.classList == "fa fa-moon-o moon") {
        icon.classList = "fa fa-sun-o sun";
        element.style.color = "white";
        element.style.background = "#333";
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.color = "white";
        }
    } else {
        icon.classList = "fa fa-moon-o moon";
        element.style.color = "black";
        element.style.background = "#ddd";
        for (let i = 0; i < dots.length; i++) {
            dots[i].style.color = "#333";
        }
    }
}

window.onscroll = function() {
    scrollWindow();
}

function scrollWindow() {
    if (element.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none"
    }
}
topBtn.addEventListener("click", goTop);

function goTop() {
    element.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}