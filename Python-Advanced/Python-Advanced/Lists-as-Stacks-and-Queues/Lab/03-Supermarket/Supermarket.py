from _collections import deque


def print_names(names):
    for name in names:
        print(name)


COMMAND_PAID = 'Paid'
COMMAND_END = 'End'

queue = deque()

while True:
    command = input()

    if command == COMMAND_PAID:
        print_names(queue)
        queue.clear()
    elif command == COMMAND_END:
        break
    else:
        queue.append(command)

print(f'{len(queue)} people remaining.')
