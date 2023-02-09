from collections import deque

parentheses = list(input())

list = []

for p in parentheses:
    if p in '{([':
        list.append(p)
    elif list and f'{list[len(list) - 1]}{p}' in '(){}[]':
        list.pop()
    else:
        print('NO')
        break
else:
    print('YES')
