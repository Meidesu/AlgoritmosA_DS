import { question } from "readline-sync";

/*Sabendo que latão é constituído de 70% de cobre e 30% de zinco,
escreva um algoritmo que calcule a quantidade de cada um desses
componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.*/

const latao = Number(question('Informe a quantidade de latao(kg): '))

const cobre = 0.7 *  latao
const zinco = 0.3 * latao

console.log(`
Quantidade de cobre e zinco necessaria:
Cobre: ${cobre} kg
Zinco: ${zinco} kg
`)