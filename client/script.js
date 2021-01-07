let baseUrl = "http://localhost:3000"

$(document).ready(function() {

})

function onSignIn(googleUser) {
  const id_token = googleUser.getAuthResponse().id_token

  $.ajax({
    method: 'post',
    url: `${baseUrl}/google_login`,
    data: {id_token}
  })
  .done((data) => {
    localStorage.setItem("access_token", data.access_token);
  })
  .fail((error) => {
    console.log(error);
  })
  .always(() => {

  })
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}