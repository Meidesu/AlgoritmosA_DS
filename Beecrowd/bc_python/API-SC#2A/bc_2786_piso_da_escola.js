import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2786.txt')

  const largura = Number(lines[0])
  const comprimento = Number(lines[1])

  const [tipo_1, tipo_2] = calcular_lajotas_necessarias(largura, comprimento)

  console.log(tipo_1)
  console.log(tipo_2)
  
}

function calcular_lajotas_necessarias(largura, comprimento){


  const tipo_1 = (largura * comprimento) + ((largura - 1) * (comprimento - 1))
  const tipo_2 = (largura - 1) * 2 + (comprimento - 1) * 2

  return [tipo_1, tipo_2]
}

main()