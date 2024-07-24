/*
  Warnings:

  - Added the required column `price` to the `SecondhandPayments` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[SecondHand] ADD [price] INT;

-- AlterTable
ALTER TABLE [dbo].[SecondhandPayments] ADD [price] INT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
