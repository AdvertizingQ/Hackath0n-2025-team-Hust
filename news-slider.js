$(document).ready(function () {
    let currentNews = 0;
    const newsSlides = $(".news-slide");
  
    function showNewsSlide(index) {
      newsSlides.removeClass("active");
      newsSlides.eq(index).addClass("active");
    }
  
    $(".news-arrow.right").click(function () {
      currentNews = (currentNews + 1) % newsSlides.length;
      showNewsSlide(currentNews);
    });
  
    $(".news-arrow.left").click(function () {
      currentNews = (currentNews - 1 + newsSlides.length) % newsSlides.length;
      showNewsSlide(currentNews);
    });
  });