import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1038.txt').split('\r\n')
  
  let val = lines[0].split(' ').map(Number)

  let cod = val[0]
  let quant = val[1]
  let total
  switch (cod) {
    case 1:
      total = 4 * quant
      console.log(`Total: R$ ${total.toFixed(2)}`)
      break;
    case 2:
      total = 4.5 * quant
      console.log(`Total: R$ ${total.toFixed(2)}`)
      break;
    case 3:
      total = 5 * quant
      console.log(`Total: R$ ${total.toFixed(2)}`)
      break;
    case 4:
      total = 2 * quant
      console.log(`Total: R$ ${total.toFixed(2)}`)
      break;
    case 5:
      total = 1.5 * quant
      console.log(`Total: R$ ${total.toFixed(2)}`)
      break;
    default:
      console.log('Produto inválido')
      break;
  }

}

main()
