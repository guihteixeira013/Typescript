// Import stylesheets
import { MyTimer } from './my-timer'; // importando myTimer para usar no temporizador
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
    // inserir uma linha dentro da tabela
    const row = table.insertRow();
    // inserir uma celula dentro da linha
    const cell1 = row.insertCell();
    // inserir outra celula dentro da mesma linha
    const cell2 = row.insertCell();
    // adicionar texto dentro da célula 1
    cell1.innerHTML = `${num} x ${i} `;
    // adicionar texto dentro da célula 2
    cell2.innerHTML = `= ${num * i}`;
  }
})

// SCRIPT NÚMEROS ALEATÓRIOS
document.getElementById("random-button").addEventListener('click', () => {
  let num: number = Number(
    (<HTMLInputElement>document.getElementById("random-input")).value
  )

  const table = document.getElementById("random-table");
  table.innerHTML = ``;

  for (let i = 1; i <= num; i++) {
    const row = table.insertRow();
    const Cell1 = row.insertCell();
    const Cell2 = row.insertCell();
    Cell1.innerHTML = `${i}`;
    Cell2.innerHTML = `${Math.trunc(Math.random() * 100)}`;
  }
})

// SCRIPT TEMPORIZADOR
  // declarando e enviando para a classe o elemento HTML que desejo manipular 
let myTimer = new MyTimer(document.getElementById("temp-span")); 

// start button
document.getElementById("temp-start-button").addEventListener('click', () => {
  myTimer.start();
})

// stop button
document.getElementById("temp-start-button").addEventListener('click', () => {
  myTimer.stop();
})