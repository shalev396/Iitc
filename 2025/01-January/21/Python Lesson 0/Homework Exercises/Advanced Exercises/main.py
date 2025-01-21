#Find the Largest Number
print(max( int(input("enter a number\n")),int(input("enter a number\n")),int(input("enter a number\n"))))
#Palindrome Checker
str1=input("enter str\n")
str2=""
Palindrome=True
print(str1[0])
for i in range(len(str1)):

    if str1[i]!=str1[(i+1)*-1]:
        Palindrome = False
if Palindrome:
    print("Palindrome")
else:
    print("Not Palindrome")
#Fibonacci Sequence
n=int(input("enter a number\n"))
arr=[0,1]
for i in range(n):
    if i>1:
        print(i)
        arr.append(arr[i-1]+arr[i-2])
print(arr)

for i in range(50):
    if i%3==0 and i%5==0 and i>1:
        print(i)
layer= int(input("how many layers\n"))
layer=layer*2
for i in range(layer):
    if i%2==1:
        print(" "*int((layer-i)/2) + "*"*i +" "*int((layer-i)/2))