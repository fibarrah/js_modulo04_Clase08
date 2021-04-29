'use strict'

console.clear();

// EJERCICIO

/**
 * 
 */

// CAR GLOBALES

// EVENTOS

var btn_primerEjemplo = document.querySelector("#btn_ejemplo1");
btn_primerEjemplo.addEventListener('click', () => {

    getInformacion()

});

const getUsuarios = () => {
    return fetch('http://jsonplaceholder.typicode.com/users');
}



const getInformacion = () => {

    getUsuarios()
        .then(data => data.json())
        .then(users => {
            console.clear();
            console.log(regresarIDConFilter(3,users));
        })

}

const regresarIDConFilter = (id_, usuarios) => {

    const resultado = usuarios.filter(item => {
        return item.id === id_;
    })

    return(resultado);

}



// FUNCIONES
