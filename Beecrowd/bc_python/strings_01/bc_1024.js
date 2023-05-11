import {readFileSync} from 'fs'

function main() {
  
  const dados = import_files('teste/bc_1024.txt')
  const qnt_linha = Number(dados[0])
  
  const passo_1 = primeira_passada(dados, qnt_linha)

  const passo_2 = segunda_passada(passo_1)
  
  const passo_3 = terceira_passada(passo_2)

  console.log(passo_3)

}

function primeira_passada(dados, qnt_linha){

  let nova_lista = []

  for(let i = 1; i <= qnt_linha; i++){
    nova_lista.push(pular_tres_posicoes(dados[i]))
  }

  return nova_lista
}

function segunda_passada(linhas){
  let nova_lista = []

  for(let linha of linhas ){
    nova_lista.push(inverter_linha(linha))
  }

  return nova_lista
}

function terceira_passada(linhas) {
  let nova_lista = []

  for(let linha of linhas ){
    nova_lista.push(voltar_uma_posicao(linha))
  }

  return nova_lista.join('\n')
}

function voltar_uma_posicao(linha){
  const len_linha = linha.length
  const len_metade = Math.trunc(len_linha / 2)
  let nova_linha = []

  for(let i = 0 ; i < len_linha; i++ ){
    
    if ( i < len_metade){
      nova_linha += linha[i]
      
    }else{
      nova_linha += chr(ord(linha[i]) - 1) 

    }

  }

  return nova_linha
}

function inverter_linha(linha){
  let nova_linha = ''
  const len_linha = linha.length

  for(let i = len_linha-1; i >= 0; i--){
    nova_linha += linha[i]

  }

  return nova_linha
}

function pular_tres_posicoes(linha){
  let nova_linha = ''

  for (let caractere of linha){

    if ( eh_maiuscula(caractere) || eh_minuscula(caractere)){
      nova_linha += chr(ord(caractere) + 3)
    }else{
      nova_linha += caractere
    }

  }

  return nova_linha
}


function eh_maiuscula(caractere) {
  const cod =  ord(caractere)
 
  return cod >= 65 && cod <= 90
}

function eh_minuscula(caractere) {
  const cod =  ord(caractere)
 
  return cod >= 97 && cod <= 122
}

function ord(caractere) {
  return caractere.charCodeAt()
}

function chr(codigo) {
  return String.fromCharCode(codigo)
}

function import_files(path) {
  const dados = readFileSync(path, 'utf-8')
 
  return dados.split('\r\n') 
}


main()


// .join('\n')