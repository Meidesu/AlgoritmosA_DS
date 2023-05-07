'''Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor
 de seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3.
  Considere (atribua) para pi o valor 3.14159.'''

def main():

    raio = float(input('Raio da esfera: '))
    pi = 3.14159

    volume = calcular_volume_esfera(raio, pi)

    print(f'VOLUME = {volume:.3f}')

def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_volume_esfera(raio, pi):
    return (4./3) * pi * raio**3

main()