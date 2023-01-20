phrase = input()

letter_count = {}

for letter in phrase:
    if letter not in letter_count:
        letter_count[letter] = 0

    letter_count[letter] += 1

for letter, count in sorted(letter_count.items()):
    print(f'{letter}: {count} time/s')
