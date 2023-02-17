def get_position(direction, position):
    directions = {
        'up': (-1, 0),
        'down': (1, 0),
        'left': (0, -1),
        'right': (0, 1),
    }

    current_direction = directions[direction]

    return (position[0] + current_direction[0], position[1] + current_direction[1])

n = int(input())

racing_num = input()


matrix = []

car_position = (0, 0)
tunnel_entrance = None
tunnel_exit = None

kilometers = 0

for x in range(n):
    row = input().split()

    matrix.append(row)

    if 'T' in row:
        if tunnel_entrance is None:
            tunnel_entrance = (x, row.index('T'))
        else:
            tunnel_exit = (x, row.index('T'))

while True:
    direction = input()

    if direction == 'End':
        matrix[car_position[0]][car_position[1]] = 'C'
        print(f'Racing car {racing_num} DNF.')
        break

    matrix[car_position[0]][car_position[1]] = '.'
    
    car_position = get_position(direction, car_position)

    current_item = matrix[car_position[0]][car_position[1]]

    matrix[car_position[0]][car_position[1]] = 'C'

    if current_item == 'F':
        print(f'Racing car {racing_num} finished the stage!')

        kilometers += 10
        break
    elif current_item == 'T':
        matrix[car_position[0]][car_position[1]] = '.'

        kilometers += 30

        if car_position[0] == tunnel_entrance[0] and car_position[1] == tunnel_entrance[1]:

            car_position = tunnel_exit
        else:

            car_position = tunnel_entrance

        matrix[car_position[0]][car_position[1]] = '.'
    else:
        kilometers += 10

print(f'Distance covered {kilometers} km.')

for row in matrix:
    print(''.join(row))
