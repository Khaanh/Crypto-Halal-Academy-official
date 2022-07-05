// ----------- jQuery functions -----------
$(function () {
  $("#js-benefitSlider").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "150px",
    arrows: true,
    dots: false,

    responsive: [
      {
        breakpoint: 1536,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "70px",
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "70px",
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "70px",
          arrows: true,
          dots: false,
        },
      },
    ],
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
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
          infinite: true,
          dots: true,
        },
      },
    ],
  });

  // Animation while scrolling
  let doAnimation = function doAnimation() {
    let scrollTop = $(document).scrollTop();

    $(".anim-block").each(function (key, item) {
      let windowScroll = $(window).height() + scrollTop,
        elementOffset = $(item).offset().top + 140;

      if (windowScroll >= elementOffset && elementOffset !== undefined) {
        $(item).addClass("js-animation");
      }
    });
  };

  $(document).on("scroll", function () {
    doAnimation();
  });

  // Following Scroll
  $(".nav > ul > li > a").on("click", function () {
    let link = $(this);
    let dest = link.attr("href");
    let body = document.querySelector("body");
    let navi = document.querySelector("#js-nav");

    if (dest !== undefined && dest !== "") {
      $("html").animate(
        {
          scrollTop: $(dest).offset().top,
        },
        100
      );
    }

    if (
      dest !== undefined &&
      dest !== "" &&
      body.classList.contains("js-no-scroll") &&
      navi.classList.contains("is-open")
    ) {
      body.classList.remove("js-no-scroll");
      navi.classList.remove("is-open");

      $("html").animate(
        {
          scrollTop: $(dest).offset().top,
        },
        100
      );
    }

    return false;
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

window.addEventListener("click", (e) => {
  pauseAllAudio(audioElem);
  let currentAudio = e.target.parentElement.nextElementSibling;
  let btnAudio =
    currentAudio.previousElementSibling.querySelector(".js-btnPlay");

  let last = currentAudio;
  !isPaused ? playAudio(currentAudio, btnAudio) : pauseAudio(last, btnAudio);
});

function pauseAllAudio(arrAudio) {
  arrAudio.forEach((audio) => {
    audio.pause();
    console.log("audio", audio);
  });
}

function playAudio(elem, btn) {
  elem.play();
  console.log("btn", btn);
  btn.classList.add("is-active");
  elem.classList.add("current");
  console.log("play");
  isPaused = true;
}

function pauseAudio(elem, btn) {
  elem.pause();
  btn.classList.remove("is-active");
  elem.classList.remove("current");
  console.log("pause");
  isPaused = false;
}

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
