function addEvents() {
  document.getElementById("bot").addEventListener("click", sortear);
}

let sorteio = () => {
  let sexo = () => {
    if (Math.random() * 100 <= 51.7) {
      return "Mulher";
    }
    return "Homem";
  };
  let idade = () => {
    if (Math.random() * 100 <= 16.7) {
      return "Idoso";
    }
    return "Não Idoso";
  };

  return { idade, sexo };
};

function sortear() {
  let result = document.getElementById("resultado");
  let sexo = sorteio().sexo();
  let idade = sorteio().idade();
  console.log("Resultado: " + sexo + " " + idade);
  result.innerHTML = "Resultado: " + sexo + " " + idade;

  return 0;
}
