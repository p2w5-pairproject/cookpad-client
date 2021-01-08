$(document).ready(function() {
    console.log('reload page~');
    auth()
})

const afterLogin = () => {
    $('#login-button').hide()
    $('#register-button').hide()
    $('#logout-button').show()
    $('.recipe').show()
    readRecipe()
}

const beforeLogin = () => {
    $('#login-button').show()
    $('#register-button').show()
    $('#logout-button').hide()
    $('.recipe').hide()
}