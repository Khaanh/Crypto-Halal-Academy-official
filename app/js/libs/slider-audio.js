$(function () {
  // Optimize audio
  $("#js-feedbackSlider").on("init", function (event, slick) {
    document.querySelectorAll(".js-audio").forEach((item) => {
      let dataSrc = item.querySelector("source").getAttribute("data-src");
      item.querySelector("source").setAttribute("src", dataSrc);
    });
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
          centerPadding: "60px",
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
});
