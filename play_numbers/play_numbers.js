import {  print, limpar_tela, 
          input_num, input_num_positivo, 
          input_num_menor_que } from "../io_utils_.js"

import { gerar_vetor_padrao, 
         gerar_vetor_aleatorio,
         gerar_vetor_manual, 
         elevar_elementos_a_n, 
         contar_ocorrencias, 
         somatorios, medias, 
         maior_e_menor,
         sortear_dois_valores, 
         gerar_grupos, 
         eh_subvetor_de, 
         top_elementos,
         maiores_e_menore_que_media,
         calculo_complexo_pedido_pelo_rogerio_na_17, 
         ordenar_lista,
         eliminar_multiplos_de,
         filtrar_multiplos_de} from "./play_numbers_features.js"

import { bye, input_opcao, 
         ja_existe_um_vetor, 
         len, menu_ordenacao, 
         valor_medio_vetor } from "./play_numbers_utils.js"


function main() {
  console.clear()

  menu()
  let opcao = input_opcao(' >> ')

  let vetor

  while (opcao != 0) {
    switch (opcao) {
      case 1:
        if ( ja_existe_um_vetor(len(vetor)) ){
          print('\nEste vetor irá sobrescrever o anterior!\n')
        } 

        vetor = gerar_vetor_padrao()
        
        break;
    
      case 2:
        if ( ja_existe_um_vetor(len(vetor)) ){
          print('\nEste vetor irá sobrescrever o anterior!')
        } 

        vetor = gerar_vetor_manual()

        break;

      case 3:
        if ( ja_existe_um_vetor(len(vetor))){
          print('\nEste vetor irá sobrescrever o anterior!')
        } 

        vetor = gerar_vetor_aleatorio()
        
        break;
        
      case 4:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          print(`Vetor atual: [${vetor}]`)

        }

        break;

      case 5:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const expoente = input_num('Insira o expoente (n): ')
          vetor = elevar_elementos_a_n(expoente, vetor)

        }

        break;

      case 6:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const [positivos, negativos, zeros] =  contar_ocorrencias(vetor)
  
          print(`Total positivos: ${positivos}`)
          print(`Total negativos: ${negativos}`)
          print(`Total zeros: ${zeros}`)
          
        }

        break;

      case 7:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const [sum_todos, sum_positivos, sum_negativos] =  somatorios(vetor)
          
          print(`Somatório de todos: ${sum_todos}`)
          print(`Somatório de positivos: ${sum_positivos}`)
          print(`Somatório de negativos: ${sum_negativos}`)
          
        }
        break;

      case 8:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const [media_todos, media_positivos, media_negativos] =  medias(vetor)
          
          print(`Média de todos: ${media_todos.toFixed(3)}`)
          print(`Média de positivos: ${media_positivos.toFixed(3)}`)
          print(`Média de negativos: ${media_negativos.toFixed(3)}`)
          
        }


        break;
    
      case 9:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const [maior, menor] =  maior_e_menor(vetor)
          
          print(`Maior número: ${maior}`)
          print(`Menor número: ${menor}`)
          
        }

        break;

      case 10:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const [aleatorio_positivo, aleatorio_negativo] =  sortear_dois_valores(vetor)
          
          print(`Aleatório positivo: ${aleatorio_positivo}`)
          print(`Aleatório negativo: ${aleatorio_negativo}`)
          
        }

        break;

      case 11:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const qnt_grupos = input_num_positivo('Quantidade de grupos: ')
          const tamanho = input_num_menor_que('Tamanho de cada grupo: ', len(vetor))

          const grupos =  gerar_grupos(vetor, qnt_grupos, tamanho)
          let contador = 1

          for ( let i in grupos ){
            print(`Grupo ${contador}: ${grupos[i]}`)
            contador++
          }

        }

        break;

      case 12:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const subvetor = gerar_vetor_manual()
  
          if (eh_subvetor_de(subvetor, vetor)) {
            print(`\nO vetor indicado é um subvetor de [${vetor}]`)
            
          } else {
            print(`\nO vetor indicado não é um subvetor de [${vetor}]`)
  
          }
        }

        break;

      case 13:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')

        } else {
          const top = input_num_positivo('\nInforme o valor de N: ') 

          const top_maiores = top_elementos(top, vetor)

          print(`\nTop ${top} maiores elementos: [${top_maiores}]`)
        }
        
        break;
        
      case 14:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          const top = input_num_positivo('Informe o valor de N: ') 
          
          const top_menores = top_elementos(top, vetor, false)
          
          print(`Top ${top} menores elementos: [${top_menores}]`)
        }

        break;

      case 15:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          const valor_medio = valor_medio_vetor(vetor) 
          
          const [maiores, menores] = maiores_e_menore_que_media(vetor, valor_medio)
          
          print(`\nValor médio: ${valor_medio.toFixed(2)}`)
          print(`Lista de maiores que a media: ${maiores}`)
          print(`Lista de menores que a media: ${menores}`)
        }

        break;

      case 16:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          const n = input_num_positivo('Insira o valor de N: ') 
          
          const multiplos_de_n = filtrar_multiplos_de(n, vetor)
          
          print(`\nMultiplos de N: [${multiplos_de_n}]`)
        }

        break;

      case 17:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          const resuldado = calculo_complexo_pedido_pelo_rogerio_na_17(vetor)

          print(`Resultado: ${resuldado}`)
        }  
        break;

      case 18:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          menu_ordenacao()
          let ord_opcao = input_num_positivo(' >> ')

          const lista_ordenada = ordenar_lista(ord_opcao, vetor, true)

          print(`Lista ordenada: [${lista_ordenada}]`)

        }  
        break;

      case 19:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          menu_ordenacao()
          let ord_opcao = input_num_positivo(' >> ')

          const lista_ordenada = ordenar_lista(ord_opcao, vetor, false)

          print(`\nLista ordenada: [${lista_ordenada}]`)

        }  
        break;

      case 20:
        if ( !ja_existe_um_vetor(len(vetor)) ){
          print('\nNenhum vetor definido!\n')
          
        } else {
          const n = input_num_positivo('Insira o valor de N: ')
          const m = input_num_positivo('Insira o valor de M: ')

          vetor = eliminar_multiplos_de(n, m, vetor)

          print(`\nLista atualizada: [${vetor}]`)
        }  
        break;

      default:
        print('\nEscolha uma opção válida!')

        break;
    }

    limpar_tela()
    
    menu()
    opcao = input_opcao(' >> ')

  }
  bye()
}

function menu() {

  print(
  `
------------------------- Play Numbers -------------------------------

  1 - Gerar vetor;                                                
  2 - Preecher vetor;
  3 - Preecher vetor aleatóriamente;
  4 - Mostrar vetor;
  5 - Elevar todos os elemento a N;
  6 - Contar positivos, negativos e zeros;
  7 - Somar todos, somar positivos e somar negativos;
  8 - Média de todos, média de positivos e média de negativos;
  9 - Exibir maior e menor número;
 10 - Sortear um número positivo e um negativo;
 11 - Gerar N grupos de T tamanhos;
 12 - Verficar presença de um novo vetor;
 13 - Top N maiores números;
 14 - Top N menores números;
 15 - Listar valor médio e números maiores e Menores que a Média;
 16 - Listar multiplos de N;
 17 - Somatório da Média dos números positivos múltiplos de dois com o produto 
      acumulado dos números negativos pares reduzidos à metade; (•_•)?
 18 - Ordenar os números em ordem crescente;
 19 - Ordenar os números em ordem decrescente;
 20 - Eliminar números múltiplos de N e M;
 
  `)
}

main()