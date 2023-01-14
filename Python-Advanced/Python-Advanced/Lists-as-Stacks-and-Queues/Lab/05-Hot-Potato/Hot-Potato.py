from _collections import deque

names = deque(input().split())
count = int(input())

counter = 0
while len(names) > 1:
    counter += 1

    if counter == count:
        print(f'Removed {names.popleft()}')
        counter = 0
    else:
        names.append(names.popleft())

print(f'Last is {names.popleft()}')
