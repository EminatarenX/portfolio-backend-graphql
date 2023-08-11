-- CreateTable
CREATE TABLE `resenia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nombre` VARCHAR(191) NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `calificacion` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` VARCHAR(191) NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mensaje` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `mensaje` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
