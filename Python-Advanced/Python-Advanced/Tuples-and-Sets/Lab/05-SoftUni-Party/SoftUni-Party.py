guest_list = set([input() for _ in range(int(input()))])

COMMAND_END = 'END'

while True:
    guest_code = input()

    if guest_code in guest_list:
        guest_list.remove(guest_code)
    elif guest_code == COMMAND_END:
        break

print(len(guest_list))

for ID in sorted(list(guest_list)):
    print(ID)
