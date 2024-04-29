

function number1() {
    let number1 = document.getElementById("number1").value;
    return parseInt(number1);
}

function number2() {
    let number2 = document.getElementById("number2").value;
    return parseInt(number2);
}

function calcular(){
    let resultado = number1() + number2();
    resultado = document.getElementById("resultado").textContent = resultado;
}