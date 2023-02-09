from _collections import deque

people = deque()

COMMAND_END = 'End'
COMMAND_START = 'Start'
COMMAND_REFILL = 'refill'

water_amount = int(input())

while True:
    name = input()

    if name != COMMAND_START:
        people.append(name)
    else:
        break

while True:
    command = input()

    if command.startswith(COMMAND_REFILL):
        water_amount += int(command.split(' ')[1])
    elif command != COMMAND_END:
        name = people.popleft()

        if int(command) <= water_amount:
            water_amount -= int(command)

            print(f'{name} got water')
        else:
            print(f'{name} must wait')
    else:
        break

print(f'{water_amount} liters left')
