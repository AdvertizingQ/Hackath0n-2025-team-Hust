$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.slider-image');
    const totalSlides = slides.length;
  
    // Функція для показу слайда
    function showSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      }
      
      const slideWidth = slides.width();
      $('.slider').css('transform', 'translateX(' + (-slideWidth * currentIndex) + 'px)');
      
      // Оновлення номера поточного слайда
      $('.current-slide').text(currentIndex + 1);
    }
  
    // Кнопка "Наступний"
    $('.slider-button-next').click(function() {
      currentIndex++;
      showSlide(currentIndex);
    });
  
    // Кнопка "Попередній"
    $('.slider-button-prev').click(function() {
      currentIndex--;
      showSlide(currentIndex);
    });
  
    // Ініціалізація першого слайда
    showSlide(currentIndex);
  
    // Встановлюємо загальний номер слайдів
    $('.total-slides').text(totalSlides);
  });
  