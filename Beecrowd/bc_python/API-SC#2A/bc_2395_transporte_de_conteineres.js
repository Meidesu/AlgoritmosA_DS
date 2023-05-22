import { import_files } from "../my_strings_utils.js"

function main() {
  const lines = import_files('teste/bc_2395.txt')

  const dimensoes_cont = lines[0].split(' ').map(Number)
  const dimensoes_navio = lines[1].split(' ').map(Number)

  const conteineres_max = calcular_quantidade_maxima(dimensoes_cont, dimensoes_navio)

  console.log(conteineres_max)

}

function calcular_quantidade_maxima(dimensoes_cont, dimensoes_navio){
  const [larg, comp, altura] = dimensoes_cont
  const [larg_navio, comp_navio, altura_navio] = dimensoes_navio

  const max_por_larg = Math.floor(larg_navio / larg)
  const max_por_comp = Math.floor(comp_navio / comp)
  const max_por_altura = Math.floor(altura_navio / altura)

  return max_por_altura * max_por_comp * max_por_larg
}


main()