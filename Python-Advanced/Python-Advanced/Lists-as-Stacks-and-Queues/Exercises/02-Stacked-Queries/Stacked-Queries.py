from collections import deque

inputs = [[int(x) for x in input().split()] for _ in range(int(input()))]

list = []

command_map = {
    1: lambda x: list.append(x[1]),
    2: lambda x: list.pop() if list else None,
    3: lambda x: print(max(list)) if list else None,
    4: lambda x: print(min(list)) if list else None
}

for item in inputs:
    command_map[item[0]](item)

result = []

while list:
    result.append(str(list.pop()))

print(', '.join(result))
