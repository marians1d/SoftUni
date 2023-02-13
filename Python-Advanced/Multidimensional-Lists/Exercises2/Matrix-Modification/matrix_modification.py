def read_matrix():
    rows = int(input())
    matrix = []
    for _ in range(rows):
        matrix.append([int(x) for x in input().split()])
    return matrix

def print_matrix(matrix):
    for row in matrix:
        print(*row)

matrix = read_matrix()

command, *other = input().split()

while command != "END":
    row, col, value = map(int, other)
    if not (0 <= row < len(matrix) and 0 <= col < len(matrix[row])):
        print("Invalid coordinates")
    else:
        if command == "Add":
            matrix[row][col] += value
        elif command == "Subtract":
            matrix[row][col] -= value
    command, *other = input().split()

print_matrix(matrix)
