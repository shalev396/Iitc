--chapter 5 subqury
--task 1
SELECT ProductName, UnitPrice
FROM Products
WHERE  UnitPrice < (SELECT UnitPrice
		            FROM Products
		            WHERE ProductID =8)
--task 2
select ProductName,ProductID
from Products
where UnitPrice>(select UnitPrice 
				 from Products 
				 where ProductName='Tofu')
--task 3
select FirstName,HireDate
from Employees
where EmployeeID>(select EmployeeID 
				  from Employees 
				  where EmployeeID=6)
--task 4
select ProductName,ProductID,UnitPrice
from Products
where UnitPrice>(select avg(UnitPrice)
				 from Products)
--task 5
select ProductName,UnitsInStock
from Products
where UnitsInStock<(select min(UnitsInStock)
					from Products
					where CategoryID=5)
--task 6
select*
from Products
where CategoryID=(select CategoryID
				  from Products
				  where ProductName='chai')
				  and ProductName!='chai'
--task 7
select ProductName,UnitPrice,CategoryID
from Products
where UnitPrice=(select max(UnitPrice)
				 from Products
				 where CategoryID=5)
--task 8
select ProductName,UnitPrice,CategoryID
from Products
where UnitPrice>(select max(UnitPrice)
				 from Products
				 where CategoryID=5)
--task 9
select ProductName,UnitPrice,CategoryID
from Products
where UnitPrice<(select min(UnitPrice)
				 from Products
				 where CategoryID=5)
--task 10
select OrderID,OrderDate
from Orders
where ShipCountry=(select ShipCountry
					from Orders
					where ShipCountry='germany' or ShipCountry='france' or ShipCountry='sweeden')
					and YEAR(MAX(Orders.OrderDate))=1997