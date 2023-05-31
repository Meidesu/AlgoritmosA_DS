import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2322.txt')

  const qtd_pecas = Number(lines[0])

  const pecas_completas = lista_de_pecas(qtd_pecas)
  const pecas_atual = lines[1].split(' ').map(Number)

  const peca_faltando = encontrar_peca_faltando(pecas_atual, pecas_completas)

  // console.log(pecas_completas)
  // console.log(pecas_atual)
  console.log(`${peca_faltando}`)

}

function encontrar_peca_faltando(pecas_atual, pecas_completas){

  for( let peca of pecas_completas ){
    if ( !(pertence_a(peca, pecas_atual)) ){
      return peca
    }
  }
}

function lista_de_pecas(qtd_pecas) {
  let pecas_completas = new Array(qtd_pecas)
  let id_peca = 1

  for( let peca = 0; peca < qtd_pecas; peca++){
    pecas_completas[peca] = id_peca
    id_peca++
  }
  
  return pecas_completas
}

function pertence_a(candidato, lista){
  for ( let item of lista ){
    if( candidato == item ){
      return true
    }
  }

  return false
}

main()

// console.log(pertence_a(6, [1,2,3,4,5]))