import { print } from '../io_utils_.js';
import { inicializar_montadoras, 
         salvar_dados,
         } from "./patrocars_features.js";
import { menu, 
         menu_montadoras } from './patrocars_menu.js'
import { fundo_branco, 
         limpar_tela, 
         texto_amarelo, 
         texto_vermelho } from "./patrocars_utils.js";


function main() {
  console.clear()

  let montadoras = inicializar_montadoras()

  let opcao = menu(opcoes_main_menu)

  while (opcao !== 0) {
    switch (opcao) {
      case 1:
        menu_montadoras(montadoras)  

        break;
      case 2:
        // print('Coming soon')
        break;
      case 3:
        // print('Coming soon')
          
        break;
    
      default:
        print(` ${texto_vermelho('Escolha uma opção válida!!')}`)

        break;
    }
    
    // limpar_tela()
  
    opcao = menu(opcoes_main_menu)

  }

  salvar_dados(montadoras)
}

const opcoes_main_menu = 
`${fundo_branco('\n\t\t Patro Cars ')}

  1: Montadoras;
  2: Modelos;
  3: Veiculos;
  ${texto_amarelo('0: Sair.')}
`

main()

//(id: ULID, nome: string, pais: string, ano_fundacao: int)
