import { question } from "readline-sync";

function main() {
  print('-----------------------------------------------------------------')
  const idade = input('  Informe a sua idade: ')

  const freqMax = freq_cardiaca(idade)
  const moderado = faixa_moderado(idade)
  const intenso = faixa_intenso(idade)   

  print(`
  A sua frequencia cardiaca maxima deve ser: ${freqMax} bpm, sendo:
    * Faixa ideal para atividade fisica moderada: ${moderado};
    * Faixa ideal para atividade fisica intensa: ${intenso}.
`)
  print('-----------------------------------------------------------------')
}

function faixa_moderado(idade) {
  const freqMax = freq_cardiaca(idade)
  const faixa_max = Math.floor(0.70 * freqMax)
  const faixa_min = Math.floor(0.50 * freqMax)
  
  return `${faixa_min}-${faixa_max} bpm`
}
function faixa_intenso(idade) {
  const freqMax = freq_cardiaca(idade)

  const faixa_max = Math.floor(0.85 * freqMax)
  const faixa_min = Math.floor(0.70 * freqMax)

  return `${faixa_min}-${faixa_max} bpm`
}

function freq_cardiaca(idade) {
  const freq_Max = 220 - idade

  return freq_Max
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
