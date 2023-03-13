-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 07-03-2023 a las 20:03:21
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `plantes`
--
CREATE DATABASE IF NOT EXISTS `plantes` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `plantes`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adob`
--

CREATE TABLE IF NOT EXISTS `adob` (
  `nom_adob` varchar(15) NOT NULL,
  `nom_firma` varchar(20) NOT NULL,
  `tipus_adob` enum('LLD','AI') NOT NULL,
  PRIMARY KEY (`nom_adob`),
  KEY `nom_firma` (`nom_firma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `adob`
--

INSERT INTO `adob` (`nom_adob`, `nom_firma`, `tipus_adob`) VALUES
('Casadob', 'TIRSADOB', 'AI'),
('Creixplant', 'PRISADOB', 'AI'),
('Nutreplant', 'CIRSADOB', 'LLD'),
('Plantadob', 'PRISADOB', 'LLD'),
('Plantavit', 'UOCADOB', 'LLD'),
('Sanexplant', 'UOCADOB', 'LLD'),
('Superplant', 'CIRSADOB', 'AI'),
('Vitaplant', 'TIRSADOB', 'AI');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `datos_usuarios`
--
-- Error leyendo la estructura de la tabla plantes.datos_usuarios: #1146 - Tabla &#039;plantes.datos_usuarios&#039; no existe
-- Error leyendo datos de la tabla plantes.datos_usuarios: #1064 - Algo está equivocado en su sintax cerca &#039;FROM `plantes`.`datos_usuarios`&#039; en la linea 1

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dosi_adob`
--

CREATE TABLE IF NOT EXISTS `dosi_adob` (
  `nom_planta` varchar(30) NOT NULL,
  `estacio` varchar(10) NOT NULL,
  `nom_adob` varchar(15) NOT NULL,
  `quantitat_adob` smallint(3) NOT NULL CHECK (`quantitat_adob` >= 20 and `quantitat_adob` <= 100),
  PRIMARY KEY (`nom_planta`,`estacio`,`nom_adob`),
  KEY `estacio` (`estacio`),
  KEY `nom_adob` (`nom_adob`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `dosi_adob`
--

INSERT INTO `dosi_adob` (`nom_planta`, `estacio`, `nom_adob`, `quantitat_adob`) VALUES
('Begonia rex', 'Estiu', 'Casadob', 25),
('Begonia rex', 'Primavera', 'Nutreplant', 50),
('Camellia', 'Hivern', 'Plantavit', 50),
('Camellia', 'Primavera', 'Casadob', 75),
('Chlorophytum', 'Hivern', 'Superplant', 40),
('Chlorophytum', 'Tardor', 'Casadob', 30),
('Chrysanthemum', 'Primavera', 'Casadob', 45),
('Codiaeum', 'Estiu', 'Casadob', 50),
('Codiaeum', 'Primavera', 'Casadob', 60),
('Cyclamen', 'Tardor', 'Casadob', 30),
('Euphorbia', 'Hivern', 'Casadob', 50),
('Euphorbia', 'Hivern', 'Sanexplant', 40),
('Ficus', 'Primavera', 'Casadob', 50),
('Geranium', 'Estiu', 'Sanexplant', 40),
('Geranium', 'Hivern', 'Vitaplant', 20),
('Geranium', 'Primavera', 'Casadob', 30),
('Hedera', 'Primavera', 'Casadob', 45),
('Philodendron', 'Primavera', 'Casadob', 40),
('Polystichum', 'Primavera', 'Casadob', 40),
('Polystichum', 'Tardor', 'Plantadob', 20),
('Rosa', 'Primavera', 'Casadob', 30),
('Rosa', 'Primavera', 'Creixplant', 50),
('Tulipa', 'Hivern', 'Casadob', 40);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estacio`
--

