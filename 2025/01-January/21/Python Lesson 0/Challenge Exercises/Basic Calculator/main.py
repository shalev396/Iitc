import inquirer

# README: Run in Terminal Not In PyCharm
def askOp():
    ops = [
        inquirer.List(
            "operation",
            message="Which operation do you want?",
            choices=["+", "-", "*", "/"],
        ),
    ]
    choice = inquirer.prompt(ops)
    return choice["operation"]

def calc():
    print("Calculator")
    val1 = int(input("Enter your first value: "))
    val2 = int(input("Enter your second value: "))
    op = askOp()

    if op == "+":
        print(val1 + val2)
    elif op == "-":
        print(val1 - val2)
    elif op == "*":
        print(val1 * val2)
    elif op == "/":
        if val2 == 0:
            print("Error: Cannot divide by zero!")
        else:
            print(val1 / val2)
    else:
        print("Invalid operator")

calc()
