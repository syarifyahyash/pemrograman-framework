/*
  Warnings:

  - You are about to alter the column `status` on the `content` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - The primary key for the `dokar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `nis` on the `dokar` table. The data in that column could be lost. The data in that column will be cast from `VarChar(20)` to `VarChar(10)`.
  - You are about to alter the column `status` on the `galeri` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `status` on the `kegiatan` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `status` on the `kerjasama` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `status` on the `kerjasama_bbk` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - Added the required column `id_dokar` to the `Dokar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `content` MODIFY `tanggal_posting` DATE NOT NULL,
    MODIFY `gambar_content` TEXT NULL,
    MODIFY `status` TINYINT NOT NULL DEFAULT 0,
    MODIFY `dibaca` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `detil_galeri` MODIFY `gambar` TEXT NULL;

-- AlterTable
ALTER TABLE `dokar` DROP PRIMARY KEY,
    ADD COLUMN `id_dokar` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `nis` VARCHAR(10) NOT NULL,
    MODIFY `id_unit` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_dokar`);

-- AlterTable
ALTER TABLE `galeri` MODIFY `status` TINYINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `header` MODIFY `gambar_header` TEXT NULL;

-- AlterTable
ALTER TABLE `kegiatan` MODIFY `tanggal_mulai` DATE NOT NULL,
    MODIFY `tanggal_akhir` DATE NOT NULL,
    MODIFY `tanggal_posting` DATE NOT NULL,
    MODIFY `status` TINYINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `kerjasama` MODIFY `tanggal_posting` DATE NOT NULL,
    MODIFY `status` TINYINT NOT NULL DEFAULT 0,
    MODIFY `gambar_kerjasama` TEXT NULL;

-- AlterTable
ALTER TABLE `kerjasama_bbk` MODIFY `tanggal_kerjasama` DATE NOT NULL,
    MODIFY `tanggal_kadaluarsa` DATE NOT NULL,
    MODIFY `file_kerjasama` TEXT NULL,
    MODIFY `status` TINYINT NOT NULL DEFAULT 0,
    MODIFY `gambar_kerjasama` TEXT NULL,
    MODIFY `tanggal_posting` DATE NOT NULL;

-- AlterTable
ALTER TABLE `testimoni` MODIFY `foto_testimoni` TEXT NULL;

-- AddForeignKey
ALTER TABLE `Prodi` ADD CONSTRAINT `Prodi_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Testimoni` ADD CONSTRAINT `Testimoni_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Galeri` ADD CONSTRAINT `Galeri_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Detil_Galeri` ADD CONSTRAINT `Detil_Galeri_id_galeri_fkey` FOREIGN KEY (`id_galeri`) REFERENCES `Galeri`(`id_galeri`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Content` ADD CONSTRAINT `Content_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `Prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Header` ADD CONSTRAINT `Header_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dokar` ADD CONSTRAINT `Dokar_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `Prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Dokar` ADD CONSTRAINT `Dokar_id_unit_fkey` FOREIGN KEY (`id_unit`) REFERENCES `Unit`(`id_unit`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kegiatan` ADD CONSTRAINT `Kegiatan_id_prodi_fkey` FOREIGN KEY (`id_prodi`) REFERENCES `Prodi`(`id_prodi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kegiatan` ADD CONSTRAINT `Kegiatan_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KerjaSama` ADD CONSTRAINT `KerjaSama_id_jenis_kerjasama_fkey` FOREIGN KEY (`id_jenis_kerjasama`) REFERENCES `Jenis_KerjaSama`(`id_jenis_kerjasama`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KerjaSama` ADD CONSTRAINT `KerjaSama_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KerjaSama_BBK` ADD CONSTRAINT `KerjaSama_BBK_id_fakultas_fkey` FOREIGN KEY (`id_fakultas`) REFERENCES `Fakultas`(`id_fakultas`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KerjaSama_BBK` ADD CONSTRAINT `KerjaSama_BBK_id_jenis_kerjasama_fkey` FOREIGN KEY (`id_jenis_kerjasama`) REFERENCES `Jenis_KerjaSama`(`id_jenis_kerjasama`) ON DELETE RESTRICT ON UPDATE CASCADE;
