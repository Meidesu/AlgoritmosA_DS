import { input_num_positivo, 
         input, 
         input_num, 
         print } from "../io_utils_.js";
         
import { new_array_padrao, 
         my_map, len, 
         obter_num_aleatorio, 
         copiar_vetor, 
         my_sort, 
         pertence_a,
         my_push,
         indice_de,
         eh_crescente,
         my_slice,
         media_positivos_pares,
         produto_dos_negativos,
         my_filter} from "./play_numbers_utils.js";

export function gerar_vetor_padrao() {
  const tamanho = input_num_positivo('\nInforme o tamanho do vetor: ')
  const padrao = input_num('Insira um valor padrao: ')

  const vetor = new_array_padrao(tamanho, padrao)

  return my_map(vetor, Number) 
}

export function gerar_vetor_manual(){
  const tamanho = input_num_positivo('\nInforme o tamanho do vetor: ')
  let lista = new_array_padrao(tamanho)

  for ( let i in lista ){
    lista[i] = input_num(`Valor de [${i}]: `)
  }  

  return my_map(lista, Number)
}

export function gerar_vetor_aleatorio(){
  const tamanho = input_num_positivo('\nInforme o tamanho do vetor: ')
  const max = input_num('Valor maximo: ')
  const min = input_num('Valor minimo: ')

  let lista = new_array_padrao(tamanho)
  
  for ( let i in lista ){
     lista[i] = obter_num_aleatorio(max, min)
  }  

  return lista
}

export function elevar_elementos_a_n(expoente, vetor){
  const novo_vetor = my_map(vetor, x => x ** expoente)

  return novo_vetor
}

export function contar_ocorrencias(lista) {
  let zeros = 0
  let positivos = 0
  let negativos = 0

  for ( let item of lista ){
    if ( item === 0){
      zeros++
    } else if ( item > 0 ){
      positivos++
    } else {
      negativos++
    }
  }

  return [positivos, negativos, zeros]
}

export function somatorios(lista) {
  let sum_todos = 0
  let sum_positivos = 0
  let sum_negativos = 0

  for ( let item of lista ){
    sum_todos += item

    if ( item > 0 ){
      sum_positivos += item
    } else {
      sum_negativos += item
    }
  }

  return [sum_todos, sum_positivos, sum_negativos]
}

export function medias(lista) {
  
  const somatorio = somatorios(lista)
  const [total_positivos, total_negativos, total_zeros] = contar_ocorrencias(lista)


  let media_todos = somatorio[0] / len(lista)
  let media_positivos = 0
  let media_negativos = 0

  if ( total_positivos !== 0 ){
    media_positivos = somatorio[1] / total_positivos
  } 

  if ( total_negativos !== 0 ){
    media_negativos = somatorio[2] / total_negativos
  } 
  
  return [media_todos, media_positivos, media_negativos]
}

export function maior_e_menor(lista) {

  my_sort(lista)

  const final = len(lista) - 1

  return [lista[0], lista[final]]
}

export function sortear_dois_valores(lista) {
  
  const [positivos, negativos, zeros] = contar_ocorrencias(lista)

  let indice = obter_num_aleatorio(len(lista), 0)
  let positivo 
  let negativo 
  
  if ( positivos !== 0 ){
    positivo = lista[indice]
    while ( positivo <= 0 ){
      indice = obter_num_aleatorio(len(lista), 0)
  
      positivo = lista[indice]  
    }
  } else {
    positivo = `Não existem positivos na lista.`
  }

  if ( negativos !== 0 ){
    negativo = lista[indice]
    while ( negativo >= 0 ){
      indice = obter_num_aleatorio(len(lista), 0)
  
      negativo = lista[indice]  
    }
  } else {
    negativo = `Não existem negativos na lista.`
  } 

  return [positivo, negativo]
}

export function gerar_grupos(lista, qnt, tamanho) {
  let grupos = new_array_padrao(qnt)

  let indice 

  for ( let j in grupos ){
    let vetor = []
    
    for ( let i = 0; i < tamanho; i++ ){
      indice = obter_num_aleatorio(len(lista), 0)
      
      while (pertence_a(lista[indice], vetor)) {        
        indice = obter_num_aleatorio(len(lista), 0)
        
      }

      vetor = my_push(lista[indice], vetor)
    }

    grupos[j] = vetor
  }
  
  return grupos
}

export function eh_subvetor_de(subvetor, vetor){
  let indices = []

  for ( let item of subvetor ){
    const indice_item_no_vetor = indice_de(item, vetor, indices)
    // print(`Indice atual: ${indice_item_no_vetor}`)

    if ( indice_item_no_vetor == undefined ){

      return false
    } else {
      // print('Não foi usado ainda')
      indices = my_push(indice_item_no_vetor, indices)
  
    }
    // print(indices)
  }

  return eh_crescente(indices)
}

export function top_elementos(top, lista, maiores=true){
  if ( maiores ){
    const lista_ordenada = my_sort(lista)
    
    return my_slice(lista_ordenada, 0, top)
  } else {
    const lista_ordenada = my_sort(lista, true)

    return my_slice(lista_ordenada, 0, top)
  }
}

export function maiores_e_menore_que_media(vetor, valor_medio){
  let maiores = []
  let menores = []

  for ( let item of vetor ){
    if ( item > valor_medio ){
      maiores = my_push(item, maiores)

    } else if ( item < valor_medio ){
      menores = my_push(item, menores)

    }
  }

  return [maiores, menores]
}

export function calculo_complexo_pedido_pelo_rogerio_na_17(vetor){
  const media_positivos = media_positivos_pares(vetor)
  const protudo_negativos = produto_dos_negativos(vetor)
  
  return (media_positivos + protudo_negativos)
}

export function ordenar_lista(ord_opcao, vetor, crescente){
  let lista_ordenada

  switch (ord_opcao) {
    case 1:
      lista_ordenada = my_sort(vetor, crescente)
      
      break;

    case 2:
      const pares = my_filter(vetor, i => i % 2 === 0)
      
      lista_ordenada = my_sort(pares, crescente)
        
      break;

    case 3:
      const impares = my_filter(vetor, i => i % 2 !== 0)
      
      lista_ordenada = my_sort(impares, crescente)
      break;

    case 4:
      const positivos = my_filter(vetor, i => i > 0)
      
      lista_ordenada = my_sort(positivos, crescente)  
      break;

    case 5:
      const negativos = my_filter(vetor, i => i < 0)
      
      lista_ordenada = my_sort(negativos, crescente)   
      break;

    case 6:
      const n = input_num_positivo('Informe o valor de N: ')
      const multiplos_de_n = my_filter(vetor, i => i % n === 0)
      
      lista_ordenada = my_sort(multiplos_de_n, crescente)   
      break;
  
    default:
      print('Opção inválida!')
      
      break;
  }

  return lista_ordenada
}

export function eliminar_multiplos_de(n, m, vetor){
  const nova_lista = my_filter(vetor, i => i % m !== 0 || i % n !== 0 )

  return nova_lista
}

export function filtrar_multiplos_de(n, vetor){
  return my_filter(vetor, i => i % n === 0)
}