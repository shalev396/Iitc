#Write a program that simulates an ATM
pin=int(input("enter pin\n"))
correct=1234
balance=10000
if pin==correct:
    print(f"your balance: {balance}$")
    op=input("deposit or withdraw\n")
    if op=="withdraw":
        amount =int(input("how match\n"))
        if balance-amount>=0:
            balance-=amount
            print(f"your new balance: {balance}$")
        else:
            print(f"you are poor\n your balance is {balance}")
    if op=="deposit":
        amount =int(input("how match\n"))
        balance+=amount
        print(f"your new balance: {balance}$")
    else:
        print("try again")
else:
    print("wrong pin")