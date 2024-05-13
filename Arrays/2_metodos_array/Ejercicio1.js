const frutas = ["banana", "frutilla"]
frutas.push("naranja")
console.log(frutas) 

//metodo shift


const frutaEliminada = frutas.shift()
console.log(frutaEliminada)

const array = ["dey", "pancho", "la_hermana_de_dey"]

function procesarPedido(pedidos) {
    const nombrecliente = pedidos.shift()
    pedidos.unshift("bebidas")
    pedidos.push(nombrecliente)
    return pedidos
}

console.log(procesarPedido(array))