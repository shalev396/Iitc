"""
activate calculator
"""
print("Hello World")
def calc():
    print("calculator")
    val1: int = int(input("Enter your value: "))
    op: str = input("Enter your operator: ")
    val2: int = int(input("Enter your value: "))
    if op == "+":
        print(val1 + val2)
    if op == "-":
        print(val1 - val2)
    if op == "*":
        print(val1 * val2)
    if op == "/":
        print(val1 / val2)

if __name__ == "__main__":
    calc()
