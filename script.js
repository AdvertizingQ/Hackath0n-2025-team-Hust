const users = [
  {
    name: "Іван",
    email: "example@gmail.com",
    password: "123456",
    selector: "Волонтер"
},
{
    name: "#Save_animals",
    email: "example@gmail.com",
    password: "password",
    selector: "Притулок"
}
]; // Array to store user data
function populateProfileInfo(user) {
  if (!user) return;

  // Заповнюємо ім'я та селектор
  $('.user-name').text(user.name); // Ім'я користувача
  $('.user-selector').text(user.selector); // Волонтер або Притулок
}
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

let selectedRole = ""; // Змінна для збереження вибору

// Обробник для вибору "Волонтер"
$('#volunteerCard').on('click', function () {
    selectedRole = "Волонтер"; // Зберігаємо вибір
    $('.selector-card').removeClass('selected'); // Знімаємо виділення з усіх карток
    $(this).addClass('selected'); // Додаємо виділення до вибраної картки
});

// Обробник для вибору "Притулок"
$('#shelterCard').on('click', function () {
    selectedRole = "Притулок"; // Зберігаємо вибір
    $('.selector-card').removeClass('selected'); // Знімаємо виділення з усіх карток
    $(this).addClass('selected'); // Додаємо виділення до вибраної картки
});

// Обробник для кнопки реєстрації
$('#registerBtn').on('click', function () {
  const name = $('#name1').val();
  const email = $('#email1').val();
  const password = $('#password1').val();

  if (name && email && password) {
      // Отримуємо існуючих користувачів із localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Додаємо нового користувача з фіксованим selector "Притулок"
      users.push({ name, email, password, selector: "Притулок" });
      localStorage.setItem('users', JSON.stringify(users)); // Зберігаємо в localStorage

      // Очищуємо поля форми
      $('#name1').val('');
      $('#email1').val('');
      $('#password1').val('');
      
      closePopup(); // Закриваємо попап
      alert('Ви успішно зареєстровані!');
  } else {
      alert('Будь ласка, заповніть усі поля!');
  }
});

$('#loginBtn').on('click', function () {
  const email = $('#email2').val();
  const password = $('#password2').val();

  // Отримуємо користувачів із localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
      // Примусово встановлюємо selector як "Притулок"
      user.selector = "Притулок";

      // Зберігаємо оновлену інформацію про користувача в localStorage
      localStorage.setItem('loggedInUser', JSON.stringify(user));

      closePopup(); // Закриваємо попап
      alert(`Ласкаво просимо, ${user.name}!`);
      window.location.href = './cabinet.html'; // Перенаправляємо до кабінету
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
$("#create-announcment-btn").on("click", function () {
  $("#popup5").css("display", "flex"); // Показуємо popup5
  $(".popup-content").addClass("bcg-color"); // Додаємо клас для стилізації
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття

});



document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.getElementById("burgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenuBtn = document.getElementById("closeMenuBtn");

  // Відкриття/закриття бургер-меню
  burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
  });

  // Закриття меню при натисканні на кнопку "Закрити"
  closeMenuBtn.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
  });
}); 





// Відкрити попап для реєстрації/входу
$("#mobileAuthBtn").on("click", function () {
  $("#popup1").css("display", "flex"); // Показуємо попап реєстрації/входу
  $("body").addClass("no-scroll"); // Забороняємо прокрутку
  $("#mobileMenu").removeClass("active"); // Закриваємо мобільне меню
});



// Змінити мову

$("#sendBtn").on("click", function () {
  $("#popup5").css("display", "none"); // Ховаємо popup5
  $(".popup-content").removeClass("bcg-color"); // Видаляємо клас для стилізації
  $("#name3").val(""); // Очищаємо поле вводу
  $("#email3").val(""); // Очищаємо поле вводу
  $("#phoneNumber").val(''); // Очищаємо поле вводу
  $("#message").val(""); // Очищаємо поле вводу
  $('body').removeClass('no-scroll'); // Дозволяємо прокрутку
  $('.body-content').removeClass('blur'); // Знімаємо ефект розмиття
});
$('#ask-for-pet-btn').on('click', function () {
  $('#popup5').css('display', 'flex'); // Показуємо попап
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття
  $('body').addClass('no-scroll'); // Забороняємо прокрутку
  $('.popup-content').addClass('bcg-color'); // Додаємо клас для стилізації
});

