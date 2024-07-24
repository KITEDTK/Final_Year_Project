/*
  Warnings:

  - You are about to drop the column `sellerId` on the `SecondhandPayments` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SecondhandPayments] DROP CONSTRAINT [SecondhandPayments_sellerId_fkey];

-- AlterTable
ALTER TABLE [dbo].[SecondhandPayments] DROP COLUMN [sellerId];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
