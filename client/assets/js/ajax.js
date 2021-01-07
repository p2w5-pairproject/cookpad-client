"use strict"

const baseUrl = 'http://localhost:3000'

class Ajax {
    static login(email, password) {
        return $.ajax({
            method: 'POST',
            url: `${baseUrl}/login`,
            data: { email, password }
        })
    }

    static loginGoogle(id_token) {
        return $.ajax({
            method: 'POST',
            url: `${baseUrl}/google_login`,
            data: { id_token }
        })
    }

    static register(email, password, name) {
        return $.ajax({
            method: 'POST',
            url: `${baseUrl}/register`,
            data: { email, password, name }
        })
    }

    static createRecipe(name, description, step, ingredient) {
        return $.ajax({
            method: "POST",
            url: `${baseUrl}/recipes`,
            headers:{
                access_token: localStorage.access_token
            },
            data: { name, description, step, ingredient }
        })
    }

    static readRecipe() {
        return $.ajax({
            method: "GET",
            url: `${baseUrl}/recipes`,
            headers:{
                access_token: localStorage.access_token
            }
        })
    }

    static readOneRecipe(id) {
        return $.ajax({
            method: "GET",
            url: `${baseUrl}/recipes/${id}`,
            headers:{
                access_token: localStorage.access_token
            }
        })
    }

    static updateRecipe(id, name, description, step, ingredient) {
        return $.ajax({
            method: "PUT",
            url: `${baseUrl}/recipes/${id}`,
            headers:{
                access_token: localStorage.access_token
            },
            data: { name, description, step, ingredient }
        })
    }

    static deleteRecipe(id) {
        return $.ajax({
            method: "DELETE",
            url: `${baseUrl}/recipes/${id}`,
            headers:{
                access_token: localStorage.access_token
            }
        })
    }
}
