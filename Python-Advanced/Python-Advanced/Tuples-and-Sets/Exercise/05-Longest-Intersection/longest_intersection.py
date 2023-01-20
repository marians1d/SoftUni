ranges = [[r.split(',') for r in input().split('-')] for _ in range(int(input()))]

longest_interception = set()

for ran in ranges:
    first_set = set(range(int(ran[0][0]), int(ran[0][1]) + 1))
    second_set = set(range(int(ran[1][0]), int(ran[1][1]) + 1))

    set_intersection = first_set.intersection(second_set)

    if len(set_intersection) > len(longest_interception):
        longest_interception = set_intersection

parsed_interception = f'[{", ".join([str(x) for x in longest_interception])}]'

print(f'Longest intersection is {parsed_interception} with length {len(longest_interception)}')