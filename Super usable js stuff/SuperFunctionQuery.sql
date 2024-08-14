SELECT TOP 10 PERCENT -- Limits the query results to the top 10% of the sorted rows
    E.LastName, -- Retrieves the last name of the employee
    E.Region, -- Retrieves the region of the employee
    COUNT(O.OrderID) AS TotalOrders, -- Counts the total number of orders placed by the employee
    SUM(OD.Quantity * OD.UnitPrice) AS TotalSales, -- Sums the total sales amount (quantity * unit price)
    AVG(OD.Quantity) AS AvgQuantity, -- Calculates the average quantity of items ordered
    MAX(O.OrderDate) AS LastOrderDate, -- Finds the most recent order date for each employee
    MIN(O.OrderDate) AS FirstOrderDate, -- Finds the earliest order date for each employee
    VAR(OD.Quantity) AS QuantityVariance, -- Computes the variance of quantities ordered
    STDEV(OD.Quantity) AS QuantityStdev, -- Computes the standard deviation of quantities ordered
    ABS(SUM(OD.Quantity * OD.UnitPrice) - 10000) AS AbsDiffFromTarget, -- Computes the absolute difference from a target sales amount
    CEILING(AVG(OD.Quantity)) AS RoundedUpAvgQuantity, -- Rounds up the average quantity
    FLOOR(AVG(OD.Quantity)) AS RoundedDownAvgQuantity, -- Rounds down the average quantity
    ROUND(AVG(OD.UnitPrice), 2) AS RoundedAvgPrice, -- Rounds the average unit price to 2 decimal places
    EXP(1) AS EulersNumber, -- Returns the value of e (Euler's number)
    SQRT(MAX(OD.Quantity)) AS SqrtOfMaxQuantity, -- Computes the square root of the maximum quantity
    SIGN(SUM(OD.Quantity * OD.UnitPrice) - 10000) AS SalesSign, -- Returns the sign of the difference from a target sales amount
    CHAR(65) AS CharA, -- Returns the character for ASCII code 65 ('A')
    ASCII('A') AS AsciiValueOfA, -- Returns the ASCII value of the character 'A'
    UPPER(E.LastName) AS LastNameUpper, -- Converts the last name to uppercase
    LOWER(E.LastName) AS LastNameLower, -- Converts the last name to lowercase
    REPLICATE('*', 5) AS FiveStars, -- Repeats the '*' character 5 times
    SPACE(3) AS ThreeSpaces, -- Returns a string of three spaces
    LEN(E.LastName) AS LastNameLength, -- Returns the length of the employee's last name
    LTRIM('  Hello  ') AS TrimmedLeft, -- Trims leading spaces from the string
    RTRIM('  Hello  ') AS TrimmedRight, -- Trims trailing spaces from the string
    REPLACE(E.Title, 'Sales', 'Business') AS UpdatedTitle, -- Replaces 'Sales' with 'Business' in the employee's title
    SUBSTRING(E.LastName, 1, 3) AS LastNameStart, -- Extracts the first 3 characters of the employee's last name
    PATINDEX('%a%', E.LastName) AS PositionOfA, -- Returns the starting position of 'a' in the last name
    CHARINDEX('a', E.LastName) AS CharIndexOfA, -- Returns the position of 'a' in the last name
    CAST(MAX(O.OrderDate) AS DATE) AS OrderDateOnly, -- Converts the most recent OrderDate to just the date
    CAST(MAX(O.OrderDate) AS TIME) AS OrderTimeOnly, -- Converts the most recent OrderDate to just the time
    CAST(MAX(O.OrderDate) AS DATETIME) AS FullOrderDateTime, -- Returns the full datetime of the most recent order
    GETDATE() AS CurrentDateTime, -- Returns the current date and time
    DATEADD(day, 10, MAX(O.OrderDate)) AS TenDaysLater, -- Adds 10 days to the most recent order date
    DATEDIFF(day, MAX(O.OrderDate), GETDATE()) AS DaysSinceOrder, -- Calculates the number of days since the most recent order date
    DATEPART(month, MAX(O.OrderDate)) AS OrderMonth, -- Extracts the month from the most recent order date
    DATENAME(month, MAX(O.OrderDate)) AS OrderMonthName, -- Returns the name of the month from the most recent order date
    DAY(MAX(O.OrderDate)) AS OrderDay, -- Extracts the day from the most recent order date
    MONTH(MAX(O.OrderDate)) AS OrderMonthNum, -- Extracts the month number from the most recent order date
    YEAR(MAX(O.OrderDate)) AS OrderYear, -- Extracts the year from the most recent order date
    STR(ROUND(AVG(OD.UnitPrice), 2), 10, 2) AS FormattedPrice, -- Converts the average unit price to a string with 2 decimal places
    CONVERT(VARCHAR(10), MAX(O.OrderDate), 120) AS ISODate, -- Converts the most recent order date to an ISO formatted string
    SUSER_NAME() AS CurrentUserName, -- Returns the current user name
    ISNULL(E.Region, 'No Region') AS RegionName -- Replaces NULL values in the Region column with 'No Region'
FROM 
    Employees E
JOIN 
    Orders O ON E.EmployeeID = O.EmployeeID -- Joins the Employees table with the Orders table using EmployeeID
JOIN 
    [Order Details] OD ON O.OrderID = OD.OrderID -- Joins the Orders table with the Order Details table using OrderID
GROUP BY 
    E.LastName, E.Title, E.Region -- Groups the results by the employee's last name, title, and region
ORDER BY 
    E.LastName ASC; -- Sorts the results by the employee's last name in ascending order
