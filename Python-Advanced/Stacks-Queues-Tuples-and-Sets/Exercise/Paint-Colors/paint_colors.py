from collections import deque

strings = deque(input().split())

colors = []

COLORS = ['red', 'yellow', 'blue', 'orange', 'purple', 'green']

combinations = {
    'orange': {'red', 'yellow'},
    'purple': {'red', 'blue'},
    'green': {'yellow', 'blue'},
}

while strings:
    first = strings.popleft()
    last = strings.pop() if strings else ''

    for color in (first + last, last + first):
        if color in COLORS:
            colors.append(color)
            break
    else:
        for string in (first[:-1], last[:-1]):
            if string:
                strings.insert(len(strings) // 2, string)

for color in set(combinations.keys()).intersection(colors):
    if not combinations[color].issubset(colors):
        colors.remove(color)

print(colors)
