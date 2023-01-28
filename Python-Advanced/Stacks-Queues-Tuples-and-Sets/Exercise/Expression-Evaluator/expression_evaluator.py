from collections import deque
from functools import reduce

sequence = deque(input().split())

result = []

OPERATORS = '*+-/'

actions = {
    '*': lambda a, b: a * b,
    '+': lambda a, b: a + b,
    '-': lambda a, b: a - b,
    '/': lambda a, b: a // b,
}

while sequence:
    current = sequence.popleft()
    if current not in OPERATORS:
        result.append(int(current))
    else:
        _sum = reduce(actions[current], result)

        result = [_sum]

print(result[0])
