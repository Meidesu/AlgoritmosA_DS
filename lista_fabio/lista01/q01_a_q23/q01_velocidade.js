import { question } from "readline-sync";

/*
Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. 
(Vkm/h = Vm/s * 3.6)
*/
console.log('Transforme m/s em km/h')

//entrada
const Vms = Number(question('Velocidade(m/s): '))

//processamento
const Vkmh = Vms * 3.6

//saida
console.log('Velocidade(Km/h):', Vkmh, 'km/h')