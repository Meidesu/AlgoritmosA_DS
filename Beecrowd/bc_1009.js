import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1009.txt').split('\r\n') //<----
  
  let nome_vendedor = lines[0]
  let salario_fixo = Number(lines[1])
  let montante_vendas = Number(lines[2])

  let salario_final = salario_fixo + ((montante_vendas*15)/100)

  console.log(`TOTAL = R$ ${salario_final.toFixed(2)}`)

}


main()