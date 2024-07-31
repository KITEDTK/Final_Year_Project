/*
  Warnings:

  - You are about to drop the column `secondhandPaymentId` on the `SecondhandPaymentDetails` table. All the data in the column will be lost.
  - You are about to drop the `_SecondhandPaymentDetailsToSecondhandPayments` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `secondhandPaymentsId` to the `SecondhandPaymentDetails` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments] DROP CONSTRAINT [_SecondhandPaymentDetailsToSecondhandPayments_A_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments] DROP CONSTRAINT [_SecondhandPaymentDetailsToSecondhandPayments_B_fkey];

-- AlterTable
ALTER TABLE [dbo].[SecondhandPaymentDetails] DROP COLUMN [secondhandPaymentId];
ALTER TABLE [dbo].[SecondhandPaymentDetails] ADD [secondhandPaymentsId] NVARCHAR(1000) NOT NULL;

-- DropTable
DROP TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments];

-- AddForeignKey
ALTER TABLE [dbo].[SecondhandPaymentDetails] ADD CONSTRAINT [SecondhandPaymentDetails_secondhandPaymentsId_fkey] FOREIGN KEY ([secondhandPaymentsId]) REFERENCES [dbo].[SecondhandPayments]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
