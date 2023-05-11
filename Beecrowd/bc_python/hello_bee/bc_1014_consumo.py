
def main():

    distancia = input_int('Distancia(km): ')
    combustivel_gasto = input_float('Combustivel gasto(L): ')
    
    consumo_medio = calcular_consumo_medio(distancia, combustivel_gasto)

    print(f'{consumo_medio:.3f} km/l')

def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_consumo_medio(distancia, combustivel):
    return distancia / combustivel



main()