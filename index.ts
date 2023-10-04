// Import stylesheets
import './style.css';

// identificando o 'click' e imediatamente atribuindo uma função para o click
document.getElementById("parimpar-button").addEventListener('click', () => {

  // a variável 'num' irá receber o valor já convertido para Number do element HTML Input
  let num: number = Number(
    (<HTMLInputElement>document.getElementById("parimpar-input")).value
  );

  // teste de condição
  if (num % 2 == 0) {
    // adicionando o texto dentro da div "É PAR"
    document.getElementById("parimpar-div").innerHTML = "É PAR";
  } else {
    // adicionando o texto dentro da div "É ÍMPAR"
    document.getElementById("parimpar-div").innerHTML = "É ÍMPAR";
  }
});