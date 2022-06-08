function addEvents() {
    document.getElementById("bot").addEventListener("click", press);
    return 0;
}


function compare() {
    const firstWord = document.getElementById("fw").value;
    const secondWord = document.getElementById("sw").value;
    const result = document.getElementsByTagName("input");
    if (firstWord.length > secondWord.length) {
        result[2].value = "A primeira string é maior!";
    }
    else {
        result[2].value = "A primeira string é menor!";
    }
}

