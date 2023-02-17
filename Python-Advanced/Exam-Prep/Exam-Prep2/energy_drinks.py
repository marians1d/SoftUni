from collections import deque

caffeine = [int(c) for c in input().split(', ')]
energy_drinks = deque(int(d) for d in input().split(', '))

caffeine_amount = 0

CAFFEINE_LIMIT = 300

while caffeine and energy_drinks:
    current_caff = caffeine.pop()
    current_drink = energy_drinks.popleft()

    product = current_caff * current_drink

    if caffeine_amount + product <= CAFFEINE_LIMIT:
        caffeine_amount += product
    else:
        energy_drinks.append(current_drink)
        caffeine_amount -= 30

        if caffeine_amount < 0:
            caffeine_amount = 0

if energy_drinks:
    print(f'Drinks left: {", ".join(map(str, energy_drinks))}')
else:
    print('At least Stamat wasn\'t exceeding the maximum caffeine.')

print(f'Stamat is going to sleep with {caffeine_amount} mg caffeine.')
