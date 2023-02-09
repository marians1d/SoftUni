n = int(input())

names = {input() for _ in range(n)}

print(*names, sep='\n')
