#Even or Odd
from calendar import isleap

num=int(input("enter a number \n"))
if num%2==0:
    print("even")
else:
    print("odd")
#Vowel Checker
char=input("enter a letter\n")
char=char.lower()
if char=="a" or char=="e" or char=="o" or char=="u" or char=="i":
    print("vowel")
else:
    print("consonant")
#Positive or Negative
num=int(input("enter a number\n"))
if num<0:
    print("negative")
if num>0:
    print("positive")
if num==0:
    print(0)
# Leap Year Checker
year = int(input("year\n"))
isleap=False
if year%4==0:
    isleap=True
    if year%100==0:
        isleap = False
        if year%400==0:
            isleap = True
if isleap:
    print("leap")
else:
    print("not leap")
#Leap Year Checker
grade=int(input("enter grade\n"))
if 90<grade<100:
    print("A")
if 90 < grade < 100:
    print("B")
if 80 < grade < 89:
    print("C")
if 70 < grade < 79:
    print("D")
if grade < 69:
    print("F")