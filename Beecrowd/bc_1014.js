import {loadFile} from '../function.js'

function main() {
  const lines = loadFile('teste/bc_1014.txt').split('\r\n').map(Number)

  let dis_total = lines[0]
  let comb_total = lines[1]

  let consumo = dis_total/comb_total

  console.log(`${consumo.toFixed(3)} Km/l`)
  console.log(dis_total)
  console.log(comb_total)
}

main()