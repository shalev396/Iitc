--chapter 4
--task 1
select top 1 LastName
from Employees
group by LastName 
order by LastName asc
--task 2
select top 1 FirstName
from Employees
group by FirstName 
order by FirstName desc
--task 3
select COUNT(EmployeeID)
from Employees
group by EmployeeID
--task 4
select COUNT(Region)
from Employees
--task 5
select avg(UnitPrice) 
from Products
--task 6
select min(UnitPrice) as 'min',avg(UnitPrice) as 'avg' 
from Products
--task 7
select MIN(BirthDate) as 'min' ,MAx(BirthDate) as'max'
from Employees
--task 8
select count(DISTINCT CompanyName)
from Customers
--task 9
SELECT COUNT(DISTINCT CustomerID) AS UniqueCustomerCount
FROM Orders;
--task 10
select CategoryID, max(UnitPrice),min(UnitPrice),avg(UnitPrice)
from Products
group by CategoryID 
--task 11
select SupplierID, MAX(UnitPrice)
from Products
group by SupplierID
--task 12
select SupplierID, avg(UnitPrice)
from Products
group by SupplierID
order by avg(UnitPrice) desc
--task 13
select count(CustomerID) as 'customersAmount',Country,City
from Customers
group by Country,City
--task 14
select avg(UnitPrice)
from Products
where UnitPrice>40
group by CategoryID
--task 15
select COUNT(CustomerID)
from Customers
where city ='LONDON'
group by City
--task 16
select CategoryID ,SupplierID, max(UnitPrice),min(UnitPrice),avg(UnitPrice)
from Products
GROUP BY CategoryID, SupplierID;
--task 17
select MAX(UnitPrice),CategoryID
from Products
where UnitPrice>40
group by CategoryID
--task 18
select avg(UnitPrice),SupplierID
from Products
where UnitPrice>40
group by SupplierID
--task 19
select sum(UnitsOnOrder) as UnitsOnOrderSum,sum(UnitsInStock) as UnitsInStockSum,CategoryName
from Products
join Categories ON Products.CategoryID = Categories.CategoryID
where UnitsOnOrder>=100 and CategoryName like '%C%'
group by CategoryName
order by  CategoryName asc
--task 20
SELECT Region, City, CustomerCount
FROM (
    SELECT Region, City, COUNT(*) AS CustomerCount
    FROM Customers
    WHERE (City LIKE '%M%' OR City LIKE '%L%')
      AND Region IS NOT NULL
    GROUP BY Region, City
) AS Subquery
WHERE CustomerCount >= 2
ORDER BY Region, City;
--task 21
select LastName ,count(Orders.EmployeeID),max(OrderDate)
from Employees
join Orders on Orders.EmployeeID=Employees.EmployeeID
--where count(Orders.EmployeeID)>100
group by LastName
