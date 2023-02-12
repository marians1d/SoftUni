def generate_palindrome(r, c):
    matrix = []

    for x in range(r):
        row = []
        for y in range(c):
            row.append(chr(97 + x) + chr(97 + x + y) + chr(97 + x))
        matrix.append(row)

    return matrix

def print_matrix(matrix):
    for row in matrix:
        print(' '.join(row))

rows, columns = [int(n) for n in input().split()]

result = generate_palindrome(rows, columns)

print_matrix(result)
