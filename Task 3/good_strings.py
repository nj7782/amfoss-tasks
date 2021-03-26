s=int(input())
n=input()
one=0
zero=0
for i in n:
    if(i=='1'):
        one+=1
    else:
        zero+=1
if(one!=zero):
    print(1)
else:
    print(2)