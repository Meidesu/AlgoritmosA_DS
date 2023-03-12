import { question } from "readline-sync";

/*A taxa metabólica basal(TMB) é o minimo de energia necessária para manter a funções básicas do organismo,
como: batimentos cardíacos, respiração, temperatura corporal, etc.*/

function main() {
  print('-----------------------------------------------------------------')

  print('   Calculo da taxa metabolica basal(TMB) para homens: \n')

  const peso = input('   Informe o peso(kg): ')
  const idade = input('   Informe a idade(anos): ')
  const altura = input('   Informe a altura(cm): ')

  const tmb = calc_tmb(peso, idade, altura)

  print(`\n   Sua TMB é: ${tmb} kcal`)
  
  print('-----------------------------------------------------------------')
}

function calc_tmb(peso, idade, altura){
  const taxa_tmb =  Math.floor(88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade))

  return taxa_tmb
}

function input(cont) {
  const input = Number(question(cont))

  return input
}

function print(cont) {
  const print = console.log(cont)

  return print
}

main()