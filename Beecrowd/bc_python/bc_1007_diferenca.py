def main():
    a = input_int()
    b = input_int()
    c = input_int()
    d = input_int()

    resultado = (a * b - c * d)
    print(f'DIFERENCA = {resultado}')

def input_int(label='Insira um numero: '):
    return int(input(label))

main()
