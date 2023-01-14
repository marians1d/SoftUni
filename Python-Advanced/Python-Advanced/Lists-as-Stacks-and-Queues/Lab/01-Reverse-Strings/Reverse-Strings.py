text = input()

chars = [ch for ch in text]

reversed_list = []
while len(chars):
    reversed_list.append(chars.pop())

print(''.join(reversed_list))
