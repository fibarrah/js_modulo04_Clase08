'use strict'

console.clear();

// ARROW FUNCTION reduce

/**
 * 
 */

// VARIABLES GLOBALES
const arrNumero = [1,2,3,4,5];

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
        tipo: 'Sector Publico'
    }

]

// EVENTOS

var btn_ejemplo1 = document.querySelector("#btn_ejemplo1");
btn_ejemplo1.addEventListener('click', () =>{

    //console.log(updateArray(arrNumero));

    // DEBE INTERACTUAR CON EL VALOR ORIGINAL
    var numcloneArr = new Array();
    numcloneArr = updateArray(arrNumero);

    numcloneArr.reduce((acumulador,item) => {
        console.log(acumulador);
    }, 0)

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () =>{

    // FORMA CORRECTA
        
    //PRIMER FORMA SUMA DE LOS VALORES
        //const reductor = (acumulador, valor) => acumulador + valor;
        //console.log(arrNumero.reduce(reductor));

    // SEGUNDA FORMA
    arrNumero.reduce((acumulador, item) => {
        //console.log(item);
        console.log(acumulador);
        return acumulador + 1;
    }, 0)


})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () =>{

    const resultado = dataArray.reduce ((acc,item) =>{

        //console.log(item.experiencia);
        //return acc  + item;
        //return acc  + item.experiencia;
        return acc + item.nombre;
    }, 0)

    console.log(resultado);

})

// FUNCIONES

const cloneObject = () => {
    return {...arrNumero}
}

const updateArray = (arr) => {
    const arrayNew = cloneObject(arr);
    return arrayNew;
}