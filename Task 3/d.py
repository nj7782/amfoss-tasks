n = int(input())
x = "D"
y = "*"
l = n // 2
m = 1
for i in range(0, l):
    print(y * l + x * m + y * l)

    l -= 1
    m += 2
print(x * n)

l = n // 2
k = 1
m -= 2
for j in range(0, l):
    print(y * k + x * m + y * k)
    k += 1
    m -= 2