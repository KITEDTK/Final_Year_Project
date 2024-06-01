/*
  Warnings:

  - Added the required column `onlinePay` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vnpay` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Payments] ADD [onlinePay] BIT NOT NULL,
[vnpay] BIT NOT NULL;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
