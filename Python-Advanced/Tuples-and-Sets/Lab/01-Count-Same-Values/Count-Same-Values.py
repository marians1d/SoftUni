values = tuple(map(float, input().split()))

num_occurrence = {}
for num in values:
    if num not in num_occurrence:
        num_occurrence[num] = 0
    num_occurrence[num] += 1

for key, value in num_occurrence.items():
    print(f'{key} - {value} times')
