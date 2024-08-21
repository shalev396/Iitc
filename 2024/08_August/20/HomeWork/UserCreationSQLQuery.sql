--SELECT name FROM sys.databases;
 --new_user
 -- newuser
 USE WarehouseManagementDB;
  GO
-- Grant SELECT permission on a specific table
GRANT SELECT ON dbo.YourTableName TO new_user;
-- Grant INSERT permission on a specific table
GRANT INSERT ON dbo.YourTable TO new_user;
-- Grant EXECUTE permission on a stored procedure
GRANT EXECUTE ON dbo.YourStoredProcedure TO new_user;
-- Grant full database ownership
EXEC sp_addrolemember 'db_owner', 'new_user';
----------------;
USE WarehouseManagementDB; -- Replace with your actual database name
GO

SELECT name
FROM sys.objects
WHERE type = 'P'   -- 'P' stands for procedures
AND is_ms_shipped = 0; -- This excludes system-stored procedures
