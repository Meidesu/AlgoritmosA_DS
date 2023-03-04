import { question } from "readline-sync";

/*
Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. 
(Vkm/h = Vm/s * 3.6)
*/

const velMS = question('Velocidade(m/s): ')

const velKM = velMS * 3.6

console.log('Velocidade(K/m)', velKM)