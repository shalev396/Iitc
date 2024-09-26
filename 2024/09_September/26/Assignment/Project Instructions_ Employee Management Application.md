### **Project Instructions: Employee Management Application**

#### **Overview**

In this project, you will create a **frontend-only** Employee Management application that follows the **MVC (Model-View-Controller)** architecture. The data will be stored in **localStorage**, and users can perform **CRUD (Create, Read, Update, Delete)** operations on employees.

### **Features:**

1. **View Employees:** Display a list of all employees.  
2. **Add Employee:** Add new employees to the list..  
3. **Delete Employee:** Remove an employee from the list.  
4. **Edit Employee:** Edit employee details  
5. **Filter Employees:** Allow filtering employees by department.

### **Employee Object Structure**

Each employee will have the following properties:

* **First Name** (string)  
* **Last Name** (string)  
* **Age** (number)  
* **Start Date** (string, date in YYYY-MM-DD format)  
* **Department** (string)  
* **Salary** (number)

**View:**

* Displays the list of employees and provides UI for adding, editing, and deleting employees.

**Controller:**

* Handles user actions like adding, editing, deleting, and filtering employees.

**Employee Service (Model):**

* Contains logic for interacting with `localStorage` and performing CRUD operations.

\[  
  {  
    "firstName": "Alice",  
    "lastName": "Smith",  
    "age": 28,  
    "startDate": "2020-06-15",  
    "department": "Marketing",  
    "salary": 50000  
  },  
  {  
    "firstName": "John",  
    "lastName": "Doe",  
    "age": 35,  
    "startDate": "2018-01-25",  
    "department": "Sales",  
    "salary": 60000  
  },  
  {  
    "firstName": "Emma",  
    "lastName": "Johnson",  
    "age": 42,  
    "startDate": "2015-03-12",  
    "department": "IT",  
    "salary": 70000  
  },  
  {  
    "firstName": "Michael",  
    "lastName": "Brown",  
    "age": 30,  
    "startDate": "2019-07-01",  
    "department": "Finance",  
    "salary": 55000  
  },  
  {  
    "firstName": "Sophia",  
    "lastName": "Williams",  
    "age": 26,  
    "startDate": "2021-05-20",  
    "department": "HR",  
    "salary": 45000  
  },  
  {  
    "firstName": "David",  
    "lastName": "Taylor",  
    "age": 39,  
    "startDate": "2017-09-14",  
    "department": "Operations",  
    "salary": 64000  
  },  
  {  
    "firstName": "Laura",  
    "lastName": "White",  
    "age": 32,  
    "startDate": "2016-11-03",  
    "department": "Logistics",  
    "salary": 50000  
  }  
\]

