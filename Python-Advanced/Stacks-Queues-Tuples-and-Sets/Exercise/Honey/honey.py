from collections import deque

bees = deque([int(b) for b in input().split()])
nectar = [int(n) for n in input().split()]
symbols = deque(input().split())

honey = []

actions = {
    '+': lambda a, b: abs(a + b),
    '-': lambda a, b: abs(a - b),
    '*': lambda a, b: abs(a * b),
    '/': lambda a, b: abs(a / b) if b != 0 else 0,
}

while bees and nectar:
    current_bee = bees.popleft()
    current_nectar = nectar.pop()

    if current_bee <= current_nectar:
        honey.append(actions[symbols.popleft()](current_bee, current_nectar))
    else:
        bees.appendleft(current_bee)

print(f'Total honey made: {sum(honey)}')

if bees:
    print(f'Bees left: {", ".join([str(b) for b in bees])}')

if nectar:
    print(f'Nectar left: {", ".join([str(b) for b in nectar])}')
