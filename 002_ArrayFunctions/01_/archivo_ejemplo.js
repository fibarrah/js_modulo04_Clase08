'use strict'

console.clear();

// ARRAY FUNCTION

/**
 * 
 */

 const arrNumeros = [1,2,3,4,5];

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

    let nuevoArr = [];
    for (let index = 0; index < arrNumeros.length; index++) {
        //nuevoArr.push(arrNumeros[index]);
        nuevoArr.push(valorDoble(arrNumeros[index]));
    }

    console.log(nuevoArr);

})

var btn_ejemplo2 = document.querySelector("#btn_ejemplo2");
btn_ejemplo2.addEventListener('click', () => {

    let nuevoArr = arrNumeros.map((item, pos) => {
        //console.log(item);
        //console.log(`Item en Posicion: ${pos} es ${item}`);
        return item * 2;
    })

    console.log(nuevoArr);
})

var btn_ejemplo3 = document.querySelector("#btn_ejemplo3");
btn_ejemplo3.addEventListener('click', () => {


    let newArr = dataArray.map((data, pos) => {
                //console.log(data);
        return {
            name: data.nombre,
            experiencia: data.experiencia
        }

    })

    

    const filtroArray = updateArray(newArr);
    console.log(filtroArray);
})


// FUNCIONES

const valorDoble = (item) => {
    return item * 2;
}

const cloneObject = (arr) => {
    return {...arr}
}

const updateArray = (arr) => {
    const arrayNew = cloneObject(arr);
    return arrayNew;
}