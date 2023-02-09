n = int(input())

COMMAND_IN = 'IN'
COMMAND_OUT = 'OUT'

commands = [input().split(', ') for _ in range(n)]

cars = set()
exited_cars = set()

for command, plate in commands:
    if command == COMMAND_IN:
        cars.add(plate)
    elif command == COMMAND_OUT:
        cars.remove(plate)

if cars:
    for car in cars:
        print(car)
else:
    print('Parking Lot is Empty')

