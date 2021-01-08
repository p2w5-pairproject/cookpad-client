"use strict"

const readRecipe = () => {
    Ajax.readRecipe()
        .done(response => {
            console.log(response);
            
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}

const readOneRecipe = (id) => {
    Ajax.readOneRecipe(id)
        .done(response => {
            console.log(response);
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}

const createRecipe = (name, description, step, ingredient) => {
    Ajax.createRecipe(name, description, step, ingredient)
        .done(response => {
            console.log(response);
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}

const updateRecipe = (id, name, description, step, ingredient) => {
    Ajax.updateRecipe(id, name, description, step, ingredient)
        .done(response => {
            console.log(response);
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}

const deleteRecipe = (id) => {
    Ajax.deleteRecipe(id)
        .done(response => {
            console.log(response);
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}