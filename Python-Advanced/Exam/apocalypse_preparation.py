from collections import deque

def craft_item(recourse, old_inventory):
    local_inventory = { **old_inventory }

    for name, cost in healing_items.items():
        if recourse == cost:
            if name not in local_inventory:
                local_inventory[name] = 0

            local_inventory[name] += 1

    return local_inventory
    

# healing_items = deque([
#     ('Patch', 30),
#     ('Bandage', 40),
#     ('MedKit', 100),
# ])

healing_items = {
    'Patch': 30,
    'Bandage': 40,
    'MedKit': 100,
}

MEDKIT_COST = 100

texttiles = deque([int(t) for t in input().split()])

medicaments = [int(m) for m in input().split()]

inventory = {}

while texttiles and medicaments:
    current_texttile = texttiles.popleft()
    current_medicament = medicaments.pop()

    healing = current_texttile + current_medicament

    if healing in healing_items.values():
        inventory = craft_item(healing, inventory)
    elif healing > MEDKIT_COST:
        inventory = craft_item(MEDKIT_COST, inventory)

        medicaments[-1] += healing - MEDKIT_COST
    else:
        current_medicament += 10
        medicaments.append(current_medicament)

if not texttiles and not medicaments:
    print('Textiles and medicaments are both empty.')
elif not texttiles:
    print('Textiles are empty.')
elif not medicaments:
    print('Medicaments are empty.')

if inventory:
    sorted_inventory = sorted(inventory.items(), key=lambda i: (-i[1], i[0]))

    for item, quty in sorted_inventory:
        print(f'{item} - {quty}')

if texttiles:
    print(f'Textiles left: {", ".join(map(str, texttiles))}')

if medicaments:
    medicaments.reverse()

    print(f'Medicaments left: {", ".join(map(str, medicaments))}')
