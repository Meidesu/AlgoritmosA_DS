import {loadFile} from '../function.js'

function main(){

  const lines = loadFile('teste/bc_1036.txt').split('\r\n')
  
  let valores = lines[0].split(' ').map(Number)

  let a = valores[0]
  let b = valores[1] 
  let c = valores[2]
  let delta = b**2-4*a*c
  
  if (a === 0 | delta < 0) {
        console.log('Impossivel calcular')
      } else {
        let r1 = (-1 * b + Math.sqrt(delta))/ (2 * a)
        let r2 = (-1 * b - Math.sqrt(delta))/ (2 * a)
        console.log(`R1 = ${r1.toFixed(5)}`)
        console.log(`R2 = ${r2.toFixed(5)}`)
  }
  
  
}

main()