CREATE DATABASE IF NOT EXISTS `administracao`;

USE `administracao`;

CREATE TABLE IF NOT EXISTS `permission_reference` (
  `id` int AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `permission_reference` (`id`, `name`) VALUES
  (1, 'visualizador'),
  (2, 'operador'),
  (3, 'gerente'),
  (4, 'admin');

CREATE TABLE IF NOT EXISTS `users` (
  `id` int AUTO_INCREMENT NOT NULL,
  `name` varchar(255) NOT NULL,
  `pwd` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `permission` int (11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`permission`) REFERENCES `permission_reference`(`id`)
);

