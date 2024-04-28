BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[CartDetails] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Carts] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Categories] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[ClothDetails] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Clothes] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Colors] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Comments] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[PaymentDetails] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Payments] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Permissions] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Refunds] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Sizes] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[UserPermissions] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Users] ALTER COLUMN [verifyToken] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Users] ALTER COLUMN [expiredTokenTime] DATETIME2 NULL;
ALTER TABLE [dbo].[Users] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[UserVouchers] ALTER COLUMN [updateAt] DATETIME2 NULL;

-- AlterTable
ALTER TABLE [dbo].[Vouchers] ALTER COLUMN [updateAt] DATETIME2 NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
