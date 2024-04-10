/*
  Warnings:

  - You are about to drop the column `parentId` on the `Comments` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Categories] ADD [parent_id] NVARCHAR(1000);

-- AlterTable
ALTER TABLE [dbo].[Comments] DROP COLUMN [parentId];
ALTER TABLE [dbo].[Comments] ADD [parent_id] NVARCHAR(1000);

-- AddForeignKey
ALTER TABLE [dbo].[Categories] ADD CONSTRAINT [Categories_parent_id_fkey] FOREIGN KEY ([parent_id]) REFERENCES [dbo].[Categories]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_parent_id_fkey] FOREIGN KEY ([parent_id]) REFERENCES [dbo].[Comments]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
