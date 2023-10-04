// Import stylesheets
import './style.css';

//  SCRIPT PAR OU ÍMPAR
// identificando o 'click' e imediatamente atribuindo uma função para o click
document.getElementById("parimpar-button").addEventListener('click', () => {

  // a variável 'num' irá receber o valor já convertido para Number do element HTML Input
  let num: number = Number(
    (<HTMLInputElement>document.getElementById("parimpar-input")).value
  );

  // teste de condição
  if (num % 2 == 0) {
    // adicionando o texto dentro da div "É PAR"
    document.getElementById("parimpar-div").innerHTML = "É <strong>PAR</strong>";
  } else {
    // adicionando o texto dentro da div "É ÍMPAR"
    document.getElementById("parimpar-div").innerHTML = "É <strong>ÍMPAR</strong>";
  }
});

//  SCRIPT SOMA
// identificando button da SOMA
document.getElementById("soma-button").addEventListener('click', () => {
  // declarar as duas variáveis
  let num1: number = Number(
    (<HTMLInputElement>document.getElementById("soma-input")).value);
  let num2: number = Number(
    (<HTMLInputElement>document.getElementById("soma-input2")).value);
  
  // realizar a soma e mostrar resultado 
  document.getElementById("soma-div").innerHTML = `A Soma dos valores é <strong>${num1 + num2}</strong>`;
})

// SCRIPT TABUADA
document.getElementById("tabuada-button").addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById("tabuada-input")).value
  )
  const table = document.getElementById("tabuada-table");
  table.innerHTML = ""; // quando button clicado, zera toda a table
  // estrutura de repetição
  for (let i = 1; i <= 10; i++) {
    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();
    cell1.innerHTML = `${num} x ${i} `;
    cell2.innerHTML = `= ${num * i}`;
  }
})