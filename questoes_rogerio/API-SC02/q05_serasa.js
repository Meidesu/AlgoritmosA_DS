import { cabecalho, input_num_numa_faixa, print } from "../../io_utils_.js";

// Feito em 35min 21s

function main(){
  cabecalho()

  const criterio_a = input_num_numa_faixa('Criterio a: ', 0, 100)
  const criterio_b = input_num_numa_faixa('Criterio b: ', 0, 100)
  const criterio_c = input_num_numa_faixa('Criterio c: ', 0, 100)

  const score_1 = calcular_score_1(criterio_a, criterio_b, criterio_c)
  const score_2 = calcular_score_2(criterio_a, criterio_b, criterio_c)

  const faixa_1 = calcular_faixa_score_1(score_1)
  const faixa_2 = calcular_faixa_score_2(score_2)

  print(`
  * Score 1.0: ${score_1}
  * Score 2.0: ${score_2}

  * Faixa score antigo: ${faixa_1}
  * Faixa score novo: ${faixa_2}
  `)


}//main

function calcular_faixa_score_1(score){
  if (score <= 400){
    return 'Baixo'
  } else if (score <= 600){
    return 'Regular'
  } else if (score <= 800){
    return 'Bom'
  } else {
    return 'Muito bom'
  }
}

function calcular_faixa_score_2(score){
  if (score <= 300){
    return 'Baixo'
  } else if (score <= 500){
    return 'Regular'
  } else if (score <= 700){
    return 'Bom'
  } else {
    return 'Muito bom'
  }
}

function calcular_score_1(criterio_a, criterio_b, criterio_c){
  const score_a = (criterio_a/100) * 260
  const score_b = (criterio_b/100) * 570
  const score_c = (criterio_c/100) * 170

  return score_a + score_b + score_c
}

function calcular_score_2(criterio_a, criterio_b, criterio_c){
  const score_a = (criterio_a/100) * 620
  const score_b = (criterio_b/100) * 190
  const score_c = (criterio_c/100) * 190

  return score_a + score_b + score_c
}


main()