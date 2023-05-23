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
export function input_num_maior_que(cont, minimo){
    let num = input_num(cont)

    while (num < minimo){
        print(`Por favor insira um número maior que ${minimo}!!`)
        num = input_num(cont)
    }

    return num
}
export function input_num_menor_que(cont, maximo){
    let num = input_num(cont)

    while (num > maximo){
        print(`Por favor insira um número maior que ${maximo}!!`)
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

export function input_str_tam_minimo(label, minimo=0){
    let txt = input(label)

    while ( txt.length < minimo ){
        print(`Tamanho inválido, digite um texto com no minimo ${minimo} de tamanho.`)

        txt = input(label)
    }

    return txt
}

export function input_str_tam_maximo(label, maximo=Infinity){
    let txt = input(label)

    while ( txt.length > maximo ){
        print(`Tamanho inválido, digite um texto com no maximo ${maximo} de tamanho.`)

        txt = input(label)
    }

    return txt
}

export function input_str_numa_faixa(label, inicio=0, final=Infinity){
    let txt = input(label)

    while (txt.length < inicio || txt.length > final){
        print(`Tamanho inválido, digite um texto com tamanho entre ${inicio} e ${final}`)
        txt = input(label)
    }

    return txt
}



