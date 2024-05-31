/*
  Warnings:

  - Added the required column `address` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fullname` to the `Payments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Payments` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[Payments] DROP CONSTRAINT [Payments_userId_fkey];

-- DropForeignKey
ALTER TABLE [dbo].[Payments] DROP CONSTRAINT [Payments_voucherId_fkey];

-- AlterTable
ALTER TABLE [dbo].[Payments] ALTER COLUMN [userId] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Payments] ALTER COLUMN [voucherId] NVARCHAR(1000) NULL;
ALTER TABLE [dbo].[Payments] ADD [address] NVARCHAR(1000) NOT NULL,
[email] NVARCHAR(1000) NOT NULL,
[fullname] NVARCHAR(1000) NOT NULL,
[phoneNumber] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[Payments] ADD CONSTRAINT [Payments_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Payments] ADD CONSTRAINT [Payments_voucherId_fkey] FOREIGN KEY ([voucherId]) REFERENCES [dbo].[Vouchers]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
