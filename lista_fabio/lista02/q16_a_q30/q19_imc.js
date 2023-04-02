import { question } from "readline-sync";

/* Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea 
(IMC = peso / altura2). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25),
obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).*/

function main() {
  console.log("---------------------------------------------------------------------------------")
  console.log("### CALCULO IMC ###")

  const altura = Number(question('Informe a altura(metros): '))
  const peso = Number(question('Informe o peso: '))

  const imc = calc_imc(altura, peso)
  const status = calc_status_imc(imc)

  console.log(`Seu IMC é ${imc} e sua situação atual é ${status}`)

  console.log("---------------------------------------------------------------------------------")
}

function calc_imc(altura, peso) {
  return (peso / (altura**2)).toFixed(2)
}

function calc_status_imc(imc){
  if( imc <= 25 ) {
    return `"Normal"`
  } else if( imc > 30 ) {
    return `"Obeso"`
  } else {
    return `"Obesidade morbida"`
  }
}

main()