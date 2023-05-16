def main():

  carac_1  = 'invertebrado'
  carac_2  = 'anelideo'
  carac_3  = 'hematofago'
  # carac_1  = input().split(' ')
  # carac_2  = input().split(' ')
  # carac_3  = input().split(' ')

  definir_nome_do_animal(carac_1, carac_2, carac_3)
  


def definir_nome_do_animal(carac_1, carac_2, carac_3):
    if carac_1 == 'vertebrado':
        if carac_2 == 'ave':
            if carac_3 == 'carnivoro':
                print('aguia')
                
            elif carac_3 == 'onivoro':
                print('pomba')
                
        elif carac_2 == 'mamifero':
            if carac_3 == 'onivoro':
                print('homem')
            elif carac_3 == 'herbivoro':
                print('vaca')
      
    elif carac_1 == 'invertebrado':
        if carac_2 == 'inseto':
            if carac_3 == 'hematofago':
                print('pulga')
            else:
                print('lagarta')
        else:
            if carac_3 == 'hematofago':
                print('sanguessuga')
            else:
                print('minhoca')

main()