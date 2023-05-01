import { question } from "readline-sync";

export function input_num(cont='Insira um numero'){
    let num = input(cont)

    while (isNaN(Number(num)) || num === ''){
        print('Insira um número válido!')
        num = input(cont)
    }

    return Number(num)
}

export function input_num_positivo(cont='Insira um numero positivo: '){
    let num = input_num(cont)

    while (num <= 0 ){
        print('Por favor insira um número positivo!')
        num = input_num(cont)
    }

    return num
}
export function input_num_numa_faixa(cont, inicio, final){
    let num = input_num(cont)

    while (num < inicio || num > final){
        print(`Por favor insira um número entre ${inicio} e ${final}!!`)
        num = input_num(cont)
    }

    return num
}

export function input(cont){
    return question(cont)
}

export function print(cont){
    return console.log(cont)
}

export function cabecalho(txt='###'){
    print('-----------------------------------------------------------------\n')
    print(`############### ${txt} ###############\n`)
  }

export function rodape() {
  print('\n-----------------------------------------------------------------')
}




