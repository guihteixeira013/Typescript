// Criando classe para usar no 2 buttons p/ temporizador
export class MyTimer{
  // declarando elementos necessários para o temporizador
  interval = null;
  counter: number = 0;
  // a variável element irá receber o elemento div#temp-span, para mostrar o resultado 
  element: HTMLElement = null; 

  constructor(e: HTMLElement) {
    this.element = e;
  }

  start() {
    this.counter = 0;
    this.element.innerHTML = `${this.counter}s`;
    this.interval = setInterval(() => {
      this.counter++;
      this.element.innerHTML = `${this.counter}s`;
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}


// CORRECT CODE FROM LESSON
// export class MyTimer {
//   interval = null;
//   counter: number = 0;
//   element: HTMLElement = null;

//   constructor(e: HTMLElement) {
//     this.element = e;
//   }

//   start() {
//     this.counter = 0;
//     this.element.innerHTML = `${this.counter}s`;
//     this.interval = setInterval(() => {
//       this.counter++;
//       this.element.innerHTML = `${this.counter}s`;
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.interval);
//   }
// }