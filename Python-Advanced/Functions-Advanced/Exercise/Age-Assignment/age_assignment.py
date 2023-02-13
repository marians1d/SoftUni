def age_assignment(*args, **kwargs):
    names = {}
    for name in args:
        for key, age in kwargs.items():
            if name.startswith(key):
                names[name] = age

    result = []
    for name, age in sorted(names.items()):
        result.append(f"{name} is {age} years old.")

    return '\n'.join(result)

# print(age_assignment("Peter", "George", G=26, P=19)) # Peter is 19 years old. George is 26 years old.

print(age_assignment("Amy", "Bill", "Willy", W=36, A=22, B=61)) # Amy is 22 years old. Bill is 61 years old. Willy is 36 years old.
