BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Wardrobe] (
    [id] NVARCHAR(1000) NOT NULL,
    [clothDetailId] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [amount] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Wardrobe_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2,
    CONSTRAINT [Wardrobe_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Wardrobe] ADD CONSTRAINT [Wardrobe_clothDetailId_fkey] FOREIGN KEY ([clothDetailId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Wardrobe] ADD CONSTRAINT [Wardrobe_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
