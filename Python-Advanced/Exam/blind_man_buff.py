def get_position(direction, position):
    directions = {
        'up': (-1, 0),
        'down': (1, 0),
        'left': (0, -1),
        'right': (0, 1),
    }

    current_direction = directions[direction]

    return (position[0] + current_direction[0], position[1] + current_direction[1])

rows, columns = [int(n) for n in input().split()]

player_position = None

playground = []

moves_made = 0

touched_players = 0

TOTAL_PLAYERS = 3


for x in range(rows):
    row = input().split()

    playground.append(row)

    if 'B' in row:
        player_position = (x, row.index('B'))

while True:
    command = input()

    if command == 'Finish' or touched_players >= TOTAL_PLAYERS:
        break

    next_position = get_position(command, player_position)

    if next_position[0] < 0 or next_position[0] >= len(playground):
        continue

    if next_position[1] < 0 or next_position[1] >= len(playground[0]):
        continue

    if playground[next_position[0]][next_position[1]] == 'O':
        continue

    playground[player_position[0]][player_position[1]] = '-'
    
    moves_made += 1

    if playground[next_position[0]][next_position[1]] == 'P':
        touched_players += 1

    playground[next_position[0]][next_position[1]] = 'B'
    player_position = next_position



print('Game over!')

print(f'Touched opponents: {touched_players} Moves made: {moves_made}')

