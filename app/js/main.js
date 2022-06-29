// ----------- jQuery functions -----------
$(function () {
  $("#js-benefitSlider").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 5,
    centerPadding: "150px",
    arrows: true,
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
