BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[SecondHandCart] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [secondHandId] NVARCHAR(1000) NOT NULL,
    [amount] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [SecondHandCart_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2,
    CONSTRAINT [SecondHandCart_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SecondHandCart] ADD CONSTRAINT [SecondHandCart_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[SecondHandCart] ADD CONSTRAINT [SecondHandCart_secondHandId_fkey] FOREIGN KEY ([secondHandId]) REFERENCES [dbo].[SecondHand]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
