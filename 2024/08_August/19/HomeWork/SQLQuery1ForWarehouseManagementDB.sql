-- i study select if and variables by myself

--task 1
DECLARE @VarCode int =1002 --int = 1002
IF @VarCode is null
BEGIN
	select *
    from Items
	order by code asc
END
ELSE IF @VarCode is not null
BEGIN
select *
from Items
where (code=@VarCode) 
END
--task 2
DECLARE @VarSortBy int =1 --1=Status,2=Date,3=OrderNo

DECLARE @VarStatus varchar(255) ='closed'

DECLARE @VarDate1 date ='2024-08-01'
DECLARE @VarDate2 date ='2024-08-03'

DECLARE @VarOrderNo int =101
IF @VarSortBy = 1
BEGIN
select [Date],Items.UnitPrice*ExOrders.Quant as OrderSum,ExOrders.Code,Quant,[Status]
	from ExOrders 
	join Items on Items.Code=ExOrders.Code
	where(Status=@VarStatus)
	END
IF @VarSortBy = 2
BEGIN
    select Date,Items.UnitPrice*ExOrders.Quant as OrderSum,ExOrders.Code,Quant,[Status]
	from ExOrders 
	join Items on Items.Code=ExOrders.Code
	where([Date]  between @VarDate1 and @VarDate2)
END
IF @VarSortBy = 3
BEGIN
    select Date,Items.UnitPrice*ExOrders.Quant as OrderSum,ExOrders.Code,Quant,[Status]
	from ExOrders 
	join Items on Items.Code=ExOrders.Code
	where(OrderNo=@VarOrderNo)
END
--task 3
DECLARE @VarCustID int =1
select Customers.CustID,CustName,CustStatus,OrderNo,Status,Code,Quant,Freq
	from Customers 
	join Subscription on Subscription.CustID=Customers.CustID
	where(Customers.CustID=@VarCustID)
--for testing 
--INSERT INTO Subscription (OrderNo, [Status], CustID, Code, Quant, Freq, Delivery, NextOrder, Expiration)
--VALUES (106, 'act', 1, 1004, 15, 'Mx', 'dl', '2024-09-15', '2025-01-15')
--delete from Subscription
--where OrderNo in(106)

--task 4
DECLARE @VarDateStart Date ='2024-08-22'
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

-- Summary row with totals
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
--task 5
select [Date],ExOrders.SuppDate,ExOrders.Quant*UnitPrice,Status
from ExOrders
join Items on ExOrders.Code=Items.Code
where (Status ='not claimed' or Status ='not sent')
order by SuppDate 
--for testing
--INSERT INTO ExOrders ([Date], OrderNo, CustID, Code, Quant, Delivery, [Address], [Status], SuppDate)
--VALUES
--    ('2024-08-01', 120, 1, 1001, 10, 'dl', '123 Main St, City A', 'not claimed', '2024-08-10'),
--	('2024-08-01', 130, 1, 1001, 10, 'dl', '123 Main St, City A', 'not sent', '2024-08-10')
--delete from ExOrders
--where OrderNo in(120,130)