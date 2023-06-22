import { import_files } from '../../my_strings_utils.js'
import { print } from '../../io_utils_.js'

export function cabecalho_rifa(disponivel) {
  console.clear()
  print(`

  Bem vindo ao sistema de rifa oficial da Patro Corp.!!

  Temos ${disponivel} pontos disponíveis até o momento.

  Diga o que deseja:
  1 - Definir valores de referencia;
  2 - Verificar valores de referencia e status;
  3 - Visualizar pontos da rifa; 
  4 - Realizar sorteio;
  5 - Resetar;
  0 - sair
  `)
}

export function inicializar_pontos() {
  const linhas = import_files('pontos.txt')
  let vendidos = 0
  let disponivel = 0
  const pontos = []

  // print(linhas)

  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i]

    if (!linha){
      disponivel++
    }

    const num = i + 1
    const nome = linha
    pontos.push({ num, nome })
    // print(pontos)
  }

  vendidos = linhas.length - disponivel

  return [pontos, vendidos, disponivel]
}

export function mostrar_rifa_completa(pontos, premio){
  const num_disponiveis = []

  console.clear()

  print(`\n------------------ Lista de participantes ------------------`)
  print(`\n  Prêmio atual: R$${premio}\n`)

  for ( let linha of pontos ){
    const num = linha['num']
    const nome = linha['nome']

    if ( nome === '' ){
      num_disponiveis.push(num)
    }

    print(`  ${num}: ${nome}`)
  }

  print(`\n  Posições disponíveis: [${num_disponiveis}]`)


}

export function realizar_sorteio(pontos ,qtd_sorteios){
  let contador = 0
  const ganhadores = []
  const sorteados = []

  while ( contador < qtd_sorteios ) {
    const num_sorteado = gerar_aleatorio(pontos.length + 1, 1)

    if ( !pertence_a(num_sorteado, sorteados) ){

      for ( let linha of pontos ){
        const num = linha['num']
        const nome = linha['nome']
  
        if ( num === num_sorteado && nome !== ''){
            ganhadores.push(linha)
            contador++
            
            sorteados.push(num_sorteado)
        }
      }
    }
  } 

  return ganhadores
}

function gerar_aleatorio(max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function mostrar_ganhadores(ganhadores){
  
  if ( ganhadores.length === 1 ){
    // print('\n  Ganhador da vez: ')
    // print( `  ${ganhadores[0]['num']}: ${ganhadores[0]['nome']}` )

    print(`
  Ganhador da vez:

  ${ganhadores[0]['num']}: ${ganhadores[0]['nome']}  

  Parabéns ao ganhador!!
    `)
    
  } else {
    print('\n  Lista de ganhadores: \n')

    for ( let ganhador of ganhadores ){
      print( `  ${ganhador['num']}: ${ganhador['nome']}` )
    }

    print('\n  Parabens aos ganhadores!!')
  }
}

function pertence_a(candidato, lista){
  for ( let item of lista ){
    if( candidato == item ){
      return true
    }
  }

  return false
}