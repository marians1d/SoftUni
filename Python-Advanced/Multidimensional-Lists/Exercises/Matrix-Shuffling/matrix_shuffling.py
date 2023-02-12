def read_matrix():
    global matrix
    
    rows, columns = map(int, input().split())
    for _ in range(rows):
        matrix.append(input().split())
    return matrix

def swap_items(matrix, row1, col1, row2, col2):
    first_element = matrix[row1][col1]

    matrix[row1][col1] = matrix[row2][col2]
    matrix[row2][col2] = first_element

def print_matrix(m):
    for row in m:
        print(*row)

def read_commands():
    global matrix
    
    command = input()
    while command != "END":
        command, *coordinates = command.split()

        if command == "swap" and len(coordinates) == 4:
            row1, col1, row2, col2 = map(int, coordinates)

            if row1 in range(len(matrix)) and row2 in range(len(matrix)) and col1 in range(len(matrix[0])) and col2 in range(len(matrix[0])):
                swap_items(matrix, row1, col1, row2, col2)

                print_matrix(matrix)
            else:
                print("Invalid input!")
        else:
            print("Invalid input!")

        command = input()

matrix = []

read_matrix()

read_commands()
