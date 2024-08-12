select ProductID,ProductName,UnitPrice
from Products
where ProductName like '_e%'-- 1(amunt of "_" char and  then "e"
--where ProductName like 'C%e'-- start with "C" and ends with "e"
--where ProductName like 'C%' -- start with "C"
--where ProductName like '%C'-- end with "C"
--where ProductName like '%Ca%'--include Ca
--where ProductName like 'chai'
--where ProductName not in('chai','chang')
--where ProductName is not null
--where ProductName in('chai','chang')
--where ProductName='chai' or ProductName= 'chang'
--order by UnitPrice desc
--order by 3 asc (3 is the collom number)
--order by UnitPrice asc
--order by UnitPrice desc
--where UnitPrice >10 or UnitPrice<20
--where UnitPrice in(10,20)


--run order
--from
--where
--select
--select OrderID,[Order Details].UnitPrice,[Order Details].ProductID,[Order Details].
--from Orders
--task1
select *
from Orders
where ShipCountry ='USA'
--task 2
select ProductID,ProductName,UnitPrice+9,CategoryID
from Products
where ProductName like '%C%'
--task 3
select CategoryID,CategoryName,Description
from Categories
where CategoryID >3
order by CategoryID desc
--task 4
select SUM(UnitPrice) as 'sum',MIN(UnitPrice) as 'min',MAX(UnitPrice) as 'max', AVG(UnitPrice) as 'avg',COUNT(UnitPrice) as 'cout'
from Products
--task 5
select AVG(UnitPrice) as 'avg',SUM(UnitPrice) as 'sum',MIN(UnitPrice) as 'min',MAX(UnitPrice) as 'max',COUNT(UnitPrice) as 'cout'
from [Order Details]
select AVG(UnitPrice) as 'avg',SUM(UnitPrice) as 'sum',MIN(UnitPrice) as 'min',MAX(UnitPrice) as 'max',COUNT(UnitPrice) as 'cout'
from Products
--task 6
select *
from Customers inner join Orders
on Customers.CustomerID=orders.CustomerID
where Country='mexico'
select *
from Products inner join Categories
on Products.CategoryID=Categories.CategoryID
--task 7
select FirstName ,LastName,City,Employees.EmployeeID,OrderID,OrderDate
from Employees join Orders
 on Employees.EmployeeID=Orders.EmployeeID
	where Employees.EmployeeID=3 or Employees.EmployeeID=5 or Employees.EmployeeID=6
-- task 8
