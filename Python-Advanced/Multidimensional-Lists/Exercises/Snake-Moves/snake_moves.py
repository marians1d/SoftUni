from collections import deque

def zig_zag_snake(row_size, col_size, snake):
    matrix = []

    snake = deque(snake)
    for row in range(row_size):
        matrix.append([0] * col_size)

        order = range(col_size) if row % 2 == 0 else range(col_size - 1, -1, -1)

        for col in order:
            matrix[row][col] = snake.popleft()
            snake.append(matrix[row][col])
    return matrix

rows, cols = [int(x) for x in input().split()]
snake = input()

result = zig_zag_snake(rows, cols, snake)

for row in result:
    print(*row, sep = '')
