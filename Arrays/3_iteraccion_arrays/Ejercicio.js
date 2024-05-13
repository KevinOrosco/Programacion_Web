//while

const array = ["Jhona", "pancho", "la_hermana_de_d"]

let contador = 0;

while (contador < array.length) {
    console.log(array[contador])
    contador++; 
}
//for
for(let i=0; i < array.length; i++) {
    console.log([i], array[i])
}

//foreach

array.forEach((Element) => {
    console.log(Element)
});


////////////////////////////////////////////////////////////////////////////////////

const lista = [1,2,4,5,5,6,6,7] 

function sumarPares(numeros) {
    let resultado = 0;
    for(let i=0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            resultado = resultado + numeros[i]
            console.log(resultado)
        }
    }
}

sumarPares(lista)