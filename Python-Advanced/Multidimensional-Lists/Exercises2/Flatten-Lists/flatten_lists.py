rows = input().split('|')

result = []
for row in rows[::-1]:
    result.extend([n for n in row.split() if n])

print(*result)
