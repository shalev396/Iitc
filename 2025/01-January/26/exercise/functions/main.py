#calculate factorial
def factorial_of(num):
    sums = 1
    for num in range(num, 1, -1):
        sums *= num
    return sums
print(factorial_of(5))
#calculate discount
def discount(total, presentage=15):
    total *= (1 - (presentage / 100))
    return total
print(discount(100, 10))
print(discount(200))
#greets list of names
def greetings(*names):
    return f"hello {", ".join(names)}!"
print(greetings("Shalev", "Nathan", "Liav"))
#display product details in prettier JSON format
def product_str(**kwargs):
    log="{\n"
    for key,value in kwargs.items():
        key= '"' +key+ '"'
        value = '"' + value + '"'
        log+=f"    {key} : {value} \n"
    log+="}"
    return log
print( product_str(name="iphone",storage="1TB",price="1999$"))
#return only even numbers from list from 1 to 10
print(list(filter(lambda x:x%2==0,[1,2,3,4,5,6,7,8,9,10])))
