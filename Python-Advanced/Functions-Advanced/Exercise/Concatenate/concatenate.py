def concatenate(*args, **kwargs):
    result = ""
    for arg in args:
        result += arg

    for key, value in kwargs.items():
        result = result.replace(key, value)

    return result

print(concatenate("Soft", "UNI", "Is", "Grate", "!", UNI="Uni", Grate="Great"))