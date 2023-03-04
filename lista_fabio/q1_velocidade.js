import { question } from "readline-sync";

/*
Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. 
(Vkm/h = Vm/s * 3.6)
*/
console.log('Transforme m/s em km/h')

const Vms = Number(question('Velocidade(m/s): '))

const Vkmh = Vms * 3.6
console.log('Velocidade(Km/h):', Vkmh, 'km/h')