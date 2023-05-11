def main():
    primeira_nota = input_float('Primeira nota: ')
    peso_1 = 2

    segunda_nota = input_float('Segunda nota: ')
    peso_2 = 3

    terceira_nota = input_float('Terceira nota: ')
    peso_3 = 5

    media = media_ponderada_tres_termos(primeira_nota, peso_1, segunda_nota, peso_2, terceira_nota, peso_3)

    print(f'MEDIA = {media:.1f}')

def input_float(label):
    return float(input(label))

def media_ponderada_tres_termos(n1, p1, n2, p2, n3, p3):
    return ( n1 * p1 + n2 * p2 + n3 * p3 ) / (p1 + p2 + p3)

main()