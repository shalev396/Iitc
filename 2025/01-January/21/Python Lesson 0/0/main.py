# Python Data Types Tutorial

# 1. Numbers
integer_number = 42
float_number = 3.14
print("\n--- Numbers ---")
print(f"Integer: {integer_number} (Type: {type(integer_number)})")
print(f"Float: {float_number} (Type: {type(float_number)})")

# 2. Strings
text = "Hello, Python!"
print("\n--- Strings ---")
print(f"String: {text} (Type: {type(text)})")
print(f"Length of string: {len(text)}")

# 3. Lists (mutable sequence)
my_list = [1, 2, "three", 4.0]
print("\n--- Lists ---")
print(f"List: {my_list} (Type: {type(my_list)})")
print(f"First item: {my_list[0]}")

# 4. Tuples (immutable sequence)
my_tuple = (1, 2, "three", 4.0)
print("\n--- Tuples ---")
print(f"Tuple: {my_tuple} (Type: {type(my_tuple)})")

# 5. Dictionaries (key-value pairs)
my_dict = {"name": "John", "age": 30}
print("\n--- Dictionaries ---")
print(f"Dictionary: {my_dict} (Type: {type(my_dict)})")
print(f"Value for 'name': {my_dict['name']}")

# 6. Boolean
is_true = True
is_false = False
print("\n--- Booleans ---")
print(f"Boolean True: {is_true} (Type: {type(is_true)})")
print(f"Boolean False: {is_false} (Type: {type(is_false)})")