import { question } from 'readline-sync'

function main() {
  const salario = Number(question('Informe o seu salário(R$): '))

  if (salario > 0 && salario <= 2000.0) {
    console.log(`Isento`)
    return
  }

  const imposto_renda = calc_imposto_renda(salario.toFixed(2))

  console.log(`R$ ${imposto_renda.toFixed(2)}`)
}

function calc_imposto_renda(salario) {
  if (salario > 2000 && salario <= 3000) {
    return (salario - 2000) * 0.08
  } else if (salario > 3000 && salario <= 4500) {
    return 1000 * 0.08 + (salario - 3000) * 0.18
  } else {
    return 1000 * 0.08 + 1500 * 0.18 + (salario - 4500) * 0.28
  }
}

main()
