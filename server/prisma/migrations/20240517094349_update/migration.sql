/*
  Warnings:

  - You are about to drop the column `isCheckout` on the `Carts` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Carts] DROP COLUMN [isCheckout];
ALTER TABLE [dbo].[Carts] ADD [isPaid] BIT NOT NULL CONSTRAINT [Carts_isPaid_df] DEFAULT 0;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
