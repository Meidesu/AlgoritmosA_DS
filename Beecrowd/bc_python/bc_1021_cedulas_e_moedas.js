import { question } from "readline-sync"

function main(){
    
    // const valor = Number(lines[0])
    const valor = Number(question())
    
    distribuir_cedulas(valor)
    distribuir_moedas(valor)
}

function distribuir_cedulas(valor){
    const notas_100 = Math.floor(valor / 100)
    valor %= 100
    
    const notas_50 = Math.floor(valor / 50)
    valor %= 50
    
    const notas_20 = Math.floor(valor / 20)
    valor %= 20
    
    const notas_10 = Math.floor(valor / 10)
    valor %= 10
    
    const notas_5 = Math.floor(valor / 5)
    valor %= 5
    
    const notas_2 = Math.floor(valor / 2)

    console.log(`NOTAS:`)
    console.log(`${notas_100} nota(s) de R$ 100.00`)
    console.log(`${notas_50} nota(s) de R$ 50.00`)
    console.log(`${notas_20} nota(s) de R$ 20.00`)
    console.log(`${notas_10} nota(s) de R$ 10.00`)
    console.log(`${notas_05} nota(s) de R$ 5.00`)
    console.log(`${notas_02} nota(s) de R$ 2.00`)
}
/* function distribuir_cedulas(valor){
    const notas_100 = Math.floor(valor/100)
    const notas_50 = Math.floor(valor%100/50)
    const notas_20 = Math.floor(valor%100%50/20)
    const notas_10 = Math.floor(valor%100%50%20/10)
    const notas_05 = Math.floor(valor%100%50%20%10/5)
    const notas_02 = Math.floor(valor%100%50%20%10%5/2)

    console.log(`NOTAS:`)
    console.log(`${notas_100} nota(s) de R$ 100.00`)
    console.log(`${notas_50} nota(s) de R$ 50.00`)
    console.log(`${notas_20} nota(s) de R$ 20.00`)
    console.log(`${notas_10} nota(s) de R$ 10.00`)
    console.log(`${notas_05} nota(s) de R$ 5.00`)
    console.log(`${notas_02} nota(s) de R$ 2.00`)
} */

function distribuir_moedas(valor){
    let centavos = valor - Math.floor(valor / 1)

    const moedas1 = Math.floor(valor %100%50%20%10%5%2/1)
    centavos %= 1

    const moedas50 = Math.floor(centavos / 0.5)
    centavos %= 0.5

    const moedas25 = Math.floor(centavos / 0.25)
    centavos %= 0.25

    const moedas10 = Math.floor(centavos / 0.1)
    centavos %= 0.1

    const moedas5 = Math.floor(centavos / 0.05)
    centavos %= 0.05

    const moedas1cent = Math.floor(centavos / 0.01)

    console.log('MOEDAS:')
    console.log(`${moedas1} moeda(s) de R$ 1.00`)
    console.log(`${moedas50} moeda(s) de R$ 0.50`)
    console.log(`${moedas25} moeda(s) de R$ 0.25`)
    console.log(`${moedas10} moeda(s) de R$ 0.10`)
    console.log(`${moedas5} moeda(s) de R$ 0.05`)
    console.log(`${moedas1cent} moeda(s) de R$ 0.01`)
}

main()