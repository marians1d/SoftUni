i, j = [int(x) for x in input().split()]

first_set = {int(input()) for _ in range(i)}
second_set = {int(input()) for _ in range(j)}

for num in first_set.intersection(second_set):
    print(num)
