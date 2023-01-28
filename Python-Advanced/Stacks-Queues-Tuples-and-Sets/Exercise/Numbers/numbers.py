first_sequence = set(int(n) for n in input().split())
second_sequence = set(int(n) for n in input().split())

n = int(input())

for _ in range(n):
    first, second, *data = input().split()

    command = first + ' ' + second

    if 'Add First' == command:
        [first_sequence.add(int(n)) for n in data]
    elif 'Add Second' == command:
        [second_sequence.add(int(n)) for n in data]
    elif 'Remove First' == command:
        [first_sequence.discard(int(n)) for n in data]
    elif 'Remove Second' == command:
        [second_sequence.discard(int(n)) for n in data]
    elif 'Check Subset' == command:
        if first_sequence.issubset(second_sequence) or second_sequence.issubset(first_sequence):
            print(True)
        else:
            print(False)


print(*sorted(first_sequence), sep=', ')
print(*sorted(second_sequence), sep=', ')
