import { question } from "readline-sync";

/*Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”. */

/* 
INPUT: DUAS NOTAS
  -> media >= 7 
  -> media final >= 5
OUTPUT:  

*/

function main() {
  print('-----------------------------------------------------------------\n')
  print('-----------> Calcular nota do aluno <-----------')
  const nome = input_string('Informe o seu nome: ')
  const nota_1 = input('Informe a primeira nota: ')
  const nota_2 = input('Informe a segunda nota: ')

  const media = calculo_media(nota_1, nota_2)
  const situacao = verificar_situacao(media, 'regular')
  
  print(`
  Olá ${nome}!
  Você está ${situacao}, com media de ${media}
  `)
  
  if (media < 7) {
    print('Aluno em prova final')
    const prova_final = input('Informe sua nota da prova final: ')
    const media_final = calculo_media (prova_final, media)
    const situacao = verificar_situacao(media, 'final')
    
    print(`Aluno ${situacao} com media de ${media_final}`)

  }

  print('\n-----------------------------------------------------------------')
}

function verificar_situacao(media, periodo) {
  
  if (periodo == 'regular'){
    if (media >= 7) {
      return `aprovado`
    } else {
      return `reprovado`
    }
  } else {
    if (media >= 5){
      return `aprovado por prova final`
    }else {
      return `reprovado por prova final`
    }
  }
}  
function calculo_media(nota_1, nota_2) {
  const media = (nota_1 + nota_2)/2

  return media
}

function input(cont) {
  const input = Number(question(cont))

  return input
}
function input_string(cont) {
  const input = String(question(cont))

  return input
}
function print(cont) {
  const print = console.log(cont)

  return print
}

main()