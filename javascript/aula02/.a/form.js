function addEvents() {
    document.getElementById("bot").addEventListener("click", press);
    return 0;
}


function compare() {
    const numberOne = document.getElementById("n1").value;
    const numberTwo = document.getElementById("n2").value;
    const result = document.getElementById("result");
    if (numberOne > numberTwo) {
        result.value = "O primeiro número informado é maior!";
    }
    else
    if (numberOne < numberTwo) {
        result.value = "O primeiro número informado é menor!";
    }
    else {
        result.value = "Os números são iguais!";
    }
}

