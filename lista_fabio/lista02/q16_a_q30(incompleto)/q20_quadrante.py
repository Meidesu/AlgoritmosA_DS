# Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou
# quarto) em que o ângulo se localiza.

# • 90°: localizado no final do 1° quadrante;
# • 180°: final do 2º quadrante;
# • 270°: final do 3° quadrante;
# • 360°: final do 4° quadrante. 
print('-----------------------------------------------------')
print('### Descubra a qual quadrante o angulo pertence ###\n')

angulo = int(input('Informe um angulo(o°-360°): '))

if angulo >= 0 and angulo <= 360: 
  if angulo <= 90:
    quadrante = 'Primeiro'
  elif angulo <= 180:
    quadrante = 'Segundo'
  elif angulo <= 270:
    quadrante = 'Terceiro'
  elif angulo <= 360:
    quadrante = 'Quarto'
  
  print(f'O angulo pertece ao {quadrante} quadrante.')
  
else: 
  print('### Insira um angulo válido  ###')

print('-----------------------------------------------------')
