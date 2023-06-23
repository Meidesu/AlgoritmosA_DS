import chalk from 'chalk'
import { input, print } from '../io_utils_.js';
import { atualizar_montadora, 
         criar_nova_montadora, 
         inicializar_montadoras, 
         listar_itens_montadora, 
         remover_montadora, 
         salvar_dados,} from "./patrocars_features.js";
import { menu } from './patrocars_menu.js'
import { limpar_tela } from "./patrocars_utils.js";


function main() {
  console.clear()

  // print('‖⁜※▣▦▬▨▩◊◦◜◝◞◟')

  //Variaveis "globais"
  let montadoras = inicializar_montadoras()

  let opcao = menu(opcoes_menu)

  while (opcao !== 0) {

    switch (opcao) {
      case 1:
        criar_nova_montadora(montadoras)

        break
      case 2:
        listar_itens_montadora(montadoras)


        
        break
      case 3:
        atualizar_montadora(montadoras)
        
        salvar_dados(montadoras)
        break
      case 4:
        remover_montadora(montadoras)

        salvar_dados(montadoras)
        break

      default:
        print(` ${chalk.redBright('Escolha uma opção válida!!')}`)
        break
    }

    limpar_tela()

    opcao = menu(opcoes_menu)

  }
  // print(montadoras)

  // input()
  salvar_dados(montadoras)
}

const opcoes_menu = ` 

\t  ${chalk.bgWhite.black(' Patro Cars ')}

  Possuimos n montadoras até o momento

  1 - Adicionar nova montadora;
  2 - Listar montadoras;
  3 - Atualizar montadora;
  4 - Remover montadora;
  0 - sair.
  `

main()

//(id: ULID, nome: string, pais: string, ano_fundacao: int)
