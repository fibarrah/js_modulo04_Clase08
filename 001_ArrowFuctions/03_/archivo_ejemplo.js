'use strict'

console.clear();

// ARROW FUNCTION filter

/**
 * 
 */

 const arrNumeros = [1,2,3,4,5,6,7];

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
    // NO SE PUEDE TRABAJAR
    const newArrayData = updateArray(arrNumeros);
    const resultado = newArrayData.filter(item => {

    })
})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

        const resultado = arrNumeros.filter(item => {
            //console.log(item);
            //return true;
            return false;
        })

        console.log(resultado);

})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () => {

    const resultado = arrNumeros.filter(item => {

        //return item % 2 === 0;
        return item % 2 !== 0;

    })
    console.log('Resultado de la Matriz =>', resultado);

})

var btn_ejemplo4 = document.querySelector("#btn_ejemplo4");
btn_ejemplo4.addEventListener('click', () => {

    const resultado = dataArray.filter(item => {

        return item.tipo === 'Sector Privado' && item.experiencia > 10;

    })

    console.log(resultado);

})


// FUNCIONES

const cloneObject = () => {
    return {...arrNumeros}
}

const updateArray = (arr) => {
    const arrayNew = cloneObject(arr);
    return arrayNew;
}