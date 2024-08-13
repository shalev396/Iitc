--chapter 3 join
--task 1
select ProductName,CategoryName
from Products,Categories
--task 2
select ProductName,CompanyName
from Products,Suppliers
--task 3
select OrderID,CompanyName
from Orders,Customers
where CompanyName like 'a%'
--task 4
select RegionDescription,TerritoryDescription
from Region,Territories
--task 5
select ProductName,UnitPrice,CategoryName
from Products,Categories
where UnitPrice>50
--task 6
select ProductID,UnitPrice,SupplierID
from Products,Categories
where SupplierID =3
--task 7
select ProductID,UnitPrice,CategoryName
from Products,Categories
where CategoryName like '%a%'
--task 8
select ProductName,CategoryName,CompanyName
from Products,Categories,Suppliers
--task 9
select ProductName,Description,Suppliers.City
from Products,Categories,Suppliers
where Suppliers.City='TOKYO' and  Suppliers.City='London'
--task 10
select ProductID,Description,Country
from Products,Categories,Suppliers
where Country like 'a%'
--task 11
select CompanyName,OrderID
from Customers,Orders

--task 12
select OrderID,OrderDate,ShipAddress,Customers.CustomerID,CompanyName,Phone
from Orders,Customers
where (OrderDate> '1996-1-1 00:00:000' and OrderDate<'1996-12-31 00:00:000')and(Customers.CustomerID like 'A%' or Customers.CustomerID like 'c%' )
--task 13
select OrderID,OrderDate,ShipAddress,Customers.CustomerID,CompanyName,Phone,FirstName,LastName
from Orders,Customers,Employees
where (OrderDate> '1996-1-1 00:00:000' and OrderDate<'1996-12-31 00:00:000')and(Customers.CustomerID like 'A%' or Customers.CustomerID like 'c%' )
order by OrderDate desc