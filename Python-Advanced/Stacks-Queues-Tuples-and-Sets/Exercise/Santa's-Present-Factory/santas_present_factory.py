from collections import deque

materials = [int(m) for m in input().split()]
magic = deque([int(m) for m in input().split()])


present_map = {
    'Doll': 0,
    'Wooden train': 0,
    'Teddy bear': 0,
    'Bicycle': 0,
}


def get_present(magic_level):
    if magic_level == 150:
        return 'Doll'

    if magic_level == 250:
        return 'Wooden train'

    if magic_level == 300:
        return 'Teddy bear'

    if magic_level == 400:
        return 'Bicycle'

    return None


while materials and magic:
    current_material = materials.pop()
    current_magic = magic.popleft()

    if current_material == 0 and current_magic == 0:
        continue
    elif current_material == 0:
        magic.appendleft(current_magic)
        continue
    elif current_magic == 0:
        materials.append(current_material)
        continue

    total_magic = current_material * current_magic
    present_name = get_present(total_magic)

    if present_name:
        present_map[present_name] += 1
    elif total_magic < 0:
        materials.append(current_material + current_magic)
    elif total_magic > 0:
        materials.append(current_material + 15)

if (present_map['Doll'] > 0 and present_map['Wooden train'] > 0) or (
        present_map['Teddy bear'] > 0 and present_map['Bicycle'] > 0):
    print('The presents are crafted! Merry Christmas!')
else:
    print('No presents this Christmas!')

if materials:
    print(f'Materials left: {", ".join([str(m) for m in materials[::-1]])}')

if magic:
    print(f'Magic left: {", ".join([str(m) for m in magic])}')

for name, count in sorted(present_map.items()):
    if count:
        print(f'{name}: {count}')
