BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[ActionLogs] (
    [id] NVARCHAR(1000) NOT NULL,
    [actionName] NVARCHAR(1000) NOT NULL,
    [clothDetailId] NVARCHAR(1000) NOT NULL,
    [amount] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [ActionLogs_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[ActionLogs] ADD CONSTRAINT [ActionLogs_clothDetailId_fkey] FOREIGN KEY ([clothDetailId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
