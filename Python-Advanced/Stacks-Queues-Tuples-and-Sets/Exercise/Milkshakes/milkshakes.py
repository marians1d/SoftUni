from collections import deque

chocolate = [int(x) for x in input().split(', ')]
milk = deque(int(x) for x in input().split(', '))

milkshake = 0

while milkshake < 5 and chocolate and milk:
    current_milk = milk.popleft()
    current_choco = chocolate[-1]

    if current_milk <= 0 and current_choco <= 0:
        chocolate.pop()
        continue
    elif current_milk <= 0:
        continue
    elif current_choco <= 0:
        milk.appendleft(current_milk)
        chocolate.pop()
        continue

    if current_milk == current_choco:
        milkshake += 1
        chocolate.pop()
    else:
        milk.append(current_milk)

        chocolate[-1] -= 5

if milkshake == 5:
    print('Great! You made all the chocolate milkshakes needed!')
else:
    print('Not enough milkshakes.')

if chocolate:
    print(f'Chocolate: {", ".join([str(c) for c in chocolate])}')
else:
    print('Chocolate: empty')

if milk:
    print(f'Milk: {", ".join([str(c) for c in milk])}')
else:
    print('Milk: empty')

