def forecast(*args):
    wether_order = (
        'Sunny',
        'Cloudy',
        'Rainy'
    )

    sorted_list = sorted(args, key=lambda x: (wether_order.index(x[1]), x[0]))

    result = []

    for city, wether in sorted_list:
        result.append(f'{city} - {wether}')

    return '\n'.join(result)


# print(
#     forecast(
#         ("Sofia", "Sunny"),
#         ("London", "Cloudy"),
#         ("New York", "Sunny")
#     )
# )

# print(
#     forecast(
#         ("Beijing", "Sunny"),
#         ("Hong Kong", "Rainy"),
#         ("Tokyo", "Sunny"),
#         ("Sofia", "Cloudy"),
#         ("Peru", "Sunny"),
#         ("Florence", "Cloudy"),
#         ("Bourgas", "Sunny")
#     )
# )

print(
    forecast(
        ("Tokyo", "Rainy"),
        ("Sofia", "Rainy")
    )
)
