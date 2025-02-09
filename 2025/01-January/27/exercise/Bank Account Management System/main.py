
class BankAccount:
    def __init__(self,name,balance):
        self.name=name
        self._balance=balance

    def greet(self):
        return f"hello! {self.name} your balance is {self._balance} ils"

    def deposit(self,amount):
        self._balance+=amount
        print(f"Deposit successfully\nyour balance : {self._balance}")

    def withdraw(self,amount):
        if self._balance<amount:
            print(f"insufficient funds\nyour balance : {self._balance}")
        else:
            self._balance-=amount
            print(f"Withdraw successfully\nyour balance : {self._balance}")
    def get_balance(self):
        return self._balance
    def __str__(self):
        return f"{self.name},{self._balance}"

class SavingsAccount(BankAccount):
    def __init__(self, name, balance,bonus):
        super().__init__(name, balance)
        self.bonus=bonus
    def deposit(self,amount):
        self._balance += amount * ((self.bonus / 100) + 1)
        print(f"Deposit successfully\nyour balance : {self._balance}")

user=SavingsAccount("Shalev",100,2)
print(user.greet())
user.withdraw(120)
user.withdraw(80)
print(user.get_balance())
user.deposit(1000)
user._balance=1
print(user.get_balance())
