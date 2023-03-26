import { question } from "readline-sync";

/* Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.*/

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> DIGITE 3 NUMEROS <-----------')

  const num1 = input('Primeiro numero: ')
  const num2 = input('Segundo numero: ')
  const num3 = input('Terceiro numero: ')
  
  const opcao = input('Informe qual numero quer checar(1, 2 ou 3): ')

  if ( opcao >= 1 && opcao <= 3 ) {
    const escolha = escolher_numero(opcao, num1, num2, num3)
    print(`O ${opcao}° numero é: ${escolha}`)
  } else {
    print('Informe uma opção válida!!')
  }

  print('\n-----------------------------------------------------------------')
}

function escolher_numero(opcao, num1, num2, num3) {
  if (opcao == 1){
    return num1
  } else if ( opcao == 2 ) {
    return num2
  } else {
    return num3
  }
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