'use strict'

console.clear();

// ARROW FUNCTION

/**
 * 
 */
 //Error al mandarlo llamar fuera de un scope
 //const uno = enviarSaludoArrow3('nombre');

// EVENTOS
let btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {

    enviarSaludoArrow3('nombre');

})

// FUNCIONES

// FUNCION 
function enviarSaludos(nombre){
    return `Bienvenido, ${nombre}`;
}

// ARROW FUNCTION
const enviarSaludoArrow = (nombre,edad) => {
    return `Bienvenido, ${nombre} ${edad}`;
}

const enviarSaludoArrow2 = nombre => {
    return `Bienvenido, ${nombre}`;
}

const enviarSaludoArrow3 = nombre => `Bienvenido, ${nombre}`;