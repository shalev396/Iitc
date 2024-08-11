--task 1
select OrderID,
OrderDate,
CustomerID,
Freight
from Orders;
--task 2
select EmployeeID,FirstName+' '+ LastName as address
from Employees
--task 3
select TOP 2 EmployeeID,City+' '+ Country as address
from Employees
--task 4
select ProductID,ProductName,UnitPrice,UnitPrice+2 as NewPrise
from Products
--task 5
select OrderID, ProductID,Quantity, Quantity+2 as Quantity,UnitPrice,UnitPrice*3 as NewUnitPrice
from [Order Details]
--task 5
select distinct EmployeeID,TerritoryID
from EmployeeTerritories
--task 6
select *
from EmployeeTerritories
where EmployeeID= 2 or EmployeeID >3 
where EmployeeID= 2 not between EmployeeID =3 ;