CREATE TABLE IF NOT EXISTS `estacio` (
  `estacio` varchar(10) NOT NULL,
  PRIMARY KEY (`estacio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estacio`
--

INSERT INTO `estacio` (`estacio`) VALUES
('Estiu'),
('Hivern'),
('Primavera'),
('Tardor');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `exemplar_planta`
--

CREATE TABLE IF NOT EXISTS `exemplar_planta` (
  `nom_planta` varchar(30) NOT NULL,
  `num_exemplar` smallint(2) NOT NULL,
  PRIMARY KEY (`nom_planta`,`num_exemplar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `exemplar_planta`
--

INSERT INTO `exemplar_planta` (`nom_planta`, `num_exemplar`) VALUES
('Begonia rex', 1),
('Begonia rex', 2),
('Begonia rex', 3),
('Begonia rex', 4),
('Codiaeum', 1),
('Codiaeum', 2),
('Cyclamen', 1),
('Cyclamen', 2),
('Euphorbia', 1),
('Euphorbia', 2),
('Euphorbia', 3),
('Ficus', 1),
('Ficus', 2),
('Geranium', 1),
('Geranium', 2),
('Geranium', 3),
('Geranium', 4),
('Geranium', 5),
('Geranium', 6),
('Hedera', 1),
('Hedera', 2),
('Hedera', 3),
('Hedera', 4),
('Rosa', 1),
('Rosa', 2),
('Rosa', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `firma_comercial`
--

CREATE TABLE IF NOT EXISTS `firma_comercial` (
  `nom_firma` varchar(20) NOT NULL,
  PRIMARY KEY (`nom_firma`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `firma_comercial`
--

INSERT INTO `firma_comercial` (`nom_firma`) VALUES
('CIRSADOB'),
('PRISADOB'),
('TIRSADOB'),
('UOCADOB');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `metode_reproduccio`
--

CREATE TABLE IF NOT EXISTS `metode_reproduccio` (
  `nom_metode` varchar(10) NOT NULL,
  PRIMARY KEY (`nom_metode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `metode_reproduccio`
--

INSERT INTO `metode_reproduccio` (`nom_metode`) VALUES
('Bulbs'),
('Capficats'),
('Esqueix'),
('Estaques'),
('Estolons'),
('Llavors');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planta`
--

CREATE TABLE IF NOT EXISTS `planta` (
  `nom_cientific` varchar(30) NOT NULL,
  `nom_popular` varchar(30) NOT NULL,
  `estacio_floracio` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`nom_cientific`),
  KEY `estacio_floracio` (`estacio_floracio`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `planta`
--

INSERT INTO `planta` (`nom_cientific`, `nom_popular`, `estacio_floracio`) VALUES
('Begonia rex', 'Begònia', 'Estiu'),
('Camellia', 'Camèlia', 'Primavera'),
('Chlorophytum', 'Cintes', NULL),
('Chrysanthemum', 'Crisantem', 'Estiu'),
('Codiaeum', 'Croton', NULL),
('Cyclamen', 'Ciclamen', 'Hivern'),
('Euphorbia', 'Poinsetia', 'Hivern'),
('Ficus', 'Ficus Benjamina', NULL),
('Geranium', 'Gerani', 'Primavera'),
('Hedera', 'Heura', NULL),
('Philodendron', 'Potus', NULL),
('Polystichum', 'Falguera', NULL),
('Rosa', 'Roser', 'Primavera'),
('Tulipa', 'Tulipa', 'Primavera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planta_exterior`
--

CREATE TABLE IF NOT EXISTS `planta_exterior` (
  `nom_planta` varchar(30) NOT NULL,
  `tipus_planta` enum('P','T') DEFAULT 'P',
  PRIMARY KEY (`nom_planta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `planta_exterior`
--

INSERT INTO `planta_exterior` (`nom_planta`, `tipus_planta`) VALUES
('Begonia rex', 'P'),
('Camellia', 'P'),
('Chlorophytum', 'P'),
('Chrysanthemum', 'T'),
('Cyclamen', 'P'),
('Geranium', 'P'),
('Hedera', 'P'),
('Polystichum', 'P'),
('Rosa', 'P'),
('Tulipa', 'T');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planta_interior`
--

CREATE TABLE IF NOT EXISTS `planta_interior` (
  `nom_planta` varchar(30) NOT NULL,
  `ubicacio` varchar(40) NOT NULL,
  `temperatura` smallint(2) NOT NULL,
  PRIMARY KEY (`nom_planta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `planta_interior`
--

INSERT INTO `planta_interior` (`nom_planta`, `ubicacio`, `temperatura`) VALUES
('Codiaeum', 'No corrents', 17),
('Euphorbia', 'Llum indirecta', 18),
('Ficus', 'Llum indirecta', 19),
('Philodendron', 'Llum directa', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reproduccio`
--

CREATE TABLE IF NOT EXISTS `reproduccio` (
  `nom_planta` varchar(30) NOT NULL,
  `nom_metode` varchar(10) NOT NULL,
  `grau_exit` enum('Alt','Mitjà','Baix') DEFAULT NULL,
  PRIMARY KEY (`nom_planta`,`nom_metode`),
  KEY `nom_metode` (`nom_metode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `reproduccio`
--

INSERT INTO `reproduccio` (`nom_planta`, `nom_metode`, `grau_exit`) VALUES
('Begonia rex', 'Capficats', 'Alt'),
('Begonia rex', 'Esqueix', 'Alt'),
('Begonia rex', 'Llavors', 'Baix'),
('Camellia', 'Estaques', 'Alt'),
('Chlorophytum', 'Estolons', 'Alt'),
('Chrysanthemum', 'Bulbs', 'Mitjà'),
('Codiaeum', 'Bulbs', 'Alt'),
('Codiaeum', 'Capficats', 'Mitjà'),
('Codiaeum', 'Esqueix', 'Baix'),
('Cyclamen', 'Capficats', 'Mitjà'),
('Cyclamen', 'Esqueix', 'Alt'),
('Euphorbia', 'Esqueix', 'Baix'),
('Euphorbia', 'Estaques', 'Alt'),
('Euphorbia', 'Llavors', 'Baix'),
('Ficus', 'Capficats', 'Baix'),
('Ficus', 'Esqueix', 'Alt'),
('Ficus', 'Estaques', 'Baix'),
('Geranium', 'Esqueix', 'Alt'),
('Hedera', 'Capficats', 'Alt'),
('Hedera', 'Esqueix', 'Mitjà'),
('Philodendron', 'Capficats', 'Alt'),
('Philodendron', 'Esqueix', 'Alt'),
('Polystichum', 'Esqueix', 'Alt'),
('Rosa', 'Bulbs', 'Alt'),
('Rosa', 'Estaques', 'Mitjà'),
('Tulipa', 'Bulbs', 'Alt');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `adob`
--
ALTER TABLE `adob`
  ADD CONSTRAINT `adob_ibfk_1` FOREIGN KEY (`nom_firma`) REFERENCES `firma_comercial` (`nom_firma`);

--
-- Filtros para la tabla `dosi_adob`
--
ALTER TABLE `dosi_adob`
  ADD CONSTRAINT `dosi_adob_ibfk_1` FOREIGN KEY (`nom_planta`) REFERENCES `planta` (`nom_cientific`),
  ADD CONSTRAINT `dosi_adob_ibfk_2` FOREIGN KEY (`estacio`) REFERENCES `estacio` (`estacio`),
  ADD CONSTRAINT `dosi_adob_ibfk_3` FOREIGN KEY (`nom_adob`) REFERENCES `adob` (`nom_adob`);

--
-- Filtros para la tabla `exemplar_planta`
--
ALTER TABLE `exemplar_planta`
  ADD CONSTRAINT `exemplar_planta_ibfk_1` FOREIGN KEY (`nom_planta`) REFERENCES `planta` (`nom_cientific`);

--
-- Filtros para la tabla `planta`
--
ALTER TABLE `planta`
  ADD CONSTRAINT `planta_ibfk_1` FOREIGN KEY (`estacio_floracio`) REFERENCES `estacio` (`estacio`);

--
-- Filtros para la tabla `planta_exterior`
--
ALTER TABLE `planta_exterior`
  ADD CONSTRAINT `planta_exterior_ibfk_1` FOREIGN KEY (`nom_planta`) REFERENCES `planta` (`nom_cientific`);

--
-- Filtros para la tabla `planta_interior`
--
ALTER TABLE `planta_interior`
  ADD CONSTRAINT `planta_interior_ibfk_1` FOREIGN KEY (`nom_planta`) REFERENCES `planta` (`nom_cientific`);

--
-- Filtros para la tabla `reproduccio`
--
ALTER TABLE `reproduccio`
  ADD CONSTRAINT `reproduccio_ibfk_1` FOREIGN KEY (`nom_planta`) REFERENCES `planta` (`nom_cientific`),
  ADD CONSTRAINT `reproduccio_ibfk_2` FOREIGN KEY (`nom_metode`) REFERENCES `metode_reproduccio` (`nom_metode`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
