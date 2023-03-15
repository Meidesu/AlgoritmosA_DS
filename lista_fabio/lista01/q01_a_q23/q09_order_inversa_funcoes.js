import { question } from "readline-sync";

function main() {
  const num1 = Number(question('Primeiro numero: '))
  const num2 = Number(question('Segundo numero: '))

  console.log('Ordem inversa:',num2, num1)
}

main()