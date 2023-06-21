import { cabecalho_rifa, 
         inicializar_pontos, 
         mostrar_ganhadores, 
         mostrar_rifa_completa, 
         realizar_sorteio } from './rifa_features.js'
         
import { input_num, 
         input_num_positivo, 
         limpar_tela, 
         print } from '../../io_utils_.js'

function main() {
  
  const [pontos, vendidos, disponivel] = inicializar_pontos()
  const total = vendidos + disponivel

  let valor_ponto = 1.5
  let taxa_adm = 0.1
  let valor_arrecadado = 0
  let valor_liquido = 0
  let ganhadores = [] 
  let sorteio_realizado = false
  
  cabecalho_rifa(disponivel)
  let opcao = input_num('  >> ')

  while ( opcao !== 0){

    switch (opcao) {
      case 1:
        valor_ponto = input_num_positivo('  Informe o novo valor (R$): ')
        taxa_adm = input_num_positivo('  Informe a nova taxa (%): ') / 100
        
        print('\n  Valores atualizados com sucesso!')
        break;
        
      case 2:
        valor_arrecadado = valor_ponto * vendidos
        valor_liquido = valor_arrecadado * (1 - taxa_adm)
          
        print(`\n  Total de pontos........: ${total}`)  
        print(`  Pontos vendidos........: ${vendidos}`)  
        print(`  Pontos disponíveis.....: ${disponivel}\n`)  
    
        print(`  Preço do ponto.........: R$${valor_ponto.toFixed(2)}`)  
        print(`  Valor arrecadado.......: R$${valor_arrecadado.toFixed(2)}`)  
        print(`  Taxa de administração..: ${taxa_adm*100}%`)  
        print(`  Valor liquido..........: R$${valor_liquido.toFixed(2)}`)  
        
        print(`  Valor liquido..........: sorteio realizado?`)  
        break;
    
      case 3:
        
        mostrar_rifa_completa(pontos)

        break;
    
      case 4:

        if ( sorteio_realizado ){
          print('\n  O sorteio já foi realizado!!')

          mostrar_ganhadores(ganhadores)
        } else {

          const qtd_sorteios = input_num_positivo('\n  Quantidade de numeros a serem sorteados: ')
          ganhadores = realizar_sorteio(pontos, qtd_sorteios)
  
          mostrar_ganhadores(ganhadores)

          sorteio_realizado = true
        }

        break;
    
      default:
        print('Escolha uma opção válida!!')
        break;
    }
    
    limpar_tela()
    
    cabecalho_rifa(disponivel, valor_ponto, taxa_adm)
    opcao = input_num('  >> ')

  }


  // menu()

}

main()
