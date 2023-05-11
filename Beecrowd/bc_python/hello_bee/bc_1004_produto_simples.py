def main():
    num_1 = input_int('Primeiro numero: ')
    num_2 = input_int('Segundo numero: ')  

    produto = num_1 * num_2

    print(f'Produto = {produto}')

def input_int(label):
    return int(input(label))

main()