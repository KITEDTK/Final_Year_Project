/*
  Warnings:

  - You are about to drop the column `status` on the `SecondHandCart` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `SecondhandPayments` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SecondHandCart] DROP CONSTRAINT [SecondHandCart_secondhandPaymentId_fkey];

-- AlterTable
ALTER TABLE [dbo].[SecondHandCart] DROP COLUMN [status];

-- AlterTable
ALTER TABLE [dbo].[SecondhandPayments] DROP COLUMN [status];

-- CreateTable
CREATE TABLE [dbo].[SecondhandPaymentDetails] (
    [id] NVARCHAR(1000) NOT NULL,
    [secondhandId] NVARCHAR(1000) NOT NULL,
    [amount] INT NOT NULL,
    [price] INT,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [SecondhandPaymentDetails_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2,
    CONSTRAINT [SecondhandPaymentDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SecondhandPaymentDetails] ADD CONSTRAINT [SecondhandPaymentDetails_secondhandId_fkey] FOREIGN KEY ([secondhandId]) REFERENCES [dbo].[SecondHand]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
