import { question } from "readline-sync";

/*Leia um número inteiro de minutos, calcule e escreva quantos dias, 
quantas horas e quantos minutos ele corresponde.*/

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Calcule o equivalente de x minutos em dias, horas e minutos:')

  const total_min = Number(question('Informe a quantidade de minutos: '))

  const tempo_eq = min_para_dias_h_min(total_min)

  console.log(`Equivale a: ${tempo_eq}`)
  console.log('-----------------------------------------------------------------')
}

function min_para_dias_h_min(total_min) {
  const dias = Math.trunc(total_min / 1440)
  const horas =  Math.trunc(total_min % 1440 / 60)
  const min = total_min % 1440 % 60

  return `${dias}dia(s), ${horas}hora(s) e ${min}minuto(s)`
}

main()