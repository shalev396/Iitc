--chapter 2 where
--task 1
select FirstName,LastName
from Employees
where EmployeeID=3
--task 2
select ProductName,UnitPrice
from Products
where ProductID=4
--task 3
select ProductID,ProductName,UnitPrice
from Products
where UnitPrice>20
order by UnitPrice asc
--task 4
select FirstName+' '+LastName as FullName,BirthDate,EmployeeID,ReportsTo
from Employees
where EmployeeID=8
--task 5
select FirstName+' '+LastName as FullName,BirthDate,EmployeeID
from Employees
where City='london'
--task 6
select*
from Products
where UnitPrice between 50 and 100
--task 7
select ProductName,UnitPrice
from Products
where UnitPrice between 21.35 and 43.9
order by UnitPrice desc
--task 8
select EmployeeID,LastName,HireDate
from Employees
where City='TACOMA' or City='LONDON'
--task 9
select EmployeeID,FirstName,LastName
from Employees
where EmployeeID=5 or EmployeeID=2 or EmployeeID=1 
--task 10
select FirstName,LastName,BirthDate
from Employees
where EmployeeID!=4 and EmployeeID!=5 and EmployeeID!=7 
--task 11
select ProductID,ProductName,CategoryID
from Products
where CategoryID!=4 and CategoryID!=2 and CategoryID!=7 
order by CategoryID asc
--task 12
select FirstName,Region
from Employees
where Region is not null
--task 13
select top 3 ProductName,UnitPrice
from Products
order by UnitPrice desc
--task 14
select OrderID,OrderDate,RequiredDate
from Orders
where RequiredDate > '1996-10-1 00:00:000'
--task 15
select EmployeeID,LastName,ReportsTo
from Employees
where ReportsTo is not null
order by ReportsTo asc
--task 16
select *
from Categories
where CategoryName like '%o%'
--task 17
select CompanyName,Country
from Customers
where CompanyName like '%A'
--tark 18
select ProductName,CategoryID
from Products
where ProductName like '%A_'
--task 19
select OrderID,CustomerID,EmployeeID,OrderDate
from Orders
where OrderDate > '1997-4-1 00:00:000'
order by OrderDate asc ,CustomerID desc
--task 20
select CustomerID,CompanyName,Country,Phone,Region
from Customers
where (Country like 'N%'or Country like 'F%'or Country like 'G%')and Region is null
--task 21
select EmployeeID,FirstName+' '+LastName as Fullname,BirthDate,Country
from Employees
where LastName like '%K%' or LastName like '%D%'or (BirthDate>'1963-1-1 00:00:000'and BirthDate<'1963-12-31 00:00:000')
--task 22
select ProductName,UnitPrice,SupplierID
from Products
where UnitPrice>30 and (SupplierID=1 or SupplierID=3)
--task 23
select OrderID,EmployeeID,OrderDate,RequiredDate,ShipName
from Orders
where EmployeeID=7 and(ShipName='QUICK-Stop'or ShipName='Du mond entire' or ShipName='Eastern Connection')and RequiredDate-OrderDate>20
--task 24
select ProductID,ProductName,UnitPrice,SupplierID
from Products
where (SupplierID=16 or SupplierID=8 or SupplierID=21 or UnitPrice<10 )and UnitsInStock between 10 and 100
order by UnitPrice asc
