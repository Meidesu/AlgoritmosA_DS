import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1020.txt').split('\r\n').map(Number) //<----

  let dias_total = lines[0]

  let anos = Math.trunc(dias_total/365)
  let meses = Math.trunc(dias_total%365/30)
  let dias = Math.trunc(dias_total%365%30)

  console.log(anos + " ano(s)")
  console.log(meses + " mes(es)")
  console.log(dias + " dia(s)")
}
main()