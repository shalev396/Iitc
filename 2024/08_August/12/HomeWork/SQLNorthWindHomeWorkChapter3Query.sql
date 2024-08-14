--chapter 3 join
--task 1
select ProductName,CategoryName
from Products join Categories on Products.CategoryID=Categories.CategoryID
--task 2
select ProductName,CompanyName
from Products join Suppliers on Products.SupplierID=Suppliers.SupplierID
--task 3
select OrderID,CompanyName
from Orders join Customers on Orders.CustomerID=Customers.CustomerID
where CompanyName like 'a%'
--task 4
select RegionDescription,TerritoryDescription
from Region join Territories on Region.RegionID=Territories.RegionID
--task 5
select ProductName,UnitPrice,CategoryName
from Products join Categories on Products.CategoryID=Categories.CategoryID	
where UnitPrice>50
--task 6
select ProductID,UnitPrice,SupplierID
from Products join Categories on Products.CategoryID=Categories.CategoryID
where SupplierID =3
--task 7
select ProductID,UnitPrice,CategoryName
from Products join Categories on  Products.CategoryID=Categories.CategoryID
where CategoryName like '%a%'
--task 8
select ProductName,CategoryName,CompanyName
from Products join Categories on Products.CategoryID=Categories.CategoryID join Suppliers on Products.SupplierID=Suppliers.SupplierID
--task 9
select ProductName,Description,Suppliers.City
from Products join Categories on Products.CategoryID=Categories.CategoryID join Suppliers on Products.SupplierID=Suppliers.SupplierID
where Suppliers.City='TOKYO' and  Suppliers.City='London'
--task 10
select ProductID,Description,Country
from Products join Categories on Products.CategoryID=Categories.CategoryID join Suppliers on Products.SupplierID=Suppliers.SupplierID
where Country like 'a%'
--task 11
select CompanyName,OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
--task 12
select OrderID,OrderDate,ShipAddress,Customers.CustomerID,CompanyName,Phone
from Orders join Customers on Orders.CustomerID=Customers.CustomerID
where (OrderDate> '1996-1-1 00:00:000' and OrderDate<'1996-12-31 00:00:000')and(Customers.CustomerID like 'A%' or Customers.CustomerID like 'c%' )
--task 13
select OrderID,OrderDate,ShipAddress,Customers.CustomerID,CompanyName,Phone,FirstName,LastName
from Orders join Customers on Orders.CustomerID=Customers.CustomerID join Employees on Orders.EmployeeID=Employees.EmployeeID
where (OrderDate> '1996-1-1 00:00:000' and OrderDate<'1996-12-31 00:00:000')and(Customers.CustomerID like 'A%' or Customers.CustomerID like 'c%' )
order by OrderDate desc