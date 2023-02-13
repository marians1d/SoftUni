positive = 0
negative = 0

list = [int(n) for n in input().split()]

for num in list:
    if num >= 0:
        positive += num
    else:
        negative += num

print(negative)
print(positive)

if (abs(negative) > positive):
    print("The negatives are stronger than the positives")
else:
    print("The positives are stronger than the negatives")
