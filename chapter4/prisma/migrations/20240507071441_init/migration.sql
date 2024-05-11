/*
  Warnings:

  - You are about to drop the `content` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `detil_galeri` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dokar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `fakultas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `galeri` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `header` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jenis_kerjasama` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kegiatan` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kerjasama` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `kerjasama_bbk` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `prodi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `testimoni` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `unit` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `wilayah_kerjasama` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `content`;

-- DropTable
DROP TABLE `detil_galeri`;

-- DropTable
DROP TABLE `dokar`;

-- DropTable
DROP TABLE `fakultas`;

-- DropTable
DROP TABLE `galeri`;

-- DropTable
DROP TABLE `header`;

-- DropTable
DROP TABLE `jenis_kerjasama`;

-- DropTable
DROP TABLE `kegiatan`;

-- DropTable
DROP TABLE `kerjasama`;

-- DropTable
DROP TABLE `kerjasama_bbk`;

-- DropTable
DROP TABLE `prodi`;

-- DropTable
DROP TABLE `testimoni`;

-- DropTable
DROP TABLE `unit`;

-- DropTable
DROP TABLE `wilayah_kerjasama`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(70) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `thumbnail` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
