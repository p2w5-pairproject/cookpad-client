"use strict"

const readRecipe = () => {
    Ajax.readRecipe()
        .done(response => {
            console.log(response);
            $("#list-recipe-container").empty()
            response.forEach(el => {
                let due_date = new Date(el.due_date).getFullYear()
                $('#list-recipe-container').append(`
                <div class="card" style="width: 18rem;">
                    <img src="https://cdn-u1-gnfi.imgix.net/post/large-543defb8b5718-86712ff11c99c09cb60453869a030596.jpg?w=1200&max-h=630&fit=crop&crop=face&mark-align=right&mark-scale=15&mark-pad=40&mark64=aHR0cHM6Ly93d3cuZ29vZG5ld3Nmcm9taW5kb25lc2lhLmlkL2Fzc2V0cy9mcm9udDIwMTkvaW1hZ2VzL3Jlc3RvcmluZy1pbmRvbmVzaWFuYS5wbmc" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title" id="list-recipe-title">${el.name}</h5>
                    <p class="card-text" id="list-recipe-description">${el.description}</p>
                
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Selengkapnya
                    </button>
                    <button id="delete-recipe-button" onClick="deleteRecipe(${el.id})" >DELETE</button>
                    </div>
                </div>
                `)
            });
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
            auth()
        })
        .fail(err => {
            console.log(err);
        })
        .always(() => {
            console.log('always');
        })
}