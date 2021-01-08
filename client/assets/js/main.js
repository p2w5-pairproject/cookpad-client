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

    // $('#navbar').hide()
    // $('#landing-page').hide()
    $('#login-section').hide()
    $('#register-section').hide()
    // $('#logout-button').show()
    // $('#logged').show()
}

const beforeLogin = () => {
    $('#login-button').show()
    $('#register-button').show()
    $('#logout-button').hide()
    $('.recipe').hide()

    // $('#navbar').show()
    // $('#landing-page').show()
    $('#login-section').show()
    $('#register-section').show()
    // $('#logout-button').hide()
    // $('#logged').hide()
}