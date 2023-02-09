from collections import deque

stations = deque([[int(x) for x in input().split()] for _ in range(int(input()))])

index = 0

fuel = 0

stations_copy = stations.copy()

for station in stations:
    station_fuel, distance = station

    if station_fuel > distance:
        for station2 in stations_copy:
            
    else:
        fuel -= distance

print(index)
