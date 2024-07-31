/*
  Warnings:

  - You are about to drop the column `secondhandPaymentId` on the `SecondHandCart` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[SecondHandCart] DROP COLUMN [secondhandPaymentId];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
