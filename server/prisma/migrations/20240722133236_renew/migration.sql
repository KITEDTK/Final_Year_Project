BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SecondHandCart] DROP CONSTRAINT [SecondHandCart_secondhandPaymentId_fkey];

-- AlterTable
ALTER TABLE [dbo].[SecondHandCart] ALTER COLUMN [secondhandPaymentId] NVARCHAR(1000) NULL;

-- AddForeignKey
ALTER TABLE [dbo].[SecondHandCart] ADD CONSTRAINT [SecondHandCart_secondhandPaymentId_fkey] FOREIGN KEY ([secondhandPaymentId]) REFERENCES [dbo].[SecondhandPayments]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
