from collections import deque

clothes = deque([int(x) for x in input().split()])

rack_space = int(input())

rack_counter = 1

current_space = rack_space

while clothes:
    current_item = clothes.popleft()

    if current_space >= current_item:
        current_space -= current_item
    else:
        current_space = rack_space - current_item
        rack_counter += 1

print(rack_counter)
