#programma p61a.1 versija
diena = ['pirmdiena','otrdiena','tresdiena','ceturtdiena','piektdiena','sestdiena','svetdiena']
temperatura = [0] * 7
for numurs in range(7):
    temperatura[numurs] = int(input('Ievadiet ' + diena[numurs] + 's gaisa temperaturu '))
dienu_skaits = 0
for numurs in range(7):
    if temperatura[numurs] > 25:
        dienu_skaits = dienu_skaits + 1   # Dienu skaitīšana
print('Nedēļas karstāko dienu skaits bija', dienu_skaits)
