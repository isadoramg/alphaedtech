function addEvents(){
    document.getElementById("bot").addEventListener('click',sortear);
}

function sortear(){
    let n1 = document.getElementById('num1').value;
    let n2 = document.getElementById('num2').value;
    let min = parseInt(n1);
    let max = parseInt(n2);
    let result = document.getElementById('resultado');


    if(isNaN(min) || isNaN(max) || min != n1 || max != n2){
        result.innerHTML = 'Insira apenas números inteiros';
    }else{
        if(min < max){
            let aleat = Math.random() * (max-min) + min;
            result.innerHTML = 'Número sortido: ' + aleat.toFixed(0);
        }
    }

    return 0;
}