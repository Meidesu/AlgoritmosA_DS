import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2328.txt')

  const num_divisoes = Number(lines[0])
  const pedacos = lines[1].split(' ').map(Number)
  let pedacos_totais = 0

  for( let divisao = 0; divisao < num_divisoes; divisao++ ){
    pedacos_totais += pedacos[divisao] - 1
  }

  console.log(`${pedacos_totais}`)

}

main()