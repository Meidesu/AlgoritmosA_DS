import { question } from "readline-sync";

function main() {
  console.log('Transforme minutos em Horas.')

  const inputMin = Number(question('Informe os minutos: '))

  const horas_min = minutos_horas(inputMin)

  console.log(`Equivalente em horas: ${horas_min}`)

}

function minutos_horas(minutos) {
  const horas = Math.trunc(minutos/60)
  const min = minutos%60

  return `${horas}h${min}min`
}

main()


