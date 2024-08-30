/*
  Warnings:

  - You are about to drop the column `expiredCodeTime` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `verifyCode` on the `Users` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Users] DROP COLUMN [expiredCodeTime],
[verifyCode];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
