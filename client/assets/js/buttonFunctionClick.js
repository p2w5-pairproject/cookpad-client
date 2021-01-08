// button
$('#register-button').click(function(event) {
    event.preventDefault()
    let email = $('#email-register').val()
    let password = $('#password-register').val()
    let name = $('#name-register').val()
    register(email, password, name)
})

$('#login-button').click(function(event) {
    event.preventDefault()
    let email = $('#email-login').val()
    let password = $('#password-login').val()
    login(email, password)
})

$('#logout-button').click(function(event) {
    event.preventDefault()
    logout()
})

//recipe
$('#search-recipe-button').click(function(event) { //getOneRecipe
    event.preventDefault()
    readOneRecipe('10')
})

$('#read-all-recipe').click(function(event) {
    event.preventDefault()
    readRecipe()
})

$('#create-recipe-button').click(function(event) {
    event.preventDefault()
    let name = $('#title-add').val()
    let description = $('#description-add').val()
    let step = $('#step-add').val()
    let ingredient = $('#ingredient-add').val()

    createRecipe(name, description, step, ingredient)
})

$('#update-recipe-button').click(function(event) {
    event.preventDefault()
    let id = $('#id').val()
    let name = $('#title-add').val()
    let description = $('#description-add').val()
    let step = $('#step-add').val()
    let ingredient = $('#ingredient-add').val()
    updateRecipe(id, name, description, step, ingredient)
})

$('#delete-recipe-button').click(function(event) {
    event.preventDefault()
    let id = $('#id').val()
    deleteRecipe(id)
})