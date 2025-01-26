#1
import datetime
import math
import random
import my_math

def square(num):
    return num**2
print(square(10))
def greet(name):
    return f"hello {name}"
print(greet("shalev"))
def celsius_to_fahrenheit(c):
    return (c * 9 / 5) + 32
print(celsius_to_fahrenheit(25))
def simple_interest(p,t,r):
    return (p * t * r)/100
print(simple_interest(8, 6, 8))
def largest(a,b,c):
    return max (a,b,c)
print(largest(1,2,3))
#6
def sum_of_numbers(*args):
    return sum(args)
print(sum_of_numbers(1,2,3,4,5))
def factorial_of(num):
    sums = 1
    for num in range(num, 1, -1):
        sums *= num
    return sums
print(factorial_of(5))
def is_palindrome(strs:str):
    for i in range(len(strs)):
        if strs[i]!=strs[-i-1]:
            return False
    return True
print(is_palindrome("slals"))
def doubles(nums):
    return list(map(lambda x:x*2,nums))
print(doubles([1,2,3,4,5,6,7,8,9,10]))
def prime_checker(num):
    return True if len([i for i in range(2, num) if num % i == 0]) == 0 else False
print(prime_checker(3))
#11
print(random.randint(1,100))
print(math.sqrt(16))
print(datetime.date.today()-datetime.date(year=2025,month=1,day=20))
print(my_math.subtract(1,1))
def random_password(lenth):
    password=""
    for i in range(lenth+1):
        if random.randint(1,2)==1:
            password+=chr(random.randint(65,90))
        else:
            password += chr(random.randint(97, 122))
    return password
print(random_password(100))