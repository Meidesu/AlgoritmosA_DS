import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1018.txt').split('\r\n').map(Number) //<----

  let valor = lines[0]

  let notas_100 = Math.trunc(valor/100)
  let notas_50 = Math.trunc(valor%100/50)
  let notas_20 = Math.trunc(valor%100%50/20)
  let notas_10 = Math.trunc(valor%100%50%20/10)
  let notas_05 = Math.trunc(valor%100%50%20%10/5)
  let notas_02 = Math.trunc(valor%100%50%20%10%5/2)
  let notas_01 = Math.trunc(valor%100%50%20%10%5%2/1)

  console.log(`${valor}`)
  console.log(`${notas_100} notas(s) de R$ 100,00`)
  console.log(`${notas_50} notas(s) de R$ 50,00`)
  console.log(`${notas_20} notas(s) de R$ 20,00`)
  console.log(`${notas_10} notas(s) de R$ 10,00`)
  console.log(`${notas_05} notas(s) de R$ 5,00`)
  console.log(`${notas_02} notas(s) de R$ 2,00`)
  console.log(`${notas_01} notas(s) de R$ 1,00`)

}
main()