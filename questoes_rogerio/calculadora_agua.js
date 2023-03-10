  import { question } from "readline-sync";

  function main() {
    print('-----------------------------------------------')

    const peso = input('  Informe o seu peso: ')

    const moderado = agua_moderado(peso)
    const intenso = agua_intenso(peso)

    print(
  `  Quantidade recomendada de agua:   
      * Atividade fisica moderada: ${moderado.toFixed(2)}L
      * Atividade fisica intensa: ${intenso.toFixed(2)}L`)
    print('-----------------------------------------------')
  }

  function agua_moderado(peso) {
    const agua_moderado = (peso * 35) / 1000
    
    return  agua_moderado
    
  }

  function agua_intenso(peso) {
    const agua_intenso = (peso * 45) / 1000

    return agua_intenso
    
  }

  function print(cont) {
    const print = console.log(cont)
    return print
  }

  function input(cont) {
    const input = Number(question(cont))
    return input
  }

  main()