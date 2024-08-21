CREATE DATABASE WarehouseManagementDB;
---------------------------------------create tables
CREATE TABLE Customers (
    CustID INT NOT NULL PRIMARY KEY, 
    CustType INT, -- CustType (1: Private, 2: Business)
    CustStatus VARCHAR(3), -- Status (act = active, frz = frozen, Del = canceled)
    FreezCode INT, -- FreezCode (1: Credit declined, 2: Lost/Stolen credit)
    OverCount INT,
    CustName VARCHAR(255),
    DelivAddrss VARCHAR(255),
    MailAddrss VARCHAR(255), -- Email
    CreditCard VARCHAR(255)
);
CREATE TABLE ExOrders (
    [Date] DATE,
    OrderNo INT NOT NULL PRIMARY KEY, 
    CustID INT,
    Code INT,
    Quant INT,
    Delivery VARCHAR(2), -- Delivery method (dl = delivery, ps = mail, pr = pickup)
    [Address] VARCHAR(255),
    [Status] VARCHAR(20), -- Order status (Open,closed, processed,reserved open,reserved processed,Cancelled,not claimed, not sent)
    SuppDate DATE,
    FOREIGN KEY (CustID) REFERENCES Customers(CustID)
);
CREATE TABLE Invoices (
    [Date] DATE,
    OrderNo INT,
    UnitDesc VARCHAR(255),
    NoUnits INT,
    UnitPrice FLOAT,
    InvNo INT NOT NULL PRIMARY KEY, 
    TotAmount FLOAT, 
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)
);
CREATE TABLE Receipt (
    PymtDate DATE, 
    RecNo INT NOT NULL PRIMARY KEY, 
    InvNo INT,
    OrderNo INT, 
    PaidAmt FLOAT, 
    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo), 
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo)
);
CREATE TABLE Accounting (
    Date DATE, 
    Amount INT, 
    CrdtDebt VARCHAR(255), -- Credit or debit label
    InvNo INT,
    OrderNo INT,
    ReceiptNo INT,
    FOREIGN KEY (InvNo) REFERENCES Invoices(InvNo),
    FOREIGN KEY (OrderNo) REFERENCES ExOrders(OrderNo),
    FOREIGN KEY (ReceiptNo) REFERENCES Receipt(RecNo)
);
CREATE TABLE Subscription (
    OrderNo INT NOT NULL PRIMARY KEY,
    [Status] VARCHAR(3), -- Subscription status (act = active, frz = freeze, Del = canceled)
    CustID INT,
    Code INT,
    Quant INT,
    Freq VARCHAR(3), -- Frequency of delivery (Cx = daily, Dx = every x days, Wx = every x weeks, Mx = every x months)
    Delivery VARCHAR(2),
    NextOrder DATE,
    Expiration DATE,
    FOREIGN KEY (CustID) REFERENCES Customers(CustID),
    FOREIGN KEY (Delivery) REFERENCES DeliveryFees(Delivery)
);--
CREATE TABLE Discounts (
    CustType INT NOT NULL PRIMARY KEY, -- Customer type (1: Private, 2: Business)
    Discnt FLOAT
);
CREATE TABLE Users (
    UserName VARCHAR(255) NOT NULL PRIMARY KEY,
    [Profile] VARCHAR(255),
    FOREIGN KEY ([Profile]) REFERENCES Profiles([profile]) 
);--
CREATE TABLE Profiles (
    [profile] VARCHAR(255) NOT NULL PRIMARY KEY, 
    act BIT -- Active status (1 = active, 0 = inactive)
);
CREATE TABLE Items (
    Code INT NOT NULL PRIMARY KEY,
    [Desc] VARCHAR(255),
    UnitPrice FLOAT, 
    Available INT, 
    Saved INT, 
    Waiting INT,
    Subscript INT,
    Freq VARCHAR(3), -- Restocking frequency (Cx, Dx, Wx, Mx)
    SuppDate DATE,
    OrderPercnt FLOAT 
);
CREATE TABLE StockOrder (
    OrderNo INT NOT NULL PRIMARY KEY, 
    StockDate DATE, 
    Code INT, 
    Descr VARCHAR(255), 
    Quant INT, 
    FOREIGN KEY (Code) REFERENCES Items(Code) 
);
CREATE TABLE DeliveryFees (
    Delivery VARCHAR(2) NOT NULL PRIMARY KEY, -- Delivery method code (dl, ps, pr)
    [Desc] VARCHAR(255), 
    DelFee FLOAT 
);
CREATE TABLE Numbers (
    LastOrder INT, 
    LastSubsc INT, 
    LastStock INT, 
    LastReciept INT, 
    LastInvoice INT, 
    FOREIGN KEY (LastOrder) REFERENCES ExOrders(OrderNo), 
    FOREIGN KEY (LastSubsc) REFERENCES Subscription(OrderNo), 
    FOREIGN KEY (LastStock) REFERENCES StockOrder(OrderNo),
    FOREIGN KEY (LastReciept) REFERENCES Receipt(RecNo), 
    FOREIGN KEY (LastInvoice) REFERENCES Invoices(InvNo) 
);--

