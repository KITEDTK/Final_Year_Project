BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[CLothesAddExcelTest] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000),
    [categoryId] NVARCHAR(1000),
    [brand] NVARCHAR(1000),
    [location] NVARCHAR(1000),
    [price] INT,
    CONSTRAINT [CLothesAddExcelTest_pkey] PRIMARY KEY CLUSTERED ([id])
);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
