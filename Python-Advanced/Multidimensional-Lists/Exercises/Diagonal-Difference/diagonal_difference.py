def read_matrix(s, seperator=' '):
    return [[int(n) for n in input('Enter row: ').split(seperator)] for _ in range(s)]


def sum_diagonals(local_matrix):
    primary_diagonal = []
    secondary_diagonal = []

    for i in range(size):
        primary_diagonal.append(local_matrix[i][i])
        secondary_diagonal.append(local_matrix[i][size - 1 - i])

    return sum(primary_diagonal), sum(secondary_diagonal)


size = int(input())

matrix = read_matrix(size)

primary_sum, secondary_sum = sum_diagonals(matrix)

print(abs(primary_sum - secondary_sum))

