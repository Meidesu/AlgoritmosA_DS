import { question } from "readline-sync";

/* Dada a distância da prova (em metros) e a velocidade média do atleta (em km/h),
calcule o tempo da prova em minutos. */

function main() {
  print('-----------------------------------------------------------------')

  print('Calcule o tempo gasto em um percurso: \n')

  const distancia = input('Distancia da prova(metros): ')
  const vel = input('Velocidade media do atleta(Km/h): ')

  const tempo = tempo_prova(distancia, vel)

  print(`\nTempo de prova: ${tempo}min`)
  print('-----------------------------------------------------------------')
}

function tempo_prova(distancia, vel) {
  const tempo = (distancia/ (vel * 1000)) * 60

  return tempo.toFixed(2)
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