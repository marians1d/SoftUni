from collections import deque

stations = deque([[int(x) for x in input().split()] for _ in range(int(input()))])

index = 0
fuel = 0

stations_copy = stations.copy()

while stations_copy:
    current_fuel, current_distance = stations_copy.popleft()

    fuel += current_fuel

    if fuel >= current_distance:
        fuel -= current_distance
    else:
        stations.rotate(-1)
        stations_copy = stations.copy()
        index += 1
        fuel = 0

print(index)
