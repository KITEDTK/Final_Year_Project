/*
  Warnings:

  - Added the required column `secondhandPaymentId` to the `SecondHandCart` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[SecondHandCart] ADD [secondhandPaymentId] NVARCHAR(1000) NOT NULL;

-- CreateTable
CREATE TABLE [dbo].[SecondhandPayments] (
    [id] NVARCHAR(1000) NOT NULL,
    [buyerId] NVARCHAR(1000),
    [sellerId] NVARCHAR(1000) NOT NULL,
    [address] NVARCHAR(1000) NOT NULL,
    [phoneNumer] NVARCHAR(1000) NOT NULL,
    [status] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [SecondhandPayments_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SecondHandCart] ADD CONSTRAINT [SecondHandCart_secondhandPaymentId_fkey] FOREIGN KEY ([secondhandPaymentId]) REFERENCES [dbo].[SecondhandPayments]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[SecondhandPayments] ADD CONSTRAINT [SecondhandPayments_buyerId_fkey] FOREIGN KEY ([buyerId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[SecondhandPayments] ADD CONSTRAINT [SecondhandPayments_sellerId_fkey] FOREIGN KEY ([sellerId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
