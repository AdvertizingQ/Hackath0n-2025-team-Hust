const users = []; // Array to store user data

$('#btnSignIn').on('click', function () {
  $('#popup1').css('display', 'flex'); // Show the pop-up
  $('.body-content').addClass('blur'); // Add blur to the background
  });
  
  $('.close-popup-btn').on('click', closePopup); // Close pop-up when clicking the close button
  
  $('#signInBtn').on('click', function () {
  $('#popup2').css('display', 'flex'); // Show the pop-up
  $('.body-content').addClass('blur'); // Add blur to the background
  $('#popup1').css('display', 'none');
  $('.popup-content').addClass('bcg-color');
  });
  
  $('#logInBtn').on('click', function (){
  $('#popup3').css('display', 'flex'); // Показуємо попап
  $('.body-content').addClass('blur'); // Додаємо ефект розмиття
  $('#popup1').css('display', 'none');
  $('.popup-content').addClass('bcg-color2');
  })
  
  $('#registerBtn').on('click', function () {
  const name = $('#name1').val();
  const email = $('#email1').val();
  const password = $('#password1').val();
  if (name && email && password) {
  users.push({ name, email, password });
  $('#name').val('');
  $('#email').val('');
  $('#password').val('');
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
  };