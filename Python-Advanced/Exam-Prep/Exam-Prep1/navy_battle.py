field_size = int(input())

field = []

sub_position = (0, 0)
cruiser_count = 0

life_points = 3

for x in range(field_size):
    row = input()

    field.append(list(row))

    if 'S' in row:
        sub_position = (x, row.index('S'))
    
    if 'C' in row:
        cruiser_count += row.count('C')

directions = {
    'up': (-1, 0),
    'down': (1, 0),
    'left': (0, -1),
    'right': (0, 1),
}

while life_points and cruiser_count:
    direction = input()

    field[sub_position[0]][sub_position[1]] = '-'

    sub_position = (sub_position[0] + directions[direction][0], sub_position[1] + directions[direction][1])

    current_position = field[sub_position[0]][sub_position[1]]

    if current_position == 'C':
        cruiser_count -= 1

        field[sub_position[0]][sub_position[1]] = '-'
    elif current_position == '*':
        life_points -= 1

        field[sub_position[0]][sub_position[1]] = '-'
    
    field[sub_position[0]][sub_position[1]] = 'S'

if not cruiser_count:
    print('Mission accomplished, U-9 has destroyed all battle cruisers of the enemy!')
if not life_points:
    print(f'Mission failed, U-9 disappeared! Last known coordinates [{sub_position[0]}, {sub_position[1]}]!')


for row in field:
    print(*row, sep='')