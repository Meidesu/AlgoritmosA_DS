import chalk from 'chalk'
import { print, input_num} from '../io_utils_.js'
import { fundo_branco, limpar_tela, texto_amarelo, texto_vermelho } from './patrocars_utils.js'
import { atualizar_montadora, 
  criar_nova_montadora, 
  listar_itens_montadora, 
  remover_montadora, 
  } from "./patrocars_features.js";

const opcoes_menu = 
`${fundo_branco('\n\t\t Patro Cars ')}

  1: Adicionar nova montadora;
  2: Listar montadoras;
  3: Atualizar montadora;
  4: Remover montadora;
  ${texto_amarelo('0: Voltar.')}
  `

export function menu(opcoes) {
  console.clear()

  print(opcoes)

  return input_num('  >> ')
}

export function menu_montadoras(montadoras){
  console.clear()

  let opcao = menu(opcoes_menu)

  while (opcao != 0) {

    switch (opcao) {
      case 1:
        criar_nova_montadora(montadoras)

        break
      case 2:
        listar_itens_montadora(montadoras)

        break
      case 3:
        atualizar_montadora(montadoras)
        
        break
      case 4:
        remover_montadora(montadoras)

        break

      default:
        print(` ${texto_vermelho('Escolha uma opção válida!!')}`)
        break
    }

    // limpar_tela()

    opcao = menu(opcoes_menu)

  }
  
}