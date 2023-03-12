import { question } from "readline-sync";

function main() {
  print('-----------------------------------------------------------------')

  print('  Calculo de deficit calorico: \n')
  
  const peso = input('Peso atual: ')
  const meta = input('Peta em %: ')
  const semanas = input('Quantas semanas: ')
  const consumo = input('Quantas kcal p/dia: ')

  const deficit = deficit_cal(peso, meta, semanas, consumo) 

  print(`\nVoce precisa queimar ${deficit} `)

  print('-----------------------------------------------------------------')
}

function deficit_cal(peso, meta, semanas, consumo) {
  const meta_kcal = kg_kcal(meta, peso)
  const deficit = meta_kcal / semanas_dias(semanas)
  const perda_dia = deficit + consumo

  return `${perda_dia.toFixed(2)}Kcal por dia para ter um deficit de ${deficit.toFixed(2)}Kcal`
}

function kg_kcal(meta, peso) {
  const kgKcal = ((meta/100) * peso) * 7700

  return kgKcal
}

function semanas_dias(semanas) {
  const dias = semanas * 7

  return dias
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