""" def main():
    lines_1 = input().split(' ')
    
    
    nota_1 = to_float(lines_1[0])
    nota_2 = to_float(lines_1[1])
    nota_3 = to_float(lines_1[2])
    nota_4 = to_float(lines_1[3])

    # print(nota_1)
    # print(nota_2)
    # print(nota_3)
    # print(nota_4)

    media = calcular_media(nota_1, nota_2, nota_3, nota_4)
    print(f'Média: {media:.1f}')

    if media >= 7.0:
        print('Aluno aprovado.')
    elif media < 5.0:
        print('Aluno reprovado.')
    else:
        print('Aluno em exame.')

        lines_2 = input().split(' ')
        nota_recuperacao = to_float(lines_2[0])
        print(f'Nota do exame: {nota_recuperacao}')

        media_final = calcular_media_final(nota_recuperacao, media)

        if media_final >= 5.:
            print('Aluno aprovado.')
        else:
            print('Aluno reprovado.')
        
        print(f'Media final: {media_final:.1f}')

def calcular_media_final(recuperacao, media):
    return (recuperacao + media) / 2

def calcular_media(n1, n2, n3, n4):
    return (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10


def to_float(valor):
  try:
    if valor != '' :
      valor = float(valor)
      return valor
    else:
      return 0
  except EOFError:
    return 0

main() """

# -*- coding: utf-8 -*-



def main():
    lines_1 = input().split(' ')
    lines_2 = input().split(' ')
    
    
    
    nota_1 = float(lines_1[0])
    nota_2 = float(lines_1[1])
    nota_3 = float(lines_1[2])
    nota_4 = float(lines_1[3])
    
    media = calcular_media(nota_1, nota_2, nota_3, nota_4)
    
    print(f'Media: {media:.1f}')

    if media >= 7.0:
        print('Aluno aprovado.')
    elif media < 5.0:
        print('Aluno reprovado.')
    else:
        print('Aluno em exame.')
        
        nota_recuperacao = float(lines_2[0])
        print(f'Nota do exame: {nota_recuperacao}')

        media_final = calcular_media_final(nota_recuperacao, media)

        if media_final >= 5.:
            print('Aluno aprovado.')
        else:
            print('Aluno reprovado.')
        
        print(f'Media final: {media_final:.1f}')
    

def calcular_media_final(recuperacao, media):
    return (recuperacao + media) / 2

def calcular_media(n1, n2, n3, n4):
    return (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10


# def to_float(valor):
#     if valor != '' :
        
#         valor = float(valor)
#         return valor
    
    
while True:
    try:
        main()
        break
    except EOFError:
        break
    