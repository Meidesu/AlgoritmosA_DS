import { import_files, my_map } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_3145.txt')

  const [qnt_anoes, distancia] = my_map(lines[0].split(' '), Number)

  const tempo_estimado = calcular_tempo_de_jornada(qnt_anoes, distancia)

  console.log(tempo_estimado.toFixed(2))

}

function calcular_tempo_de_jornada(qnt_anoes, distancia){
  return distancia / (qnt_anoes + 2)
}

main()