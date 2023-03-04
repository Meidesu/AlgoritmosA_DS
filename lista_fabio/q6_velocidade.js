import { question } from "readline-sync";

/*
Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. 
(Vm/s = Vkm/h / 3.6)
*/
console.log('Transforme km/h em m/s')

const Vkmh = Number(question('Velocidade(km/h): '))

const Vms = Vkmh / 3.6
console.log(`Velocidade(m/s): ${Vms}m/s`)