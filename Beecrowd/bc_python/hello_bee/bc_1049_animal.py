def main():
  inicio, fim = map(int, input().split(' '))

  tempo_de_jogo(inicio, fim)


def tempo_de_jogo(inicio, fim):
  
  if inicio == fim:
    print('O JOGO DUROU 24 HORA(S)')
  elif inicio < fim :
    duracao = fim - inicio
    print(f'O JOGO DUROU { duracao } HORA(S)')
  else:
    duracao = ( 24 - inicio ) + fim
    print(f'O JOGO DUROU { duracao } HORA(S)')

main()

