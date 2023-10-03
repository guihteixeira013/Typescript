// Import stylesheets
import './style.css';

// Respeitando a mandinga 
console.log('hello world!');

// Declarações
console.log(`---> Declarações <---`);
  // no TYPESCRIPT é possível escolher o tipo da variável
let x: number = 10;
console.log(`este é o ${typeof(x)} ${x}`);
let text: string = `este é um exemplo de texto com concatenação do número ${x}`;
console.log(text);

// Condicionais
console.log(`---> Condicionais <---`);
if (x % 2 == 0) {
  console.log(`${x} é par.`);
} else {
  console.log(`${x} é ímpar.`);
}

// Laços de repetição
console.log(`---> Laços de repetição <---`);
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

  // LAÇO
console.log(`---> Varrendo um array com laço <---`);
let numbers: number[] = [14, 89, 33];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
  // ARROW FUNCTION
console.log(`---> Varrendo um array com ForEach <---`);
numbers.forEach((n) => {
  console.log(n);
})

// tupla (estrutura de dado)
let eu = ['guilherme', 28];
console.log(`meu nome é ${eu[0]}, tenho ${eu[1]} anos.`)

//  enum  
  // exemple 1
enum UserResponse {
  no,
  yes,
}
let decision: UserResponse = UserResponse.no;
console.log(decision);
  // exemple 2
enum Color {
  Red = 'red',
  Green = 2,
  Yellow = 3,
}
let color: Color = Color.Green;
console.log(color);

