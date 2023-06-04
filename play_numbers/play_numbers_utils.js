import { input, print } from "../io_utils_.js";


export function obter_num_aleatorio(max, min) {
  return Math.floor(Math.random() * (max - min) + min)
}

export function input_opcao(cont){
  let num = input(cont)

  while (isNaN(Number(num)) || num === ''){
      print('Insira um número válido!')
      num = input(cont)
  }

  return Number(num)
}

export function new_array_padrao(tamanho, padrao=0) {
  let new_array = new Array(tamanho)

  for ( let i = 0; i < tamanho; i++ ){
    new_array[i] = padrao
    // print(new_array)
  }
  
  return new_array
}

export function my_push(item, lista) {
  const tamanho = len(lista) + 1
  let nova_lista = new_array_padrao(tamanho)

  for ( let i in nova_lista ){

    if ( i == len(lista)){
      nova_lista[i] = item

    } else {
      nova_lista[i] = lista[i]

    }
  }

  return nova_lista
}

export function my_map(lista, fun){
  let nova_lista = new_array_padrao(lista.length)

  for (let i in lista){
    nova_lista[i] = fun(lista[i])
  }

  return nova_lista
}

export function len(lista) {
  let contador = 0

  for( let intem in lista ){
    contador++
  }

  return contador
}

// print(my_map(['1','2','3'], to_Number))

export function ja_existe_um_vetor(tamanho) {
  return tamanho !== 0
}

export function copiar_vetor(lista) {
  let novo_lista = new_array_padrao(len(lista))

  for ( let i in lista ){
    novo_lista[i] = lista[i]
  }

  return lista
}

export function my_sort(lista, crescente=false){
  const tamanho = len(lista)
  // let lista_ordenada = lista
  let lista_ordenada = copiar_vetor(lista)
  
  if ( crescente ){
    for ( let volta = tamanho; volta >= 0; volta-- ){
      for(let i = tamanho; i >= 0; i--){
        if( lista[i] >= lista[1+i] ){
          const intermediario = lista_ordenada[i]
          lista_ordenada[i] = lista_ordenada[i+1]
  
          lista_ordenada[i+1] = intermediario
          // console.log(lista_ordenada)
        }
      }
    }  
  } else {
    for ( let volta = 0; volta < tamanho; volta++ ){
      for(let i = 0; i < tamanho; i++){
        if( lista[i] <= lista[1+i] ){
          const intermediario = lista_ordenada[i]
          lista_ordenada[i] = lista_ordenada[i+1]
  
          lista_ordenada[i+1] = intermediario
          // console.log(lista_ordenada)
        }
      }
    }
  }

  return lista_ordenada
}

export function pertence_a(candidato, lista){
  for ( let item of lista ){
    if( candidato == item ){
      return true
    }
  }

  return false
}

export function indice_de(candidato, lista, indices){
  for ( let i in lista ){
    if( candidato == lista[i] && !pertence_a(i, indices)){
      return Number(i)
    }
  }

  return undefined
}

export function input_num_numa_faixa(cont, ){
  let num = input_num(cont)

  while (num > maximo){
      print(`Por favor insira um número menor que ${maximo}!!`)
      num = input_num(cont)
  }

  return num
}

export function eh_crescente(vetor){
  let crescente = true
  for ( let i = 0; i < (len(vetor) - 1); i++ ){
    const item_atual = vetor[i]
    const proximo_item = vetor[i+1]

    if ( item_atual >= proximo_item ){
      crescente = false
    }
  }
  return crescente
}

export function my_slice(lista, inicio, fim) {

  let nova_lista = []

  for ( let i in lista ){
    if ( i >= inicio && i < fim ){
      // print(lista[i])
      nova_lista = my_push(lista[i], nova_lista)
    }
  }

  return nova_lista
}

export function valor_medio_vetor(vetor) {
  let somatorio = 0

  for ( let item of vetor ){
    somatorio += item
  }

  return (somatorio/len(vetor))
}

export function media_positivos_pares(vetor) {
  let somatorio = 0

  for (let item of vetor ){
    if ( item % 2 == 0 && item > 0){
      somatorio += item
    }
  }

  return somatorio
}

export function produto_dos_negativos(vetor) {
  let produto = 1

  for (let item of vetor ){
    if ( item % 2 == 0 && item < 0){
      produto *= (item / 2)
    }
  }

  return produto
}

export function menu_ordenacao() {
  print(
    `
  Ordenar:
  1 - Todos;
  2 - Apenas os pares;
  3 - Apenas os impares;
  4 - Apenas os positivos;
  5 - Apenas os negativos;
  6 - Apenas os multiplos de N;
    `)
}

export function my_filter(vetor, funcao){
  let filtrados = []
  
  for (let item of vetor){
    if (funcao(item)){
      filtrados = my_push(item, filtrados)
    }
  }

  return filtrados 
}

export function bye(){
  const mensagens = [
    "Até breve! Sentirei sua falta.",
    "A despedida é sempre difícil ._.", 
    "Tchau coração!",
    "Tchau coração!",
    "Tchau coração!",
    "Tchau coração!",
    "Tchau coração!",
    "Tchau coração!",
    "Até breve!"]

  const indice = obter_num_aleatorio(len(mensagens), 0) 

  print(`\n${mensagens[indice]}`)

}