temperatura = [15,20,26,23,27,25,28]   # Aizpildām masīvu ar dotajām temperatūrām
dienu_skaits = 0
for numurs in range(7):
    if temperatura[numurs] > 25:
        dienu_skaits = dienu_skaits + 1   # Dienu skaitīšana
print('Karstāko dienu skaits bija', dienu_skaits)