import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('../teste/bc_1019.txt').split('\r\n').map(Number) //<----

  let tempo = lines[0]

  let horas = Math.trunc(tempo / 3600)
  let min = Math.trunc(tempo%3600/60)
  let seg = Math.trunc(tempo%3600%60)

  console.log(`${horas}:${min}:${seg}`)

}
main()