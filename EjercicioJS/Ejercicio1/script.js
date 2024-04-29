
//declarar funciones
//funcion tradicional
/*
function boton() {
    return caches
}
*/
//funcion flecha o arrow function

//const botonete = () => {}

let contador = 0;

//siempre los nombres de las funciones siguen la nomenclatura camelCase
function incrementar() {
    contador = contador + 1
    let number = document.getElementById("number").textContent = contador;
}