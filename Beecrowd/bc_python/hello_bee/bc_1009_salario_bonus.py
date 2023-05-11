'''Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no
 mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, 
 informar o total a receber no final do mês, com duas casas decimais.'''

def main():
    nome = input('Informe o nome do funcionario: ')
    salario = input_float('Salário fixo(R$): ')
    total_vendas = input_float('Total de vendas no mês(R$): ')

    salario = calcular_bonus_salario(salario, total_vendas)

    print(f'TOTAL = R$ {salario:.2f}')


def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_bonus_salario(salario, vendas):
    return salario + ( 0.15 * vendas )

main()