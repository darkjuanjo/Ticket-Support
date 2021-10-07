async function logInFormHandler() {
  const username = $('#username-login').val().trim();
  const password = $('#password-login').val().trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(username, password);
    console.log(response, 'login submitted');
  }
}

$('#login-form').on('submit', logInFormHandler);


async function registerFormHandler() {

  console.log('submit signup');

  const username = $('#username-register').val().trim();
  const email = $('#email-register').val().trim();
  const password = $('#password-register').val().trim();

  if (username && password && email) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);
  }
}

$('#sign-up').on('submit', logInFormHandler);

/*code to add possible live checks for username and password*/
// async function newAccountCheckHandler() {
//   const username = $('#username-register').val().trim();
//   const email = $('#email-register').val().trim();
//   const password = $('#password-register').val().trim();
//   const cPassword = $('#confrim-password').val().trim();

//   const responseUsername = await fetch(`/api/users/username/${username}`);
//   const responseEmail = await fetch(`/api/users/email/${email}`);

//   console.log(responseEmail, responseUsername)

//   if (responseUsername.status === 404 && responseEmail.status === 404 && password === cPassword) {
//     $('#sign-up').prop('disable', false);
//   }

//   if (responseUsername.status === 404) {
//     console.log('no username');
//     // $('#username-register').removeClass('is-invalid');
//     $('#username-register').addClass('is-valid');
//   } else {
//     // $('#username-register').removeClass('is-valid');
//     $('#username-register').addClass('is-invalid')
//   }

//   if (responseEmail.status === 404) {
//     console.log('no email');
//     // $('#email-register').removeClass('is-invalid');
//     $('#email-register').addClass('is-valid');
//   } else {
//     // $('#email-register').removeClass('is-valid');
//     $('#email-register').addClass('is-invalid')
//   }

//   if (password.legnth > 7 && password.legnth < 13) {
//     console.log('no password length');
//     // $('#password-register').removeClass('is-invalid');
//     $('#password-register').addClass('is-valid');
//   } else {
//     // $('#password-register').removeClass('is-valid');
//     $('#password-register').addClass('is-invalid')

//   }

//   if (password !== cPassword) {
//     console.log('password doesnt match')
//     // $('#confrim-password').removeClass('is-invalid');
//     $('#confrim-password').addClass('is-valid');
//   } else {
//     // $('#confrim-password').removeClass('is-valid');
//     $('#confrim-password').addClass('is-invalid')
//   }
// }

// $('#signup-form').on('blur', newAccountCheckHandler);


$('#sign-up').on('click', registerFormHandler);

$("#create-account").on('click', () => {
  $(".modal-fade").css('display', 'grid');
});
$(".close").on('click', () => {
  $(".modal-fade").hide();
});
$("#modal-close").on('click', () => {
  $(".modal-fade").hide();
});