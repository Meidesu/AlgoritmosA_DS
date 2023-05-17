import { question } from "readline-sync";

/* */

function main() {
  print('-----------------------------------------------------------------\n')
  print('----------->  <-----------')

  print()
  print('\n-----------------------------------------------------------------')
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