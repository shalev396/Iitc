
try:
    f = open("demofile.txt", "r")
    print(f.read())
    10/0
except FileNotFoundError:
    print(f"file dose not exist")
except ZeroDivisionError:
    print(f"cannot divide by zero")
finally:
    print("done")