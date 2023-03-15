import { question } from "readline-sync";

function main() {
  console.log('Transforme km/h em m/s')
  
  const Vkmh = Number(question('Velocidade(km/h): '))

  const Vms = kmh_para_ms(Vkmh)

  console.log(`Velocidade(m/s): ${Vms}m/s`)
}

function kmh_para_ms(velocidade) {
  const Vms = velocidade / 3.6

  return Vms.toFixed(2)
}

main()