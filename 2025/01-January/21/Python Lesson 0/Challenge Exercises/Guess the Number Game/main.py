import random

num=random.randrange(1,100,1)
found=False
print("guess the number")
while not found:
    guess=int(input())
    if guess<num:
        print("Higher")
    if guess>num:
        print("Lower")
    if guess==num:
        found = True
print(f"got it the number was {num}")