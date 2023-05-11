
def main():
    
    idade_dias = input_int()

    transformar_em_ano_mes_dia(idade_dias)


def input_int():
    return int(input())

def input_float():
    return float(input())

def transformar_em_ano_mes_dia(idade_dias):

    anos = (idade_dias//365)
    meses = (idade_dias%365//30)
    dias = (idade_dias%365%30)

    print(f'{anos} ano(s)')
    print(f'{meses} mes(es)')
    print(f'{dias} dia(s)')

main()