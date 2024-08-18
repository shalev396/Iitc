--create new database
--CREATE DATABASE WarehouseManagementDB;
--create new tables
--items/Exorder/Invoice/Subscription/customers/Receipt/Accounting/stockOrder/Deliveryfees/discount/number/users/profiles
CREATE TABLE Items (
    Code int NOT NULL PRIMARY KEY,
    [Desc] varchar(255),
    UnitPrice float,
    Available int,
    saved int,
	waiting int,
	Subscript int,
	Freq int,--amount of days
	SuppDate Date,
	OrderPercnt float,
);
CREATE TABLE ExOrders (
    [date] date,
    OrderNo int NOT NULL PRIMARY KEY,
    CustID int FOREIGN KEY REFERENCES Customers(CustID),
    Code int FOREIGN KEY REFERENCES Items(Code),
    Quant int,
	Delivery int  FOREIGN KEY REFERENCES DeliveryFees(Delivery),
	[Address] varchar(255),
	[Status] int,
	SuppDate Date,
);
--ALTER TABLE ExOrders
--ALTER COLUMN [Address] varchar(255);
CREATE TABLE Invoices (
    [Date] date,
    OrderNo int FOREIGN KEY REFERENCES ExOrders(OrderNo),
    UnitDesc varChar(255),
    noUnits int,
    UnitPrice float,
	InvNo int NOT NULL PRIMARY KEY,
	TotAmount int,
);
--ALTER TABLE Invoices
--ALTER COLUMN [UnitPrice] float;
CREATE TABLE Subscription (
    OrderNo int NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES ExOrders(OrderNo),
    [Status] int,
    CustID int FOREIGN KEY REFERENCES Customers(CustID),
    Code int FOREIGN KEY REFERENCES Items(Code),
    Quant int,
	Freq int,
	Delivery int FOREIGN KEY REFERENCES DeliveryFees(Delivery),
	NextOrder Date,
	Expiration Date,
);
CREATE TABLE Customers 
(
    CustID int NOT NULL PRIMARY KEY,
    CustType int FOREIGN KEY REFERENCES Discounts(CustType),
    CustStatus int,
    FreezCode int,
    OverCount int,
	CustName VarChar(255),
	DelivAddrss VarChar(255),
	MailAddrss VarChar(255),
	CreditCard VarChar(255),
);
CREATE TABLE Receipt 
(
    PymtDate date,
    RecNo int NOT NULL PRIMARY KEY,
    InvNo int FOREIGN KEY REFERENCES Invoices(InvNo),
    OrderNo int FOREIGN KEY REFERENCES ExOrders(OrderNo),
    PaidAmt float,
);
CREATE TABLE Accounting 
(
    Date date,
    Amount int,
    CrdtDebt Varchar(255),
    InvNo int FOREIGN KEY REFERENCES Invoices(InvNo),
    OrderNo int FOREIGN KEY REFERENCES ExOrders(OrderNo),
	ReceiptNo int FOREIGN KEY REFERENCES Receipt(RecNo),
);
CREATE TABLE StockOrder 
(
    OrderNo int NOT NULL PRIMARY KEY FOREIGN KEY REFERENCES ExOrders(OrderNo),
    StockDate date,
    Code int FOREIGN KEY REFERENCES Items(Code),
    Descr VarChar(255),
    Quant int,
);
CREATE TABLE DeliveryFees 
(
    Delivery int NOT NULL PRIMARY KEY,
    [Desc] VarChar(255),
    DelFee float,
);
CREATE TABLE Discounts 
(
    CustType int NOT NULL PRIMARY KEY,
    Discnt float,
);
CREATE TABLE Numbers 
(
    LastOrder int FOREIGN KEY REFERENCES ExOrders(OrderNo),
    LastSubsc int FOREIGN KEY REFERENCES Subscription(OrderNo),
    LastStock int FOREIGN KEY REFERENCES StockOrder(OrderNo),
    LastReciept int FOREIGN KEY REFERENCES Receipt(RecNo),
    LastInvoice int FOREIGN KEY REFERENCES Invoices(Invno),
);
CREATE TABLE Users 
(
    UserName VarChar(255) NOT NULL PRIMARY KEY,
    [Profile] VarChar(255) FOREIGN KEY REFERENCES Profiles([profile]),
);
CREATE TABLE Profiles 
(
    [profile] VarChar(255) NOT NULL PRIMARY KEY,
    act bit,
);

DELETE FROM Subscription;
DELETE FROM Receipt;
DELETE FROM StockOrder;
DELETE FROM Accounting;
DELETE FROM Invoices;
DELETE FROM ExOrders;
DELETE FROM Items;
DELETE FROM DeliveryFees;
DELETE FROM Discounts;
DELETE FROM Customers;
DELETE FROM Users;
DELETE FROM Profiles;

