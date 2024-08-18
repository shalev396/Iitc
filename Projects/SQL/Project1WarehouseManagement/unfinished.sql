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
INSERT INTO	Subscription(OrderNo,[Status],CustID,Code,
VALUES ()
