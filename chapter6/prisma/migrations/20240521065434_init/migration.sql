-- CreateTable
CREATE TABLE `Customer` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_customer` VARCHAR(50) NOT NULL,
    `alamat` VARCHAR(100) NOT NULL,
    `jk` ENUM('Laki_Laki', 'Perempuan') NOT NULL,
    `umur` INTEGER NOT NULL,

    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Product` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_product` INTEGER NOT NULL,
    `nama_product` VARCHAR(50) NOT NULL,
    `harga` INTEGER NOT NULL,
    `stok` INTEGER NOT NULL,

    UNIQUE INDEX `Product_kode_product_key`(`kode_product`),
    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Transaksi` (
    `no` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_transaksi` INTEGER NOT NULL,
    `nama_customer` INTEGER NOT NULL,
    `total_pembelian` INTEGER NOT NULL,
    `detail_pembelian` INTEGER NOT NULL,

    UNIQUE INDEX `Transaksi_kode_transaksi_key`(`kode_transaksi`),
    PRIMARY KEY (`no`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_nama_customer_fkey` FOREIGN KEY (`nama_customer`) REFERENCES `Customer`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Transaksi` ADD CONSTRAINT `Transaksi_detail_pembelian_fkey` FOREIGN KEY (`detail_pembelian`) REFERENCES `Product`(`no`) ON DELETE RESTRICT ON UPDATE CASCADE;
