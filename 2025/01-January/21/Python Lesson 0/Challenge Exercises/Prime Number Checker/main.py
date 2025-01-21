#     - Write a program that checks if a number entered by the user is prime.
num =int(input("enter a number\n"))

foundPrime=False
for i in range(num):
    if 1<i<num and not foundPrime:
        if num % i == 0:
            print("not prime")
            foundPrime=True

if not  foundPrime:
    print("prime")
