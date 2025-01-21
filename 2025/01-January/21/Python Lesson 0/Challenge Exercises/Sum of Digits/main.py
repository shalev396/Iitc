#Take a number as input and calculate the sum of its digits.
num =int(input("enter a number\n"))
temp=num
length=0
sums=0
while temp>0:
    temp=int(temp/10)
    length=length+1
while length>0:
    sums+=num%10
    num=int(num/10)
    length-=1

print(sums)
