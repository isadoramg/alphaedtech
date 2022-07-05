function addEvents() {
  document.getElementById("bot").addEventListener("click", q1);
}

function q1() {
  const string = document.getElementById("num1").value;
  const num = parseInt(string);
  const result = document.getElementById("resultado");
  if (num < 0 || num > 10) {
    result.innerHTML = "Número inválido";
  }
  switch (num) {
    case 0:
      result.innerHTML = "Zero";
      break;
    case 1:
      result.innerHTML = "Um";
      break;
    case 2:
      result.innerHTML = "Dois";
      break;
    case 3:
      result.innerHTML = "Três";
      break;
    case 4:
      result.innerHTML = "Quatro";
      break;
    case 5:
      result.innerHTML = "Cinco";
      break;
    case 6:
      result.innerHTML = "Seis";
      break;
    case 7:
      result.innerHTML = "Sete";
      break;
    case 8:
      result.innerHTML = "Oito";
      break;
    case 9:
      result.innerHTML = "Nove";
      break;
    case 10:
      result.innerHTML = "Dez";
      break;

    default:
      break;
  }

  return 0;
}
