'use strict'

console.clear();

// ARROW FUNCTION filter

/**
 * 
 */

 const arrNumeros = [-1,-2,-3,-4,1,2,3,4];

 const dataArray = [
     {
         nombre: 'John Lark',
         experiencia: 10,
         tipo: 'Sector Privado'
     },
     {
         nombre: 'John Doe',
         experiencia: 5,
         tipo: 'Sector Publico'
     },
     {
         nombre: 'John Smith',
         experiencia: 20,
         tipo: 'Sector Privado'
     }    
 ]


// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () => {

    const resultado = arrNumeros.find(item => {

        console.log(item);

    })

    console.log('Resultado => ', resultado);

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    const resultado = arrNumeros.find(item => {

        //return true;        
        //return false;
        //return item % 2 == 0;
        return item % 2 == 0 && item >= 0;
    })

    console.log('Resultado => ', resultado);

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () => {

    const resultado = arrNumeros.findIndex(item => {
        return item % 2 === 0 && item >= 0;
    })

    console.log('resultado => ', resultado);

})


// FUNCIONES

const cloneObject = () => {
    return {...arrNumeros}
}

const updateArray = (arr) => {
    const arrayNew = cloneObject(arr);
    return arrayNew;
}