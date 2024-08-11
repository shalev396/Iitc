-- task 1
select*
from Orders
-- task 2
select*
from Employees
-- task 3
select FirstName,HireDate,Region,Country
from Employees
--task 4
select CustomerID, OrderID,OrderDate
from Orders
--task 5
select ProductID as ProID,ProductName as ProNm,UnitPrice as UntPr
from Products
--task 6
select Address as [add],region as Reg
from Employees
--task 7
select CustomerID,Address+' '+City as Fulladdress
from Customers
--task 8
select FirstName+' '+LastName as Fullname, BirthDate +8 as Bithdate,ReportsTo as #manager
from Employees
--task 9
select distinct city
from Employees
--task 10
select distinct Country
from Employees
--task 11
select distinct Title
from Employees
--task 12
select distinct City,Country
from Customers
--task 13
select FirstName,BirthDate,BirthDate+5 as NewBirthDate
from Employees
--task 14
select ProductName,UnitPrice,UnitPrice+10 as NewUnitPrice
from Products
--task 15
select ProductID,ProductName,UnitPrice, UnitPrice*1.165 as NewUnitPrice,UnitsInStock,UnitsOnOrder,UnitsInStock-UnitsOnOrder as DiffrentStockFromOrder
from Products
--task 16
select ProductID,ProductName,(UnitsInStock-UnitsOnOrder)*UnitPrice as InventoryPrice 
from Products 