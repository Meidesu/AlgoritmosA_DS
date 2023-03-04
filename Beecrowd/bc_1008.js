import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1008.txt').split('\r\n').map(Number) //<----
  
  let n_funcionario = lines[0]
  let hrs_trabalhadas = lines[1]
  let valor_por_hrs = lines[2]

  let salario = hrs_trabalhadas*valor_por_hrs

  console.log(`NUMBER = ${n_funcionario}`)
  console.log(`SALARY = U$ ${salario.toFixed(2)}`)

}


main()