-------------------------------------------inserts
INSERT INTO Customers (CustID, CustType, CustStatus, FreezCode, OverCount, CustName, DelivAddrss, MailAddrss, CreditCard)
VALUES
    (1, 1, 'act', NULL, 0, 'John Doe', '123 Main St, City A', 'PO Box 123, City A', '1234567890123456'),
    (2, 2, 'act', NULL, 1, 'ACME Corp.', '456 Business Rd, City B', 'PO Box 456, City B', '9876543210987654'),
    (3, 1, 'frz', 1, 0, 'Jane Smith', '789 Second St, City C', 'PO Box 789, City C', '1111222233334444'),
    (4, 2, 'Del', 2, 0, 'GlobalTech', '987 Corporate Ave, City D', 'PO Box 987, City D', '5555666677778888'),
    (5, 1, 'act', NULL, 2, 'Peter Parker', '321 Spider St, City E', 'PO Box 321, City E', '9999000011112222');
INSERT INTO ExOrders ([Date], OrderNo, CustID, Code, Quant, Delivery, [Address], [Status], SuppDate)
VALUES
    ('2024-08-01', 101, 1, 1001, 10, 'dl', '123 Main St, City A', 'open', '2024-08-10'),
    ('2024-08-02', 102, 2, 1002, 20, 'ps', '456 Business Rd, City B', 'processed', '2024-08-12'),
    ('2024-08-03', 103, 3, 1003, 5, 'pr', '789 Second St, City C', 'cancelled', '2024-08-15'),
    ('2024-08-04', 104, 4, 1004, 15, 'dl', '987 Corporate Ave, City D', 'closed', '2024-08-14'),
    ('2024-08-05', 105, 5, 1005, 25, 'pr', '321 Spider St, City E', 'reserved open', '2024-08-20');
INSERT INTO Invoices ([Date], OrderNo, UnitDesc, NoUnits, UnitPrice, InvNo, TotAmount)
VALUES
    ('2024-08-12', 101, 'Gadgets', 10, 25.50, 10001, 255.00),
    ('2024-08-13', 102, 'Widgets', 20, 10.00, 10002, 200.00),
    ('2024-08-14', 103, 'Tech Tools', 5, 100.00, 10003, 500.00),
    ('2024-08-15', 104, 'Office Supplies', 15, 15.00, 10004, 225.00),
    ('2024-08-16', 105, 'Computer Accessories', 25, 50.00, 10005, 1250.00);
INSERT INTO Receipt (PymtDate, RecNo, InvNo, OrderNo, PaidAmt)
VALUES
    ('2024-08-17', 20001, 10001, 101, 255.00),
    ('2024-08-18', 20002, 10002, 102, 200.00),
    ('2024-08-19', 20003, 10003, 103, 500.00),
    ('2024-08-20', 20004, 10004, 104, 225.00),
    ('2024-08-21', 20005, 10005, 105, 1250.00);
INSERT INTO Accounting (Date, Amount, CrdtDebt, InvNo, OrderNo, ReceiptNo)
VALUES
    ('2024-08-22', 255, 'credit', 10001, 101, 20001),
    ('2024-08-23', 200, 'credit', 10002, 102, 20002),
    ('2024-08-24', 500, 'debit', 10003, 103, 20003),
    ('2024-08-25', 225, 'credit', 10004, 104, 20004),
    ('2024-08-26', 1250, 'debit', 10005, 105, 20005);
