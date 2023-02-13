def grocery_store(**groceries):
    result = []

    sorted_list = sorted(groceries.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))

    for key, value in sorted_list:
        result.append(f"{key}: {value}")

    return '\n'.join(result)

print(grocery_store(
    bread=2,
    pasta=2,
    eggs=20,
    carrot=1,
)) 