BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Clothes] ADD [price] INT;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
