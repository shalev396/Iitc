class Student :
    def __init__(self,name,):
        self.name=name
        self.grades=[]
    def add_grade(self,grade):
        self.grades.append(grade)
    def get_average(self):
        return sum(self.grades) / len(self.grades)
student1=Student("shalev")
student1.add_grade(97)
student1.add_grade(96)
student1.add_grade(95)
print(student1.get_average())