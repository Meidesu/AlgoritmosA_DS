import { question } from "readline-sync";

/* Leia a quantidade de horas aula dadas por dois professores e o valor por hora recebido por cada um.
Escreva na tela qual dos professores tem salário total maior. */

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> COMPARAR SALARIO DE PROFESSORES<-----------')

  const prof_1 = input_stg('Nome do primeiro professor: ')
  const valorHora_1 = input('Valor hora: R$ ') 
  const horas_1 = input('Quantidade de horas: \n')
  
  const prof_2 = input_stg('Nome do segundo professor: ')
  const valorHora_2 = input('Valor hora: R$ ') 
  const horas_2 = input('Quantidade de horas: \n')

  const sal_1 = calc_salario(valorHora_1, horas_1)
  const sal_2 = calc_salario(valorHora_2, horas_2)

  const maior = comparar_salario(sal_1, sal_2, prof_1, prof_2)

  print(maior)
  print('\n-----------------------------------------------------------------')
}

function calc_salario(valor_hora, horas) {
  return valor_hora * horas
}

function comparar_salario(s1, s2, p1, p2) {
  if (s1 > s2 ) {
    return `${p1} tem o maior salário`
  } else if (s2 > s1) {
    return `${p2} tem o maior salário`
  } return `Ambos possuem o mesmo salario`
}
function input(cont) {
  const input = Number(question(cont))

  return input
}
function input_stg(cont) {
  const input = String(question(cont))

  return input
}
function print(cont) {
  const print = console.log(cont)

  return print
}

main()