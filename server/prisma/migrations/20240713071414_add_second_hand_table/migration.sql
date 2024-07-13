BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[SecondHand] (
    [id] NVARCHAR(1000) NOT NULL,
    [paymentDetailId] NVARCHAR(1000) NOT NULL,
    [amount] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [SecondHand_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2,
    CONSTRAINT [SecondHand_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[SecondHand] ADD CONSTRAINT [SecondHand_paymentDetailId_fkey] FOREIGN KEY ([paymentDetailId]) REFERENCES [dbo].[PaymentDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
