"use strict"

const auth = () => {
    if (localStorage.access_token) {
        afterLogin()
    } else {
        beforeLogin()
    }
}

const register = (email, password, name) => {
    Ajax.register(email, password, name)
        .done(response => {
            console.log(response);
            $('#email-register').val('')
            $('#password-register').val('')
            login(email, password)
        })
        .fail(err => {
            alert(err.responseJSON.message)
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}

const login = (email, password) => {
    Ajax.login(email, password)
        .done(response => {
            localStorage.access_token = response.access_token
            $('#email-login').val('')
            $('#password-login').val('')
            auth()
        })
        .fail(err => {
            alert(err.responseJSON.message)
            console.log(err.responseJSON);
        })
        .always(() => {
        })
}

function onSignIn(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    Ajax.loginGoogle(id_token)
        .done(response => {
            localStorage.access_token = response.access_token
            auth()
        })
        .fail((xhr, status) => {
            console.log(status,'<<<<<<<<<<<<<<');
        })
}

const logout = () => {
    localStorage.clear()
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    auth()
}
