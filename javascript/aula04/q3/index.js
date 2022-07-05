function addEvents() {
  document.getElementById("bot").addEventListener("click", sortear);
}

function pegarMaiorNum(string) {
  let maiorNum = 0;
  for (let index = 0; index < string.length; index++) {
    let element = string.charAt(index);
    if (parseInt(element) >= maiorNum) {
      maiorNum = element;
    }
  }
  return maiorNum;
}
function pegarMenorNum(string) {
  let menorNum = 9;

  for (let index = 0; index < string.length; index++) {
    let element = string.charAt(index);
    if (!isNaN(element)) {
      if (parseInt(element) < menorNum) {
        menorNum = element;
      }
    }
  }

  return menorNum;
}

function sortear() {
  let n1 = document.getElementById("num1").value;
  let number = parseFloat(n1);

  let result = document.getElementById("resultado");

  if (isNaN(number)) {
    alert("Número invalido.");
  } else {
    result.innerHTML =
      "Maior numero: " +
      pegarMaiorNum(n1) +
      " - Menor número: " +
      pegarMenorNum(n1);
    // alert(
    //   "Maior numero: " +
    //     pegarMaiorNum(n1) +
    //     " - Menor número: " +
    //     pegarMenorNum(n1)
    // );
  }

  return 0;
}
