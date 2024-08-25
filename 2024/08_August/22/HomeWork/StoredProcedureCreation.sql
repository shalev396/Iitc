--task 1 Qurey to Stored Procedure
CREATE PROCEDURE GetItemsByCode
    @VarCode INT = NULL  -- Declare the parameter with default NULL
AS
BEGIN
    -- Check if @VarCode is NULL
    IF @VarCode IS NULL
    BEGIN
        -- Select all items if @VarCode is NULL
        SELECT *
        FROM Items
        ORDER BY Code ASC;
    END
    ELSE
    BEGIN
        -- Select items with a specific Code if @VarCode is not NULL
        SELECT *
        FROM Items
        WHERE Code = @VarCode;
    END
END;
--Stored Procedure in use
EXEC GetItemsByCode;
EXEC GetItemsByCode @VarCode = 1002;

--task 2 Qurey to Stored Procedure
CREATE PROCEDURE GetOrdersWithSorting
    @VarSortBy INT = 1,  -- 1=Status, 2=Date, 3=OrderNo
    @VarStatus VARCHAR(255) = 'closed', -- Status to filter by
    @VarDate1 DATE = '2024-08-01', -- Start date for filtering by date range
    @VarDate2 DATE = '2024-08-03', -- End date for filtering by date range
    @VarOrderNo INT = 101 -- OrderNo for filtering by specific order
AS
BEGIN
    -- If sorting by Status
    IF @VarSortBy = 1
    BEGIN
        SELECT [Date], Items.UnitPrice * ExOrders.Quant AS OrderSum, ExOrders.Code, Quant, [Status]
        FROM ExOrders 
        JOIN Items ON Items.Code = ExOrders.Code
        WHERE [Status] = @VarStatus;
    END

    -- If sorting by Date
    IF @VarSortBy = 2
    BEGIN
        SELECT [Date], Items.UnitPrice * ExOrders.Quant AS OrderSum, ExOrders.Code, Quant, [Status]
        FROM ExOrders 
        JOIN Items ON Items.Code = ExOrders.Code
        WHERE [Date] BETWEEN @VarDate1 AND @VarDate2;
    END

    -- If sorting by OrderNo
    IF @VarSortBy = 3
    BEGIN
        SELECT [Date], Items.UnitPrice * ExOrders.Quant AS OrderSum, ExOrders.Code, Quant, [Status]
        FROM ExOrders 
        JOIN Items ON Items.Code = ExOrders.Code
        WHERE OrderNo = @VarOrderNo;
    END
END;
--Stored Procedure in use
EXEC GetOrdersWithSorting @VarSortBy = 1, @VarStatus = 'closed';
EXEC GetOrdersWithSorting @VarSortBy = 2, @VarDate1 = '2024-08-01', @VarDate2 = '2024-08-03';
EXEC GetOrdersWithSorting @VarSortBy = 3, @VarOrderNo = 101;
EXEC GetOrdersWithSorting @VarSortBy = 1, @VarStatus = 'closed',@VarDate1 = '2024-08-01', @VarDate2 = '2024-08-03',@VarOrderNo = 101;
--task 3
CREATE PROCEDURE GetCustomerSubscriptions
  @VarCustID int =1
AS
BEGIN
select Customers.CustID,CustName,CustStatus,OrderNo,Status,Code,Quant,Freq
	from Customers 
	join Subscription on Subscription.CustID=Customers.CustID
	where(Customers.CustID=@VarCustID)
END
EXEC GetCustomerSubscriptions @VarCustID=1
--task 4
CREATE PROCEDURE GetCreditandDebitByDate
   @VarDateStart Date ='2024-08-22'
AS
BEGIN
select Accounting.[Date],
Invoices.TotAmount,
Invoices.OrderNo,
Invoices.[Date],
ReceiptNo,
Receipt.PaidAmt,
CASE WHEN Accounting.CrdtDebt = 'credit' THEN TotAmount ELSE 0 END AS credit,-- used w3d school
CASE WHEN Accounting.CrdtDebt = 'debit' THEN TotAmount ELSE 0 END AS debit-- used w3d school
from Accounting
join Invoices on Invoices.InvNo=Accounting.InvNo
join Receipt on Receipt.InvNo=Invoices.InvNo
join ExOrders on Invoices.OrderNo=ExOrders.OrderNo
where Accounting.[Date]>@VarDateStart
UNION ALL
SELECT 
    NULL AS [Date],
    NULL AS TotAmount,
    NULL AS OrderNo,
    NULL AS [Date],
    NULL AS ReceiptNo,
    NULL AS PaidAmt,
    SUM(CASE WHEN Accounting.CrdtDebt = 'credit' THEN TotAmount ELSE 0 END) AS credit,
    SUM(CASE WHEN Accounting.CrdtDebt = 'debit' THEN TotAmount ELSE 0 END) AS debit
FROM 
    Accounting
JOIN 
    Invoices ON Invoices.InvNo = Accounting.InvNo
WHERE 
    Accounting.[Date] > @VarDateStart;

END
EXEC GetCreditandDebitByDate @VarDateStart ='2024-08-22'
--task 5
CREATE PROCEDURE GetAllExOrderUnclamedAndUnsent
as
BEGIN
select [Date],ExOrders.SuppDate,ExOrders.Quant*UnitPrice,Status
from ExOrders
join Items on ExOrders.Code=Items.Code
where (Status ='not claimed' or Status ='not sent')
order by SuppDate 
END
EXEC GetAllExOrderUnclamedAndUnsent