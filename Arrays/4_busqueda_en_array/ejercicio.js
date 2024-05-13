const lista = ["pipe", "juan", "lusia"]

function terminanEnA(words) {
    let resultado = "false"
    for(let i=0; i < words.length; i++) {
        if (words[i].endsWith("a")){
            resultado = "True"
        }
        console.log(resultado)
    }
  }
terminanEnA(lista)