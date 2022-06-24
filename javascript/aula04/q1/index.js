function addEvents(){
    document.getElementById("bot").addEventListener('click',calcular);
}

function calcular(){
    let peso = parseFloat(document.getElementById('peso').value.replace(',','.'));
    let altura = parseFloat(document.getElementById('altura').value.replace(',','.'));
    let resultado = document.getElementById('resultado');
    let IMC;
    console.log('peso: ' + peso + '\naltura: ' + altura);
    console.log(isNaN(peso));
    if(isNaN(peso) || isNaN(altura) || peso == 0 || altura == 0){
        alert('insira valores válidos para altura e peso')
    }else{

        IMC = peso / (altura * altura);
        if(IMC < 18.5){
            resultado.innerHTML = 'Abaixo do peso.';
        }else if(IMC < 24.9){
            resultado.innerHTML = 'Peso normal.';
        }else if(IMC < 29.9){
            resultado.innerHTML = 'Sobrepeso.';
        }else{
            resultado.innerHTML = 'Obesidade.';
        }
    }

    return 0;
}