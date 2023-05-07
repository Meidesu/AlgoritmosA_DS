
dados = input().split(' ')

def main():

    a = float(dados[0])
    b = float(dados[1])
    c = float(dados[2])

    pi = 3.14159

    area_triangulo = calcular_area_triangulo_retangulo(a, c)
    area_circulo = calcular_area_circulo(c, pi)
    area_trapezio = calcular_area_trapezio(a, b, c)
    area_quadrado = calcular_area_quadrado(b)
    area_retangulo = calcular_area_retangulo(a, b)

    print(f'TRIANGULO: {area_triangulo:.3f}')
    print(f'CIRCULO: {area_circulo:.3f}')
    print(f'TRAPEZIO: {area_trapezio:.3f}')
    print(f'QUADRADO: {area_quadrado:.3f}')
    print(f'RETANGULO: {area_retangulo:.3f}')

def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_area_triangulo_retangulo(base, altura):
    return (base * altura) / 2

def calcular_area_circulo(raio, pi):
    return pi * raio**2

def calcular_area_trapezio(base_menor, base_maior, altura):
    return ((base_maior + base_menor) * altura) / 2

def calcular_area_quadrado(lado):
    return lado * lado

def calcular_area_retangulo(base, altura):
    return base * altura

main()