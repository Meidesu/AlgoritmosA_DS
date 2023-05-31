import { import_files } from "../my_strings_utils.js";

function main() {
  const lines = import_files('teste/bc_2286.txt')

  const partidas = lines

  // console.log(partidas)
  
  let index = 0
  let partida_atual = Number(partidas[index++])
  // console.log(partida_atual)
  let contador = 1
  
  // console.log(index)
  
  while ( partida_atual != 0 ){
    
    console.log(`Teste ${contador}`)  
    // console.log('rodada atual', partida_atual)  
    let jogador_1 = partidas[index++]
    // console.log(index)
    let jogador_2 = partidas[index++]
    // console.log(index)

    // console.log(jogador_1)
    // console.log(jogador_2)

    for( let rodada = 1; rodada <= partida_atual; rodada++  ){      
      const [aposta_j1, aposta_j2] = partidas[index++].split(' ').map(Number)

      if( (aposta_j1 + aposta_j2 ) % 2 == 0 ){
        console.log(jogador_1)
      } else {
        console.log(jogador_2)
      }

    }

    console.log()
    contador++
    partida_atual = Number(partidas[index++])
  }

}

main()