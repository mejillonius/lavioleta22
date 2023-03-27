-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 27, 2023 at 05:04 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

 CREATE USER 'examen'@'%' IDENTIFIED VIA mysql_native_password USING '***';GRANT ALL PRIVILEGES ON *.* TO 'examen'@'%' REQUIRE NONE WITH GRANT OPTION MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;GRANT ALL PRIVILEGES ON `examen\_%`.* TO 'examen'@'%';

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heroiscomic`
--
DROP DATABASE IF EXISTS `heroiscomic`;
CREATE DATABASE IF NOT EXISTS `heroiscomic` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `heroiscomic`;

-- --------------------------------------------------------

--
-- Table structure for table `herois`
--

DROP TABLE IF EXISTS `herois`;
CREATE TABLE `herois` (
  `nom` varchar(40) NOT NULL,
  `poder` varchar(50) NOT NULL,
  `equip` varchar(40) NOT NULL,
  `primera_aparicio` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `herois`
--

INSERT INTO `herois` (`nom`, `poder`, `equip`, `primera_aparicio`) VALUES
('lobezno', 'regeneracion', 'muchos', '2023-03-01'),
('deadpool', 'no se calla', 'x force', '2023-03-01'),
('tormenta', 'controlar el clima', 'x-men', '2023-03-01');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
