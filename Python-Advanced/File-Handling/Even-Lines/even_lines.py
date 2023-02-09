def replace_multiple(text, chars):
    result = text

    for ch in chars:
        if ch in result:
            result = result.replace(ch, '@')

    return result


CHARS = '-,.!?'

with open('text.txt') as file:
    lines = file.readlines()
    for index in range(0, len(lines), 2):
        response = replace_multiple(lines[index], CHARS).split()
        response.reverse()
        print(*response, sep=' ')
