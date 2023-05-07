def main():
    a = input_int()
    b = input_int()

    x = a + b

    print(f'Soma = {x}')

def input_int(label='Digite um numero: '):
    return int(input(label))

main()
