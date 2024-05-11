/*
  Warnings:

  - You are about to alter the column `nis` on the `content` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - The primary key for the `dokar` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `nis` on the `dokar` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `id_unit` on the `dokar` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.
  - You are about to alter the column `nidn` on the `dokar` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(20)`.
  - You are about to alter the column `nama` on the `dokar` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `nama_fakultas` on the `fakultas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to drop the column `tgl_posting` on the `galeri` table. All the data in the column will be lost.
  - You are about to alter the column `nis` on the `galeri` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `judul_header` on the `header` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `subjudul_header` on the `header` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `judul_kegiatan` on the `kegiatan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `nis` on the `kegiatan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `nis` on the `kerjasama` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `nis` on the `kerjasama_bbk` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `nama_prodi` on the `prodi` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `testimoner` on the `testimoni` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(50)`.
  - You are about to alter the column `pekerjaan_testimoner` on the `testimoni` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `nama_unit` on the `unit` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(80)`.
  - Added the required column `tanggal_posting` to the `Galeri` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `content` MODIFY `judul_content` VARCHAR(200) NOT NULL,
    MODIFY `isi_content` LONGTEXT NOT NULL,
    MODIFY `nis` VARCHAR(20) NOT NULL;

-- AlterTable
ALTER TABLE `dokar` DROP PRIMARY KEY,
    MODIFY `nis` VARCHAR(20) NOT NULL,
    MODIFY `id_unit` TINYINT NOT NULL,
    MODIFY `nidn` VARCHAR(20) NOT NULL,
    MODIFY `nama` VARCHAR(100) NOT NULL,
    ADD PRIMARY KEY (`nis`);

-- AlterTable
ALTER TABLE `fakultas` MODIFY `nama_fakultas` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `galeri` DROP COLUMN `tgl_posting`,
    ADD COLUMN `tanggal_posting` DATETIME(3) NOT NULL,
    MODIFY `judul_galeri` VARCHAR(200) NOT NULL,
    MODIFY `nis` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `header` MODIFY `judul_header` VARCHAR(50) NOT NULL,
    MODIFY `subjudul_header` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `jenis_kerjasama` MODIFY `nama_jenis_kerjasama` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `kegiatan` MODIFY `judul_kegiatan` VARCHAR(50) NOT NULL,
    MODIFY `lokasi` VARCHAR(200) NOT NULL,
    MODIFY `nis` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `kerjasama` MODIFY `judul_kerjasama` VARCHAR(200) NOT NULL,
    MODIFY `nis` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `kerjasama_bbk` MODIFY `nis` VARCHAR(30) NOT NULL,
    MODIFY `judul_kerjasama` VARCHAR(200) NOT NULL,
    MODIFY `pihak_1` VARCHAR(200) NOT NULL,
    MODIFY `pihak_2` VARCHAR(200) NOT NULL;

-- AlterTable
ALTER TABLE `prodi` MODIFY `nama_prodi` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `testimoni` MODIFY `testimoner` VARCHAR(50) NOT NULL,
    MODIFY `pekerjaan_testimoner` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `unit` MODIFY `nama_unit` VARCHAR(80) NOT NULL;

-- AlterTable
ALTER TABLE `wilayah_kerjasama` MODIFY `nama_wilayah_kerjasama` VARCHAR(200) NOT NULL;
