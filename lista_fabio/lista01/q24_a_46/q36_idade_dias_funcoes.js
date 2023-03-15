import { question } from "readline-sync";

/*Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.*/

function main() {
  console.log('-----------------------------------------------------------------\n')
  console.log('Informe a sua idade:')

  const anos = Number(question('Anos: '))
  const meses = Number(question('Meses: '))
  const dias = Number(question('dias: '))

  const total_dias = anos_meses_dias_para_dias(anos, meses, dias)

  console.log(`Total em dias: ${total_dias} dias`)
  console.log('\n-----------------------------------------------------------------\n')
}

function anos_meses_dias_para_dias(anos, meses, dias){
  const anos_dias = anos * 365
  const meses_dias = meses * 30

  const total_dias = anos_dias + meses_dias + dias

  return total_dias
}

main()