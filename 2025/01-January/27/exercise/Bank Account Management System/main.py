class User:
    def __init__(self,name,balance):
        self.name=name
        self.balance=balance

    def greet(self):
        return f"hello! {self.name} your balance is {self.balance} ils"

    def deposit(self,amount):
        self.balance+=amount
        print(f"Deposit successfully\nyour balance : {self.balance}")

    def withdraw(self,amount):
        if self.balance<amount:
            print(f"insufficient funds\nyour balance : {self.balance}")
        else:
            self.balance-=amount
            print(f"Withdraw successfully\nyour balance : {self.balance}")

    def __str__(self):
        return f"{self.name},{self.balance}"


user=User("Shalev",100)
print(user.greet())
user.withdraw(120)
user.withdraw(80)
user.deposit(1000)