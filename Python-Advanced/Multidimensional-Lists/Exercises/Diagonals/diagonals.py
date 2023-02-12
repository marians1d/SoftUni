size = int(input('Enter matrix size: '))

matrix = []

for i in range(size):
    row = [int(n) for n in input('Enter row: ').split(', ')]
    matrix.append(row)

primary_diagonal = []
secondary_diagonal = []

for i in range(size):
    primary_diagonal.append(matrix[i][i])
    secondary_diagonal.append(matrix[i][size - 1 - i])

print(f'Primary diagonal: {", ".join(map(str, primary_diagonal))}. Sum: {sum(primary_diagonal)}')
print(f'Secondary diagonal: {", ".join(map(str, secondary_diagonal))}. Sum: {sum(secondary_diagonal)}')
