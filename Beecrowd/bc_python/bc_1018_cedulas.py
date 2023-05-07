
def main():
    
    valor = input_int()

    distribuir_cedulas(valor)


def input_int():
    return int(input())

def input_float():
    return float(input())

def distribuir_cedulas(valor):
    notas_100 = valor//100
    notas_50 = valor%100//50
    notas_20 = valor%100%50//20
    notas_10 = valor%100%50%20//10
    notas_05 = valor%100%50%20%10//5
    notas_02 = valor%100%50%20%10%5//2
    notas_01 = valor%100%50%20%10%5%2//1

    print(f'{valor}')
    print(f'{notas_100} notas(s) de R$ 100,00')
    print(f'{notas_50} notas(s) de R$ 50,00')
    print(f'{notas_20} notas(s) de R$ 20,00')
    print(f'{notas_10} notas(s) de R$ 10,00')
    print(f'{notas_05} notas(s) de R$ 5,00')
    print(f'{notas_02} notas(s) de R$ 2,00')
    print(f'{notas_01} notas(s) de R$ 1,00')

main()