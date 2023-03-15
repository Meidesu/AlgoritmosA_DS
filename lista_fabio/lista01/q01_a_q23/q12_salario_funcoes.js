import { question } from "readline-sync";

/*Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.*/

function main() {
  
  console.log('Calcule o aumento no salario:')

  const salario = Number(question('Informe o seu salario: R$'))
  const taxa_aumento = Number(question('Informe a porcentagem de aumento: '))
  
  const aumento = calc_aumento_perc(taxa_aumento, salario)

  console.log(`Seu novo salario: R$${aumento}`)
}

function calc_aumento_perc(porcentagem, num_base) {
  const aumento = (1 + porcentagem/100) * num_base
  
  return aumento
}

main()
