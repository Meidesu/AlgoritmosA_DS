
def main():
    distancia = input_int()

    tempo = calcular_tempo(distancia)

    print(f'{tempo} minutos')

def input_int():
    return int(input())

def input_float():
    return float(input())

def calcular_tempo(distancia):
    return distancia * 2


main()