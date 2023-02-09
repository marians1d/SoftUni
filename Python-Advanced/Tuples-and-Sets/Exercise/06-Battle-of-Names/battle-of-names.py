names = [input() for _ in range(int(input()))]

even_numbers = set()
odd_numbers = set()

for i in range(len(names)):
    name = names[i]

    name_score = 0

    for letter in name:
        name_score += ord(letter)

    final_score = name_score // (i + 1)

    if final_score % 2 == 0:
        even_numbers.add(final_score)
    else:
        odd_numbers.add(final_score)

if sum(even_numbers) > sum(odd_numbers):
    print(*even_numbers.symmetric_difference(odd_numbers), sep=', ')
elif sum(even_numbers) < sum(odd_numbers):
    print(*odd_numbers.difference(even_numbers), sep=', ')
else:
    print(*even_numbers.union(odd_numbers), sep=', ')
