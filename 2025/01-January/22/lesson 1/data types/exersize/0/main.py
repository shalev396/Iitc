#1
me={


    "email":"Shalev396@gmail.com",
    "first_name":"Shalev",
    "last_name":"Ben Moshe",
    "phone_number":"0544809493",
    "age":21
}
del me["last_name"]
hate=("homework","school")
Hobby=["gaming","movies"]
me[hate]=Hobby
print(me)
set_shalev={"gaming","movies","problem solving"}
set_liav={"football","bauling","problem solving"}

print(set_shalev.difference(set_liav))
#2
words=['hello', 'world', 'python']
words1=[words[x].upper() for x in range(len(words)) ]
print(words1)
#3 A
friends_dic={
    "shalev":21,
    "liav":25,
    "kid":15
}
for key,value in friends_dic.items():
    print(key,value)
#3 B
prices ={'apple': 2, 'banana': 1}
for key,value in prices.items():
    print(value)
#3 C
friends_dic["lirone"]=25
for key,value in friends_dic.items():
    print(key,value)
#4 A
nested_list=[[1,2],[3,4]]
for i in range(len(nested_list)):
    for j in range(len(nested_list[i])):
        print(nested_list[i][j])
#4 B
nested_dic= {'Book1': {'author': 'A','year': 2020},'Book2': {'author': 'B','year': 2021}}
print(nested_dic['Book1']["author"])
#4 C
nested_dic_student={
    'student1': {
                    'name': 'A',
                    'grade': 100
                },
    'student2': {   'name': 'B',
                    'grade': 90
                }
}
def updateGrade(name,grade):
    for key, value in nested_dic_student.items():
        if value["name"]==name:
            value["grade"]=grade



updateGrade("A",99)
print(nested_dic_student)
#5 A
books=[
    {
        "title":"BaBa",
        "autor":"baba",
        "year":2000
    },
{
        "title":"LaLa",
        "autor":"lala",
        "year":2000
    },
{
        "title":"TaTa",
        "autor":"tata",
        "year":2000
    }
]
for i in range(len(books)):
    print(books[i]["title"])
#5 B
dir_of_list={
    "shalev":["red","green"],
    "Liav":["blue","pink"]
}
show=False
for key, value in dir_of_list.items():
        if  not show:
            print(dir_of_list[key])
            show=True
#5 C
def push(item):
    books.append(item)
push({
        "title":"LaLa",
        "autor":"LaLa",
        "year":2000
    })
print(books)