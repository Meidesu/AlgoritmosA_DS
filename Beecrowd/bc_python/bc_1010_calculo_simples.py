'''Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, 
o valor unitário de cada peça 1, 
o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, 
calcule e mostre o valor a ser pago.'''


valores_1 = input('v1: ').split(' ')
valores_2 = input('v2: ').split(' ')


def main():

    codigo_1 = int(valores_1[0])
    qnt_pecas_1 = int(valores_1[1])
    valor_unidade_1 = float(valores_1[2])

    codigo_2 = int(valores_2[0])
    qnt_pecas_2 = int(valores_2[1])
    valor_unidade_2 = float(valores_2[2])

    total_peca1 = calcular_valor_por_peca(qnt_pecas_1, valor_unidade_1)
    total_peca2 = calcular_valor_por_peca(qnt_pecas_2, valor_unidade_2)

    total = total_peca1 + total_peca2

    print(f'VALOR A PAGAR = R$ {total:.2f}')

def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_valor_por_peca(qnt_pecas, valor_unidade):
    return qnt_pecas * valor_unidade

main()