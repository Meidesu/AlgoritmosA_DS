
x1_y1 = input().split(' ')
x2_y2 = input().split(' ')

def main():
    x1, y1 = float(x1_y1[0]), float(x1_y1[1])
    x2, y2 = float(x2_y2[0]), float(x2_y2[1])  

    distancia = distancia_entre_dois_pontos(x1, x2, y1, y2)

    print(f'{distancia:.4f}')


def distancia_entre_dois_pontos(x1, x2, y1, y2):
    return ((x2 - x1)**2 + (y2 - y1)**2)**0.5


main()