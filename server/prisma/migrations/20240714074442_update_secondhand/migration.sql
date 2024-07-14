/*
  Warnings:

  - You are about to drop the column `paymentDetailId` on the `SecondHand` table. All the data in the column will be lost.
  - Added the required column `clothDetailId` to the `SecondHand` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- DropForeignKey
ALTER TABLE [dbo].[SecondHand] DROP CONSTRAINT [SecondHand_paymentDetailId_fkey];

-- AlterTable
ALTER TABLE [dbo].[SecondHand] DROP COLUMN [paymentDetailId];
ALTER TABLE [dbo].[SecondHand] ADD [clothDetailId] NVARCHAR(1000) NOT NULL;

-- AddForeignKey
ALTER TABLE [dbo].[SecondHand] ADD CONSTRAINT [SecondHand_clothDetailId_fkey] FOREIGN KEY ([clothDetailId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
