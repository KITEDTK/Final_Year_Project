/*
  Warnings:

  - Added the required column `secondhandPaymentId` to the `SecondhandPaymentDetails` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[SecondhandPaymentDetails] ADD [secondhandPaymentId] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments] (
    [A] NVARCHAR(1000) NOT NULL,
    [B] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [_SecondhandPaymentDetailsToSecondhandPayments_AB_unique] UNIQUE NONCLUSTERED ([A],[B])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [_SecondhandPaymentDetailsToSecondhandPayments_B_index] ON [dbo].[_SecondhandPaymentDetailsToSecondhandPayments]([B]);

-- AddForeignKey
ALTER TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments] ADD CONSTRAINT [_SecondhandPaymentDetailsToSecondhandPayments_A_fkey] FOREIGN KEY ([A]) REFERENCES [dbo].[SecondhandPaymentDetails]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[_SecondhandPaymentDetailsToSecondhandPayments] ADD CONSTRAINT [_SecondhandPaymentDetailsToSecondhandPayments_B_fkey] FOREIGN KEY ([B]) REFERENCES [dbo].[SecondhandPayments]([id]) ON DELETE CASCADE ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
