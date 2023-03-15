import { question } from "readline-sync";

/*Leia um número inteiro de segundos, calcule e escreva quantas horas, 
quantos minutos e quantos segundos ele corresponde.*/

function main() {
  console.log('-----------------------------------------------------------------')
  console.log('Calcule o equivalente de x segundos em horas, minutos e segundos:')

  const total_seg = Number(question('Informe a quantidade de segundos: '))

  const tempo_eq = segundo_para_h_min_s(total_seg)

  console.log(`Equivale a: ${tempo_eq}`)

  console.log('-----------------------------------------------------------------')
}

function segundo_para_h_min_s(total_seg) {
  const horas = Math.trunc(total_seg / 3600)
  const min = Math.trunc(total_seg % 3600 / 60)
  const seg = total_seg % 3600 % 60

  return `${horas}h${min}min e ${seg}s`
} 

main()