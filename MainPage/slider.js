$(document).ready(function () {
    let currentSlide = 0;
    const slides = $(".slide");
    const dots = $(".dot");

    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
      dots.removeClass("active").eq(index).addClass("active");
    }

    $(".next").click(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    $(".prev").click(function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });

    $(".dot").click(function () {
      currentSlide = $(this).index();
      showSlide(currentSlide);
    });

    showSlide(currentSlide);
  });