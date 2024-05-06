-- CreateTable
CREATE TABLE `Prodi` (
    `id_prodi` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `nama_prodi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_prodi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimoni` (
    `id_testimoni` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `testimoner` VARCHAR(191) NOT NULL,
    `pekerjaan_testimoner` VARCHAR(191) NOT NULL,
    `isi_testimoni` TEXT NOT NULL,
    `foto_testimoni` TEXT NOT NULL,
    `tgl_testimoni` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_testimoni`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Galeri` (
    `id_galeri` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `judul_galeri` VARCHAR(191) NOT NULL,
    `tgl_posting` TEXT NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id_galeri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Detil_Galeri` (
    `id_detil_galeri` INTEGER NOT NULL AUTO_INCREMENT,
    `id_galeri` INTEGER NOT NULL,
    `gambar` TEXT NOT NULL,
    `keterangan` TEXT NOT NULL,

    PRIMARY KEY (`id_detil_galeri`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Content` (
    `id_content` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenis_kontent` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `id_prodi` INTEGER NOT NULL,
    `judul_content` VARCHAR(191) NOT NULL,
    `isi_content` TEXT NOT NULL,
    `tanggal_posting` DATETIME(3) NOT NULL,
    `gambar_content` TEXT NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,
    `dibaca` INTEGER NOT NULL,

    PRIMARY KEY (`id_content`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Header` (
    `id_header` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `judul_header` VARCHAR(191) NOT NULL,
    `subjudul_header` VARCHAR(191) NOT NULL,
    `gambar_header` TEXT NOT NULL,

    PRIMARY KEY (`id_header`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Unit` (
    `id_unit` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_unit` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_unit`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dokar` (
    `nis` VARCHAR(191) NOT NULL,
    `id_prodi` INTEGER NOT NULL,
    `id_unit` INTEGER NOT NULL,
    `nidn` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`nis`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kegiatan` (
    `id_kegiatan` INTEGER NOT NULL AUTO_INCREMENT,
    `id_prodi` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `judul_kegiatan` VARCHAR(191) NOT NULL,
    `isi_kegiatan` TEXT NOT NULL,
    `tanggal_mulai` DATETIME(3) NOT NULL,
    `tanggal_akhir` DATETIME(3) NOT NULL,
    `tanggal_posting` DATETIME(3) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,

    PRIMARY KEY (`id_kegiatan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wilayah_KerjaSama` (
    `id_wilayah_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_wilayah_kerjasama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_wilayah_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jenis_KerjaSama` (
    `id_jenis_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_jenis_kerjasama` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_jenis_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KerjaSama` (
    `id_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `id_jenis_kerjasama` INTEGER NOT NULL,
    `id_fakultas` INTEGER NOT NULL,
    `judul_kerjasama` VARCHAR(191) NOT NULL,
    `isi_kerjasama` TEXT NOT NULL,
    `tanggal_posting` DATETIME(3) NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `status` INTEGER NOT NULL,
    `gambar_kerjasama` TEXT NOT NULL,

    PRIMARY KEY (`id_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KerjaSama_BBK` (
    `id_kerjasama` INTEGER NOT NULL AUTO_INCREMENT,
    `id_fakultas` INTEGER NOT NULL,
    `id_rak` INTEGER NOT NULL,
    `id_wilayah_kerjasama` INTEGER NOT NULL,
    `id_jenis_kerjasama` INTEGER NOT NULL,
    `nis` VARCHAR(191) NOT NULL,
    `judul_kerjasama` VARCHAR(191) NOT NULL,
    `isi_kerjasama` TEXT NOT NULL,
    `pihak_1` VARCHAR(191) NOT NULL,
    `pihak_2` VARCHAR(191) NOT NULL,
    `tanggal_kerjasama` DATETIME(3) NOT NULL,
    `tanggal_kadaluarsa` DATETIME(3) NOT NULL,
    `file_kerjasama` TEXT NOT NULL,
    `status` INTEGER NOT NULL,
    `gambar_kerjasama` TEXT NOT NULL,
    `tanggal_posting` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_kerjasama`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
