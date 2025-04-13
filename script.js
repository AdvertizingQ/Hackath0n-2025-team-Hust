const users = []; // Array to store user data

$('#btnSignIn').on('click', function () {
  $('#popup1').css('display', 'flex'); // Show the pop-up
  $('.body-content').addClass('blur'); // Add blur to the background
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
});

$('.close-popup-btn').on('click', closePopup); // Close pop-up when clicking the close button

$('#signInBtn').on('click', function () {
  $('#popup2').css('display', 'flex'); // Show the pop-up
  $('.body-content').addClass('blur'); // Add blur to the background
  $('#popup1').css('display', 'none');
  $('.popup-content').addClass('bcg-color');
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
});

$('#logInBtn').on('click', function () {
  $('#popup3').css('display', 'flex'); // Показуємо попап
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття
  $('#popup1').css('display', 'none');
  $('.popup-content').addClass('bcg-color2');
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
});

$('#registerBtn').on('click', function () {
  const name = $('#name1').val();
  const email = $('#email1').val();
  const password = $('#password1').val();
  if (name && email && password) {
    users.push({ name, email, password });
    $('#name1').val('');
    $('#email1').val('');
    $('#password1').val('');
    closePopup();
    alert('Ви успішно зареєстровані!');
  } else {
    alert('Будь ласка, заповніть усі поля!');
  }
});

$('#loginBtn').on('click', function () {
  const email = $('#email2').val();
  const password = $('#password2').val();
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    closePopup();
    alert(`Ласкаво просимо, ${user.name} !`);
  } else {
    alert('Неправильний логін або пароль!');
  }
});

function closePopup() {
  $('.popup').css('display', 'none'); // Ховаємо pop-up
  $('.body-content').removeClass('blur'); // Знімаємо ефект розмиття
  $('.popup-content').removeClass('bcg-color');
  $('.popup-content').removeClass('bcg-color2');
  $('body').removeClass('no-scroll'); // Дозволяємо прокрутку
}

$(".Btn_Adopt").on("click", function () {
  $("#popup4").css("display", "flex"); // Показуємо popup4
  $(".popup-content").addClass("bcg-color2"); // Додаємо клас для стилізації
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття
});

$(".AdoptInfoBtn").on("click", function () {
  $("#popup4").css("display", "none"); // Ховаємо popup4
  $(".popup-content").removeClass("bcg-color2"); // Видаляємо клас для стилізації
  $("#name3").val(""); // Очищаємо поле вводу
  $("#email3").val(""); // Очищаємо поле вводу
  $("#phoneNumber").val(''); // Очищаємо поле вводу
  $("#message").val(""); // Очищаємо поле вводу
  $('body').removeClass('no-scroll'); // Дозволяємо прокрутку
  $('.body-content').removeClass('blur'); // Знімаємо ефект розмиття
});

$(".register_btn").on("click", function () {
  $("#popup4").css("display", "flex"); // Показуємо popup4
  $(".popup-content").addClass("bcg-color2"); // Додаємо клас для стилізації
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття
});
$("#burgerMenu").on("click", function () {
  $("#mobileMenu").toggleClass("active"); // Перемикаємо клас "active" для мобільного меню
  $("body").toggleClass("no-scroll"); // Забороняємо або дозволяємо прокрутку
});
// Відкрити попап для реєстрації/входу
$("#mobileAuthBtn").on("click", function () {
  $("#popup1").css("display", "flex"); // Показуємо попап реєстрації/входу
  $("body").addClass("no-scroll"); // Забороняємо прокрутку
  $("#mobileMenu").removeClass("active"); // Закриваємо мобільне меню
});

// Змінити мову
$("#mobileLanguageBtn").on("click", function () {
  alert("Функція зміни мови поки що не реалізована!");
});