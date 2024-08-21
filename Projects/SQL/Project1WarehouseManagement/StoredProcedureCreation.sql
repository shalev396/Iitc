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