--insert data
--/Invoice/Subscription//Receipt/Accounting/stockOrder//discount/number/

INSERT INTO Items (Code, [Desc], UnitPrice,Available,saved,waiting,Subscript,Freq,SuppDate,OrderPercnt)
VALUES (0,'nail',0.50,300,25,50,100,5,'2024/08/20',30);
INSERT INTO Items (Code, [Desc], UnitPrice,Available,saved,waiting,Subscript,Freq,SuppDate,OrderPercnt)
VALUES (1,'Bolt',0.75,200,10,30,100,5,'2024/08/20',20);
INSERT INTO Items (Code, [Desc], UnitPrice,Available,saved,waiting,Subscript,Freq,SuppDate,OrderPercnt)
VALUES (2,'WD-40',2.99,75,20,10,25,7,'2024/08/22',75);
select * from ExOrders
INSERT INTO Profiles([profile],act)
VALUES ('marketing','true');
INSERT INTO Profiles([profile],act)
VALUES ('supplyer','false');
INSERT INTO Profiles([profile],act)
VALUES ('buyer','true');
select * from Profiles
INSERT INTO Users(UserName,Profile)
VALUES ('marker1','marketing');
INSERT INTO Users(UserName,Profile)
VALUES ('supplyer1','supplyer');
INSERT INTO Users(UserName,Profile)
VALUES ('buyer1','buyer');
select * from Users
--1=regular,2=member,3=vip
INSERT INTO Discounts(CustType,Discnt)
VALUES (1,0);
INSERT INTO Discounts(CustType,Discnt)
VALUES (2,10);
INSERT INTO Discounts(CustType,Discnt)
VALUES (3,25);
select * from Discounts
INSERT INTO Customers(CustID,CustType,CustStatus,FreezCode,OverCount,CustName,DelivAddrss,MailAddrss,CreditCard)
VALUES (0,1,3,0,0,'customer1','israel haifa 123','il haifa 123','1234567812345678,12/25,123');
INSERT INTO Customers(CustID,CustType,CustStatus,FreezCode,OverCount,CustName,DelivAddrss,MailAddrss,CreditCard)
VALUES (1,2,2,1,0,'customer2','israel tel aviv 123','il TLV 123','1234567812345678,04/15,123');
INSERT INTO Customers(CustID,CustType,CustStatus,FreezCode,OverCount,CustName,DelivAddrss,MailAddrss,CreditCard)
VALUES (2,3,1,0,2,'customer3','Usa NY manheten 123','NY manheten 123','1234567812345678,9/11,666');
select * from Customers
INSERT INTO DeliveryFees(Delivery,[Desc],DelFee)
VALUES (0,'fast delivery truck',25);
INSERT INTO DeliveryFees(Delivery,[Desc],DelFee)
VALUES (1,'delivery truck',15);
INSERT INTO DeliveryFees(Delivery,[Desc],DelFee)
VALUES (2,'delivery plane',350);
select * from DeliveryFees
--Update DeliveryFees
--set Delivery =2
--where Delivery=3
--status 0=ordered,1=sent,2=reseved
INSERT INTO ExOrders([date],OrderNo,CustID,Code,Quant,Delivery,[Address],[Status],SuppDate)
VALUES ('2024/08/18',0,0,0,10,0,'il haifa 123',0,'2024/08/23');
INSERT INTO ExOrders([date],OrderNo,CustID,Code,Quant,Delivery,[Address],[Status],SuppDate)
VALUES ('2024/08/18',1,2,0,25,1,'il TLV 123',1,'2024/08/21');
INSERT INTO ExOrders([date],OrderNo,CustID,Code,Quant,Delivery,[Address],[Status],SuppDate)
VALUES ('2024/08/18',2,0,0,3,2,'NY manheten 123',0,'2024/08/19');
select * from ExOrders
INSERT INTO	Subscription(OrderNo,[Status],CustID,Code,Quant,Freq,Delivery,NextOrder,Expiration
INSERT INTO Subscription (OrderNo, [Status], CustID, Code, Quant, Freq, Delivery, NextOrder, Expiration)
VALUES
(0, 1, 0, 0, 10, 30, 0, '2024-08-23', '2025-08-23'),  -- Aligns with OrderNo 0 in ExOrders
(1, 1, 2, 0, 25, 15, 1, '2024-08-21', '2025-08-21'),  -- Aligns with OrderNo 1 in ExOrders
(2, 0, 0, 0, 3, 7, 2, '2024-08-19', '2025-08-19');   -- Aligns with OrderNo 2 in ExOrders
