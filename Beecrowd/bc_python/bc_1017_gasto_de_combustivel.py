
def main():
    tempo_gasto = input_int()
    velocidade = input_int()
    consumo_medio = 12

    distancia = calcular_distancia(tempo_gasto, velocidade)
    combustivel_gasto = calcular_combustivel_gasto(distancia, consumo_medio)

    print(f'{combustivel_gasto:.3f}')

def input_int():
    return int(input())

def input_float():
    return float(input())

def calcular_distancia(tempo, velocidade):
    return tempo * velocidade

def calcular_combustivel_gasto(distancia, consumo):
    return distancia / consumo

main()