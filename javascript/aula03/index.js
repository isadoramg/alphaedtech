function calc() {
    const operando1 = parseInt(document.querySelector("#operando1").value, 10);
    const operando2 = parseInt(document.querySelector("#operando2").value, 10);
    const operador = document.querySelector("#operador").value;

    let resultado;

    if (operador === "soma") {
        resultado = operando1 + operando2;
    } else if (operador === "subtração") {
        resultado = operando1 - operando2;
    } else if (operador === "multiplicação") {
        resultado = operando1 * operando2;
    } else if (operador === "divisão") {
        resultado = operando1 / operando2;
    };

    let resultPlace = document.getElementById("resultado");
    resultPlace.innerHTML = "Resultado: " + resultado;
}