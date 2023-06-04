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
        print(`Por favor insira um número menor que ${maximo}!!`)
        num = input_num(cont)
    }

    return num
}

export function input(cont){
    return question(cont)
}

export function input_secreto(cont='', char_troca='*'){
    return question(cont, {hideEchoBack: true, mask: char_troca});
}

export function print(cont){
    return console.log(cont)
}

export function cabecalho(txt='###'){
    console.clear()
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

export function input_binario(label='Digite um numero binario: ') {
    let num = input_str_tam_minimo(label, 1)
  
    for ( let alg of num ){
      if (alg !== '0' && alg !== '1' ){
        print('Numero inválido!!')
        return input_binario(label)
      }
    }
  
    return num
  }



// export function input_data( cont='Digite uma data (DD/MM/AAAA): ') {
//     let data = input(cont).split('/')

//     print(data)
//     let [ dia, mes, ano ] = data

//     while ( dia_invalido(dia) || mes_invalido(mes) || ano_invalido(ano)){
//         print('Data invalida, favor digite no modelo DD/MM/AAAA.')
//         [dia, mes, ano] = input(cont).split('/')

//     //    = data
//     //     print('dia',dia)
//     //     print(mes)
//     //     print(ano)
//     }

//     return data
// } 

// function dia_invalido(dia) {

//     return dia < 1 || dia > 31 || dia == undefined
// }
// function mes_invalido(mes) {
//     return mes < 1 || mes > 12 || mes == undefined
// }
// function ano_invalido(ano) {
//     return ano < 1 || ano == undefined
// }


export function limpar_tela() {
    input_secreto('\n<Enter>', ' ')
    console.clear()
  }