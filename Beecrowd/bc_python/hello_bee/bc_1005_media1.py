def main():
    primeira_nota = input_float('Primeira nota: ')
    peso_1 = 3.5

    segunda_nota = input_float('Segunda nota: ')
    peso_2 = 7.5

    media = media_ponderada_dois_termos(primeira_nota, peso_1, segunda_nota, peso_2)

    print(f'MEDIA = {media:.5f}')

def input_float(label):
    return float(input(label))

def media_ponderada_dois_termos(n1, p1, n2, p2):
    return ( n1 * p1 + n2 * p2 ) / (p1 + p2)

main()
