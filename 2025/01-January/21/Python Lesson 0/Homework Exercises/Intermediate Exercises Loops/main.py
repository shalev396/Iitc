#Count to 10
for i in range(10):
    print(i)
#Sum of Numbers
sums=0
for i in range(int(input("enter a number\n"))):
    sums+=i
print(f"sum is : {sums}")
#Multiplication Table
num=int(input("enter a number\n"))
for i in range(num):
    line=""
    for j in range(num):
        line+=str((i*j))+" "
    print(line)
#Factorial Calculator
num = int(input("enter a number"))
index=num
while index>0:
    num=num*index
    index=index-1
print(num)
#Reverse Counter
for i in range(10,0,-1):
    print(i)
print("Blastoff!")
