n = int(input())

inputs = [input().split() for _ in range(n)]

elements = set()

for row in inputs:
    for el in row:
        elements.add(el)

for element in elements:
    print(element)
