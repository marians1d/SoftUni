
def read_matrix(s, seperator=' '):
    return [[int(n) for n in input('Enter row: ').split(seperator)] for _ in range(s)]


def print_matrix(matrix_in):
    for row in matrix_in:
        print(*row, sep=' ')


def biggest_sum(matrix_in, x, y=None):
    row_size, column_size = x, y if y else x

    max_sum = float('-inf')
    max_submatrix = None

    for x in range(len(matrix_in) - (row_size - 1)):
        for y in range(len(matrix_in[0]) - (column_size - 1)):
            total, submatrix = 0, []

            for i in range(row_size):
                row = matrix_in[x + i][y: y + column_size]

                total += sum(row)
                submatrix.append(row)

            if max_sum < total:
                max_sum = total
                max_submatrix = submatrix

    return max_sum, max_submatrix


rows, columns = [int(n) for n in input().split()]

matrix = read_matrix(rows)

total_sum, result_matrix = biggest_sum(matrix, 3)

print(f'Sum = {total_sum}')
print_matrix(result_matrix)