INSERT INTO Subscription (OrderNo, [Status], CustID, Code, Quant, Freq, Delivery, NextOrder, Expiration)
VALUES
    (101, 'act', 1, 1001, 10, 'Dx', 'dl', '2024-09-01', '2024-12-31'),
    (102, 'frz', 2, 1002, 20, 'Wx', 'ps', '2024-09-07', '2024-11-30'),
    (103, 'Del', 3, 1003, 5, 'Cx', 'pr', '2024-08-15', '2024-10-15'),
    (104, 'act', 4, 1004, 15, 'Mx', 'dl', '2024-09-15', '2025-01-15'),
    (105, 'act', 5, 1005, 25, 'Dx', 'pr', '2024-09-10', '2024-12-10');
INSERT INTO Discounts (CustType, Discnt)
VALUES
    (1, 5.00),
    (2, 10.00);
INSERT INTO Users (UserName, [Profile])
VALUES
    ('admin', 'admin_profile'),
    ('jdoe', 'standard_profile'),
    ('jsmith', 'business_profile'),
    ('madmin', 'marketing_profile'),
    ('sadmin', 'sales_profile');
INSERT INTO Profiles ([profile], act)
VALUES
    ('admin_profile', 1), 
    ('standard_profile', 1), 
    ('business_profile', 1), 
    ('marketing_profile', 1), 
    ('sales_profile', 1);
INSERT INTO Items (Code, [Desc], UnitPrice, Available, Saved, Waiting, Subscript, Freq, SuppDate, OrderPercnt)
VALUES
    (1001, 'Gadget', 25.50, 100, 5, 0, 10, 'Dx', '2024-08-20', 80.00),
    (1002, 'Widget', 10.00, 200, 10, 5, 20, 'Wx', '2024-08-22', 75.00),
    (1003, 'Tech Tool', 100.00, 50, 2, 0, 5, 'Cx', '2024-08-25', 90.00),
    (1004, 'Office Supply', 15.00, 150, 8, 5, 15, 'Mx', '2024-08-28', 85.00),
    (1005, 'Computer Accessory', 50.00, 75, 10, 5, 25, 'Dx', '2024-09-01', 95.00);
INSERT INTO StockOrder (OrderNo, StockDate, Code, Descr, Quant)
VALUES
    (1001, '2024-08-01', 1001, 'Gadget order', 50),
    (1002, '2024-08-03', 1002, 'Widget order', 100),
    (1003, '2024-08-05', 1003, 'Tech Tool order', 25),
    (1004, '2024-08-07', 1004, 'Office Supply order', 75),
    (1005, '2024-08-09', 1005, 'Computer Accessory order', 50);
INSERT INTO DeliveryFees (Delivery, [Desc], DelFee)
VALUES
    ('dl', 'Standard Delivery', 10.00),
    ('ps', 'Mail Delivery', 5.00),
    ('pr', 'Pickup', 0.00);
INSERT INTO Numbers (LastOrder, LastSubsc, LastStock, LastReciept, LastInvoice)
VALUES
    (105, 105, 1005, 20005, 10005);
---------------------------------------------------delete
DELETE from Customers;
DELETE from ExOrders;
DELETE from Invoices;
DELETE from Receipt;
DELETE from Accounting;
DELETE from Subscription;
DELETE from Discounts;
DELETE from Users;
DELETE from Profiles;
DELETE from Items;
DELETE from StockOrder;
DELETE from DeliveryFees;
DELETE FROM Numbers;

SELECT * FROM Customers;
SELECT * FROM ExOrders;
SELECT * FROM Invoices;
SELECT * FROM Receipt;
SELECT * FROM Accounting;
SELECT * FROM Subscription;
SELECT * FROM Discounts;
SELECT * FROM Users;
SELECT * FROM Profiles;
SELECT * FROM Items;
SELECT * FROM StockOrder;
SELECT * FROM DeliveryFees;
SELECT * FROM Numbers;