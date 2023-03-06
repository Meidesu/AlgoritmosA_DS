import { question } from "readline-sync";

/*Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e 
ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.*/

const x1 = Number(question('Informe o x1: '))
const x2 = Number(question('Informe o x2: '))
const y1 = Number(question('Informe o y1: '))
const y2 = Number(question('Informe o y2: '))

const dist = Math.sqrt((x2-x1)**2+(y2-y1)**2)

console.log(`Distancia: ${dist.toFixed(4)}`)