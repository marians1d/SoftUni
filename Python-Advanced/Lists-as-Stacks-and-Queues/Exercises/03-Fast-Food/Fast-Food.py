from collections import deque

food = int(input())

orders = deque([int(order) for order in input().split()])

print(max(orders))

while orders:
    current_order = orders[0]

    if current_order <= food:
        orders.popleft()
        food -= current_order
    else:
        break

if not orders:
    print('Orders complete')
else:
    print(f"Orders left: {' '.join([str(o) for o in orders])}")
