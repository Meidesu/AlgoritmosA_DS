def main():
    pi = 3.14159
    raio = input_float('Informe a area do circulo: ')

    area = pi * (raio ** 2)

    print(f'area = {area:.4f}')

def input_float(label='Digite um numero: '):
    return float(input(label))

main()
