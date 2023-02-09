from string import punctuation


def count_text(text):
    letter_c = 0
    punctuation_c = 0

    for letter in text:
        if letter.isalpha():
            letter_c += 1
        elif letter in punctuation:
            punctuation_c += 1

    return letter_c, punctuation_c


with open('text.txt') as file:
    lines = [l for l in file.read().split('\n') if l]

line_count = 0

with open('output.txt', 'w') as output:
    result = []

    for line in lines:
        line_count += 1

        letter_count, punctuation_count = count_text(line)

        result.append(f'Line {line_count}: {line} ({letter_count})({punctuation_count})')

    output.write('\n'.join(result))
