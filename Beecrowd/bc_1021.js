import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1021.txt').split('\r\n').map(Number) //<----

  let valor = lines[0]
  let notas100 = Math.floor(valor / 100);
valor %= 100;

let notas50 = Math.floor(valor / 50);
valor %= 50;

let notas20 = Math.floor(valor / 20);
valor %= 20;

let notas10 = Math.floor(valor / 10);
valor %= 10;

let notas5 = Math.floor(valor / 5);
valor %= 5;

let notas2 = Math.floor(valor / 2);
valor %= 2;

let moedas1 = Math.floor(valor / 1);
valor %= 1;

let moedas50 = Math.floor(valor / 0.5);
valor %= 0.5;

let moedas25 = Math.floor(valor / 0.25);
valor %= 0.25;

let moedas10 = Math.floor(valor / 0.1);
valor %= 0.1;

let moedas5 = Math.floor(valor / 0.05);
valor %= 0.05;

let moedas1cent = Math.round(valor / 0.01);

console.log("NOTAS:");
console.log(`${notas100} nota(s) de R$ 100.00`);
console.log(`${notas50} nota(s) de R$ 50.00`);
console.log(`${notas20} nota(s) de R$ 20.00`);
console.log(`${notas10} nota(s) de R$ 10.00`);
console.log(`${notas5} nota(s) de R$ 5.00`);
console.log(`${notas2} nota(s) de R$ 2.00`);

console.log("MOEDAS:");
console.log(`${moedas1} moeda(s) de R$ 1.00`);
console.log(`${moedas50} moeda(s) de R$ 0.50`);
console.log(`${moedas25} moeda(s) de R$ 0.25`);
console.log(`${moedas10} moeda(s) de R$ 0.10`);
console.log(`${moedas5} moeda(s) de R$ 0.05`);
console.log(`${moedas1cent} moeda(s) de R$ 0.01`);
}

main()
