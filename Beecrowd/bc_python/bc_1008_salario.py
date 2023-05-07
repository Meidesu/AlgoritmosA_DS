def main():
    num_funcionario = input_int('Informe o nº do funcionario: ')
    horas_trabalhadas = input_int('Total de horas trabalhadas: ')
    valor_hora = input_float('Valor por hora(R$): ')

    salario = calcular_salario(horas_trabalhadas, valor_hora)

    print(f'NUMBER = {num_funcionario}')
    print(f'SALARY = U$ {salario:.2f}')


def input_int(label):
    return int(input(label))

def input_float(label):
    return float(input(label))

def calcular_salario(horas_trabalhadas, valor_hora):
    return horas_trabalhadas * valor_hora
main()