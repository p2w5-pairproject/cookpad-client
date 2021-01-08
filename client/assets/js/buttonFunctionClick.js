// button
$('#register-button').click(function(event) {
    event.preventDefault()
    console.log('OKKK');
    let email = $('#email-register').val()
    let password = $('#password-register').val()
    let name = $('#name-register').val()
    register(email, password, name)
    // register('han@gmail.com', '123456', 'Hani')
})

$('#login-button').click(function(event) {
    event.preventDefault()
    let email = $('#email-login').val()
    let password = $('#password-login').val()
    login(email, password)
    // login('han@gmail.com', '123456')
})

$('#logout-button').click(function(event) {
    event.preventDefault()
    logout()
})

//recipe
$('#search-recipe-button').click(function(event) { //getOneRecipe
    event.preventDefault()
    readOneRecipe('11')
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
    // createRecipe('Test', 'description ini mungkin sangat panjang', '1. do something 2. do something', '1. tomat 2. i dont know')
})

$('#update-recipe-button').click(function(event) {
    event.preventDefault()
    let id = $('#id').val()
    let name = $('#title-add').val()
    let description = $('#description-add').val()
    let step = $('#step-add').val()
    let ingredient = $('#ingredient-add').val()
    // updateRecipe(id, name, description, step, ingredient)
    updateRecipe('11', 'Test edit', 'description ini mungkin sangat panjang', '1. do something 2. do something', '1. tomat 2. i dont know')
})

$('#delete-recipe-button').click(function(event) {
    event.preventDefault()
    let id = $('#list-recipe-id').val()
    console.log(id,'<<<<<<<<<<');
    // deleteRecipe(id)
    // deleteRecipe('10')
})