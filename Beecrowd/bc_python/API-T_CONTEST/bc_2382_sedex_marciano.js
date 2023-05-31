import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2382.txt')

  const dimensoes = lines[0].split(' ').map(Number)

  // console.log('dimensões: ', dimensoes)

  if( dimensoes_validas(dimensoes) ){
    console.log('S');
  } else {
    console.log('N');
  }
  
  // console.log(dimensoes_validas(dimensoes))

}

function dimensoes_validas(dimensoes){
  const larg_caixa = dimensoes[0]
  const alt_caixa = dimensoes[1] 
  const profund_caixa = dimensoes[2] 
  const raio_esfera = dimensoes[3] 
  const diametro_esfera = raio_esfera * 2

/*   console.log(larg_caixa)
  console.log(larg_caixa <= diametro_esfera)
  console.log(alt_caixa)
  console.log(alt_caixa <= diametro_esfera)
  console.log(profund_caixa)
  console.log(profund_caixa <= diametro_esfera)
  console.log(raio_esfera)
  console.log(diametro_esfera) */
  
  const diagonal_base = raiz(2, larg_caixa**2 + profund_caixa**2)
  // console.log(diagonal_base)
  
  const diagonal_caixa = raiz(2, diagonal_base**2 + alt_caixa**2) 
  // console.log(diagonal_caixa)
  
  return diagonal_caixa < diametro_esfera

}

function raiz(raiz, valor) {
  return valor ** (1/raiz)
}


main()