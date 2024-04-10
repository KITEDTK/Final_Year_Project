BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Clothes] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [categoryId] NVARCHAR(1000) NOT NULL,
    [brand] NVARCHAR(1000) NOT NULL,
    [location] NVARCHAR(1000),
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Clothes_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Clothes_isEnable_df] DEFAULT 1,
    CONSTRAINT [Clothes_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Sizes] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Sizes_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Sizes_isEnable_df] DEFAULT 1,
    CONSTRAINT [Sizes_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Colors] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Colors_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Colors_isEnable_df] DEFAULT 1,
    CONSTRAINT [Colors_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Categories] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Categories_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Categories_isEnable_df] DEFAULT 1,
    CONSTRAINT [Categories_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ClothDetails] (
    [id] NVARCHAR(1000) NOT NULL,
    [sizeId] NVARCHAR(1000) NOT NULL,
    [colorId] NVARCHAR(1000) NOT NULL,
    [codeBar] NVARCHAR(1000),
    [clothId] NVARCHAR(1000) NOT NULL,
    [amount] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [ClothDetails_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [ClothDetails_isEnable_df] DEFAULT 1,
    CONSTRAINT [ClothDetails_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [ClothDetails_codeBar_key] UNIQUE NONCLUSTERED ([codeBar])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [password] NVARCHAR(1000) NOT NULL,
    [fullname] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [phoneNumber] NVARCHAR(1000) NOT NULL,
    [point] INT NOT NULL,
    [verifyToken] NVARCHAR(1000) NOT NULL,
    [expiredTokenTime] DATETIME2 NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Users_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Users_isEnable_df] DEFAULT 1,
    CONSTRAINT [Users_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Users_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Permissions] (
    [id] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Permissions_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Permissions_isEnable_df] DEFAULT 1,
    CONSTRAINT [Permissions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[UserPermissions] (
    [id] NVARCHAR(1000) NOT NULL,
    [userIds] NVARCHAR(1000) NOT NULL,
    [permissionId] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [UserPermissions_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [UserPermissions_isEnable_df] DEFAULT 1,
    CONSTRAINT [UserPermissions_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Vouchers] (
    [id] NVARCHAR(1000) NOT NULL,
    [code] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [minUsage] INT NOT NULL,
    [discount] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Vouchers_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Vouchers_isEnable_df] DEFAULT 1,
    CONSTRAINT [Vouchers_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Vouchers_code_key] UNIQUE NONCLUSTERED ([code])
);

-- CreateTable
CREATE TABLE [dbo].[UserVouchers] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [voucherId] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [UserVouchers_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [UserVouchers_isEnable_df] DEFAULT 1,
    CONSTRAINT [UserVouchers_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Payments] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [voucherId] NVARCHAR(1000) NOT NULL,
    [total] INT NOT NULL,
    [isPaid] BIT NOT NULL CONSTRAINT [Payments_isPaid_df] DEFAULT 0,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Payments_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Payments_isEnable_df] DEFAULT 1,
    CONSTRAINT [Payments_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PaymentDetails] (
    [id] NVARCHAR(1000) NOT NULL,
    [paymentId] NVARCHAR(1000) NOT NULL,
    [clothId] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [PaymentDetails_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [PaymentDetails_isEnable_df] DEFAULT 1,
    CONSTRAINT [PaymentDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Carts] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [isCheckout] BIT NOT NULL CONSTRAINT [Carts_isCheckout_df] DEFAULT 0,
    [amount] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Carts_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Carts_isEnable_df] DEFAULT 1,
    CONSTRAINT [Carts_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[CartDetails] (
    [id] NVARCHAR(1000) NOT NULL,
    [cartId] NVARCHAR(1000) NOT NULL,
    [clothId] NVARCHAR(1000) NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [CartDetails_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [CartDetails_isEnable_df] DEFAULT 1,
    CONSTRAINT [CartDetails_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Comments] (
    [id] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [content] NVARCHAR(1000) NOT NULL,
    [clothId] NVARCHAR(1000) NOT NULL,
    [parentId] NVARCHAR(1000),
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Comments_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Comments_isEnable_df] DEFAULT 1,
    CONSTRAINT [Comments_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Refunds] (
    [id] NVARCHAR(1000) NOT NULL,
    [clothDetailId] NVARCHAR(1000) NOT NULL,
    [userId] NVARCHAR(1000) NOT NULL,
    [barcode] NVARCHAR(1000),
    [total] INT NOT NULL,
    [createAt] DATETIME2 NOT NULL CONSTRAINT [Refunds_createAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updateAt] DATETIME2 NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [Refunds_isEnable_df] DEFAULT 1,
    CONSTRAINT [Refunds_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Clothes] ADD CONSTRAINT [Clothes_categoryId_fkey] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Categories]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ClothDetails] ADD CONSTRAINT [ClothDetails_sizeId_fkey] FOREIGN KEY ([sizeId]) REFERENCES [dbo].[Sizes]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ClothDetails] ADD CONSTRAINT [ClothDetails_colorId_fkey] FOREIGN KEY ([colorId]) REFERENCES [dbo].[Colors]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[ClothDetails] ADD CONSTRAINT [ClothDetails_clothId_fkey] FOREIGN KEY ([clothId]) REFERENCES [dbo].[Clothes]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserPermissions] ADD CONSTRAINT [UserPermissions_userIds_fkey] FOREIGN KEY ([userIds]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserPermissions] ADD CONSTRAINT [UserPermissions_permissionId_fkey] FOREIGN KEY ([permissionId]) REFERENCES [dbo].[Permissions]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserVouchers] ADD CONSTRAINT [UserVouchers_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[UserVouchers] ADD CONSTRAINT [UserVouchers_voucherId_fkey] FOREIGN KEY ([voucherId]) REFERENCES [dbo].[Vouchers]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Payments] ADD CONSTRAINT [Payments_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Payments] ADD CONSTRAINT [Payments_voucherId_fkey] FOREIGN KEY ([voucherId]) REFERENCES [dbo].[Vouchers]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PaymentDetails] ADD CONSTRAINT [PaymentDetails_paymentId_fkey] FOREIGN KEY ([paymentId]) REFERENCES [dbo].[Payments]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PaymentDetails] ADD CONSTRAINT [PaymentDetails_clothId_fkey] FOREIGN KEY ([clothId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Carts] ADD CONSTRAINT [Carts_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CartDetails] ADD CONSTRAINT [CartDetails_cartId_fkey] FOREIGN KEY ([cartId]) REFERENCES [dbo].[Carts]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CartDetails] ADD CONSTRAINT [CartDetails_clothId_fkey] FOREIGN KEY ([clothId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [Comments_clothId_fkey] FOREIGN KEY ([clothId]) REFERENCES [dbo].[Clothes]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Refunds] ADD CONSTRAINT [Refunds_clothDetailId_fkey] FOREIGN KEY ([clothDetailId]) REFERENCES [dbo].[ClothDetails]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Refunds] ADD CONSTRAINT [Refunds_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
