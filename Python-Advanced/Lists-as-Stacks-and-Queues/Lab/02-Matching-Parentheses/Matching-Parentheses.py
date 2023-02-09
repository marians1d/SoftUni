expression = input()

indexes = []

for i in range(len(expression)):
    if expression[i] == '(':
        indexes.append(i)
    elif expression[i] == ')':
        print(expression[indexes.pop():i + 1])
