
def shop_from_grocery_list(budget, shopping_list, *products):
    from collections import deque
    
    budget_left = budget
    local_products = deque(products)


    while shopping_list and local_products:
        name, cost = local_products.popleft()

        if name in shopping_list and cost <= budget_left:
            budget_left -= cost

            shopping_list.remove(name)
        elif name in shopping_list and cost > budget_left:
            break


    if not shopping_list:
        return f'Shopping is successful. Remaining budget: {budget_left:.2f}.'
    else:
        return f'You did not buy all the products. Missing products: {", ".join(shopping_list)}.'



# print(shop_from_grocery_list(
#     100,
#     ["tomato", "cola"],
#     ("cola", 5.8),
#     ("tomato", 10.0),
#     ("tomato", 20.45),
# ))

# print(shop_from_grocery_list(
#     100,
#     ["tomato", "cola", "chips", "meat"],
#     ("cola", 5.8),
#     ("tomato", 10.0),
#     ("meat", 22),
# ))

print(shop_from_grocery_list(
    100,
    ["tomato", "cola", "chips", "meat", "chocolate"],
    ("cola", 15.8),
    ("chocolate", 30),
    ("tomato", 15.85),
    ("chips", 50),
    ("meat", 22.99),
))

