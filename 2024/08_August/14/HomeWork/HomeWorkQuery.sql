--chapter 1
--task 1
no
--task 2
a: needs from (table)
b: needs, bettween coloms
--task 3
a,b
--task 4
select FirstName,Title
from Employees
--task 5
select Title,FirstName
from Employees
--task 6
select distinct Title
from Employees
--task 7
select *
from Orders
--task 8
select Country,Region,HireDate,FirstName
from Employees
--chapter 2
--task 1
select FirstName
from Employees
where FirstName like 'e%'
--task 2
select City,FirstName
from Employees
where city ='london' and FirstName='robert'
--task 3
select ProductName,UnitPrice,UnitsInStock,(UnitsInStock-UnitsOnOrder)*UnitPrice
from Products
--task 4
bettween 10 to 30
--task 5
select ProductID,ProductName,UnitPrice
from Products 
--task 6
select CustomerID,City+' '+Address as 'fullAddress'
from Customers
--task 7
select *
from Customers
where Country='uk'
--task 8
select *
from Products 
where Discontinued=0 and UnitsInStock=0
--task 9 a
empty
--task 9 b
bundy,meza,bulher
--task 10
select top 1 firstname+' '+lastname ,st
from friends
--task 11
select top 3 firstname+', '+lastname ,phone
from friends
--chapter 3
--task 1
COUNT, MAX, MIN, AVG, SUM, DISTINCT
--task 2
yes
--task 3
no
--task 4
6 rows
--task 5
'yyyy-mm-dd hh:mm:ss.ms'
--task 6
TIMESTAMP
--task 7
ages get updated 
--task 8
select UnitPrice
from [Order Details]
--task 9
select sqrt(EmployeeID)
from Employees
--task 10
select DATEDIFF(day,Orders.OrderDate,Orders.ShippedDate) AS duration
from Orders
--task 11
SELECT CONVERT(DATETIME, '2009-07-27', 102);
--task 12
select LOWER(FirstName),UPPER(LastName)
from Employees
where EmployeeID between 3 and 5
--task 13
select CategoryName,Description,CHARINDEX('%i%', Description) 
from Categories
--task 14
select ProductID,ProductName,REPLACE(ProductName, 'e', '-')
from Products
--task 15
select MIN(LastName) ,Max(FirstName)
from Employees
--task 16
select COUNT(EmployeeID)
from Employees
--task 17 
select COUNT(Region)
from Employees
--task 18
select avg(UnitPrice)
from Products
--task 19
select COUNT(distinct CustomerID)
from Orders
--20
select top 10 *
from Customers
--task 21
select top 10 PERCENT *
from Customers
--chapter 4
--task 1
to group rows by colom
--task 2
no
--task 3
idk
--task 4 a
no
--task 4 b
no
--task 5
select ProductName,ProductID
from Products
order by ProductName desc
--task 6
select CategoryID,avg(UnitPrice)
from Products
group by CategoryID
--task 7
select CategoryID,min(UnitPrice),max(UnitPrice)
from Products
group by CategoryID
--task 8
select CompanyName,City
from Customers
where City='london'or City like 'ma%'
order by CompanyName asc
--task 9
select CompanyName,Region
from Customers
where Region is not null
order by Region asc
--task 10
select sum(UnitPrice),CategoryID,UnitsInStock
from Products
where UnitPrice>50 and CategoryID>2
GROUP BY CategoryID, UnitsInStock
order by UnitsInStock desc
--task 11
select top 10 PERCENT *
from Customers
order by CustomerID desc
--chapter 5
--task 1
50000
--task 2
INNER JOIN
--task 3
4 
--task 4
not limited
--task 5
select ProductName,Categories.CategoryID
from Products
join Categories on products.CategoryID=Categories.CategoryID
--task 6
select ProductName,CategoryName
from Products
join Categories on Products.CategoryID=Categories.CategoryID
--task 7
select FirstName,LastName,EmployeeTerritories.TerritoryID,TerritoryDescription
from Employees
join EmployeeTerritories on Employees.EmployeeID=EmployeeTerritories.EmployeeID
join Territories on EmployeeTerritories.TerritoryID=Territories.TerritoryID
--task 8
select orders.CustomerID,OrderID,ShippedDate,ContactName,City,phone
from Orders
left join Customers on Orders.CustomerID=Customers.CustomerID
where OrderID>10700
order by CustomerID desc
--task 9
select Customers.CustomerID,City,UnitPrice+5
from Customers
join Orders on Customers.CustomerID=Orders.CustomerID
join [Order Details] on [Order Details].OrderID=Orders.OrderID
where City='london'
--task 10
select ProductID,UnitPrice,SupplierID,CategoryName
from Products
join Categories on Products.CategoryID=Categories.CategoryID
where CategoryName like 'a%'
--task 11
select ProductName,Description,City
from Products
join Categories on Products.CategoryID=Categories.CategoryID
join Suppliers on Suppliers.SupplierID=Products.SupplierID
where City='london' or City='tokyo'
--task 12
select CompanyName,OrderID
from Customers
LEFT join Orders on Customers.CustomerID=Orders.CustomerID
--task 13
select e.FirstName,e.LastName,m.FirstName,m.LastName
FROM Employees E
LEFT JOIN Employees M ON E.ReportsTo = M.EmployeeID;
--task 14
select UnitPrice,Products.SupplierID,ContactName
from Products
join Suppliers on Suppliers.SupplierID=Products.SupplierID