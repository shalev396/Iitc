#1
colors=["red","green","blue","pink","white"]
print(colors[0],colors[-1])
#2
colors.append("yellow")
colors.pop(1) #index 1 is the second one
print(colors)
#3
nums=[1,2,3,4,5,6,7,8,9,10]
for i in range(len(nums)):
    if nums[i]%2==0:
        print(nums[i])
#4
food=['apple', 'banana', 'cherry']
food.reverse()
print(food)
#5
nums1=[5, 3, 5, 7,5]
print(nums1.count(5))
list1=[1, 2]
#6
list2=[4,5]
list1.extend(list2)
print(list1)
#7
sort=[4, 2, 8, 1]
sort.sort()
print(sort)
sort.reverse()
print(sort)
#8
fruit=("banana","apple","orange")
print(fruit[1])
#9
# fruit[1]="idk"
# print(fruit)
#10
tuples=(10, 20, 30)
lists=list(tuples)
lists.append(40)
tuples1=tuple(lists)
print(tuples1)
#11
student={
    "name":"shalev",
    "age":21,
    "grade":100
}
print(student["name"])
#12
student["email"]="shalev396@gmail.com"
print(student)
#13
del student["grade"]
print(student)
#14
items={'a': 1, 'b': 2, 'c': 3}
print(items.keys())
print(items.values())
print(items)
#15
items.update({"d":4})
print(items)
#16
obj1={'x': 10}
obj2={'y': 20}
obj1.update(obj2)
#17
print(obj1)
print(obj1.keys())
#18
sets={1,2,3}
sets.add(4)
print(sets)
#19
sets.remove(2)
print(sets)
#20
set1= {1, 2, 3}
set2= {3, 4, 5}
print(set1.intersection(set2))
#21
set3= {1, 2, 3}
set4= {3, 4, 5}
print(set3.intersection(set4))
#22
print(len(['apple','banana', 'apple']))
#23
nested_dic= {'Book1': {'author': 'A','year': 2020}}
print(nested_dic['Book1']["author"])
#24
nested_list=[[1, 2], [3, 4]]
for i in range(len(nested_list)):
    for j in range(len(nested_list[i])):
        print(nested_list[i][j])
#25
friends_dic={
    "shalev":21,
    "liav":25,
    "kid":15
}
for key,value in friends_dic.items():
    if(value>18):
        print(key)