
def read_matrix(r, seperator=' '):
    return [input('Enter row: ').split(seperator) for _ in range(r)]


def is_one_value(*args):
    return len(set(args)) == 1


def count_squares(matrix_inner):
    count = 0

    for x in range(len(matrix_inner) - 1):
        for y in range(len(matrix_inner[x]) - 1):
            if is_one_value(matrix_inner[x][y], matrix_inner[x][y + 1], matrix_inner[x + 1][y], matrix_inner[x + 1][y + 1]):
                count += 1

    return count


rows, columns = [int(n) for n in input().split()]

matrix = read_matrix(rows)

print(count_squares(matrix))
