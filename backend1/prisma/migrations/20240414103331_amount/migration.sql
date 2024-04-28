/*
  Warnings:

  - You are about to alter the column `amount` on the `ClothDetails` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[ClothDetails] ALTER COLUMN [amount] INT NOT NULL;
ALTER TABLE [dbo].[ClothDetails] ADD CONSTRAINT [ClothDetails_amount_df] DEFAULT 1 FOR [amount];

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
