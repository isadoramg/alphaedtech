function addEvents() {
    document.getElementById("bot").addEventListener("click", press);
    return 0;
}


function compare() {
    const numberOne = document.getElementById("input1").value;
    const numberTwo = document.getElementById("input2").value;
    const result = document.getElementById("result").value;
    console.log(result);
    const dias = new Date(result).getDay().toString();
    console.log(dias);

    console.log(numberOne + " " + numberTwo + " " + result);
    
}

function remainingDays() {
    const gender = document.querySelector("input[type=radio]:checked").value;
    const date = document.getElementById("n1").value;
    const age = Math.abs(new Date() - new Date(date));
    const days = age/(1000 * 3600 * 24);
    var data = new Date();



console.log(dataAtual);
    console.log(typeof date);
    console.log(days);
    // if (gender === "masculino") {
    //     73,1 
    // }
}