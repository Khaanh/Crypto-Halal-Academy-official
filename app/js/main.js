// ----------- jQuery functions -----------
$(function () {
  $("#js-benefitSlider").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: "150px",
    arrows: true,
    dots: false,
  });

  $("#js-feedbackSlider").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          centerMode: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "60px",
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});

//----------- JavaScript functions -----------
//Common variables
const defaultOffset = 200;

// Smooth scroll to top
const btnToUp = document.querySelector("#js-btnScrollUp");
function scrollToUp() {
  btnToUp.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}
scrollToUp();

//Check window position
const header = document.querySelector("#js-header");
function checkWindowPos() {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > defaultOffset) {
      btnToUp.classList.add("is-visible");
    } else {
      btnToUp.classList.remove("is-visible");
    }
  });
}
checkWindowPos();

// UX header scroll
let scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop;
let containAnimate = () => header.classList.contains("is-animate");
let lastScroll = 0;

function headerScroll() {
  window.addEventListener("scroll", () => {
    if (
      scrollPosition() > lastScroll &&
      !containAnimate() &&
      scrollPosition() > defaultOffset
    ) {
      // scroll down
      header.classList.add("is-animate");
    } else if (scrollPosition() < lastScroll && containAnimate()) {
      header.classList.remove("is-animate");
      //scroll up
    }

    lastScroll = scrollPosition();
  });
}
headerScroll();

// Audio player visualization
let btnPlay = document.querySelectorAll(".js-btnPlay");
let audioElem = document.querySelectorAll(".js-audio");
let currentTimeElem = document.querySelectorAll(".js-currentTime");
let isPaused = false;
// let audio;

function controlAudio() {
  btnPlay.forEach((item) => {
    item.addEventListener("click", (e) => {
      console.log(e);
      let audio = e.target.parentElement.nextElementSibling;
      pauseAllAudio();

      !isPaused ? playAudio(audio) : pauseAudio(audio);

      console.log(audio.currentTime);
    });
  });
}

controlAudio();

function pauseAllAudio() {
  audioElem.forEach((audio) => {
    audio.pause();
  });
}

function playAudio(elem) {
  elem.play();
  console.log("play");
  isPaused = true;
}

function pauseAudio(elem) {
  elem.pause();
  console.log("pause");
  isPaused = false;
}

// audioElem.addEventListener("timeupdate", function (ev) {
//   console.log("Current time", this.currentTime);
// });

// currentTimeElem.addEventListener("click", function () {
//   alert("asdas");
// });

// Accordion functional
let accBtn = document.querySelectorAll(".js-accToggle");
accBtn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("is-open");
  });
});

//Mobile menu
window.addEventListener("resize", dynamicWidthCheck);
document.addEventListener("DOMContentLoaded", dynamicWidthCheck);

let btnMenu = document.querySelector("#js-burger");
let navMenu = document.querySelector("#js-nav");
let windowWidth = window.innerWidth;

// Open/close menu
btnMenu.addEventListener("click", () => {
  navMenu.classList.add("is-open");
  document.body.classList.add("js-no-scroll");
});

document.addEventListener("click", function (e) {
  if (e.target && e.target.id == "js-btnClose") {
    navMenu.classList.remove("is-open");
    document.body.classList.remove("js-no-scroll");
  }
});

let btnClose = document.createElement("button");
btnClose.classList.add("btn-close");
btnClose.setAttribute("id", "js-btnClose");

let logoMini = document.createElement("i");
logoMini.classList.add("logo-mini");

function dynamicWidthCheck() {
  if (windowWidth < 1024) {
    navMenu.appendChild(logoMini);
    navMenu.appendChild(btnClose);
  }
}
