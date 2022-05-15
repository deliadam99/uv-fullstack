-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Máj 15. 21:03
-- Kiszolgáló verziója: 10.4.6-MariaDB
-- PHP verzió: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `storage`
--
CREATE DATABASE IF NOT EXISTS `storage` DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE `storage`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `employees`
--

INSERT INTO `employees` (`id`, `name`) VALUES
(0, 'In stock'),
(1, 'Albert Flórián'),
(2, 'Békés Róbert'),
(3, 'Csonka Károly'),
(4, 'Dorogi Kelemen'),
(5, 'Elek Elemér');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8_hungarian_ci NOT NULL,
  `employee_id` int(11) NOT NULL DEFAULT 0,
  `procurement_date` date NOT NULL,
  `status` varchar(20) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `items`
--

INSERT INTO `items` (`id`, `name`, `employee_id`, `procurement_date`, `status`) VALUES
(1, 'HP monitor', 0, '2022-05-15', 'new'),
(2, 'ASUS monitor', 1, '2022-05-15', 'old'),
(3, 'HP billentyűzet', 1, '2022-05-15', 'mid'),
(4, 'ASUS egér', 2, '2022-05-15', 'mid'),
(5, 'DELL laptop', 3, '2022-05-15', 'mid'),
(6, 'ACER monitor', 0, '2022-05-15', 'new'),
(7, 'ACER laptop', 5, '2022-05-15', 'new'),
(8, 'MSI laptop', 4, '2022-05-15', 'new'),
(9, 'APPLE laptop', 2, '2022-05-15', 'new'),
(10, 'LENOVO laptop', 1, '2022-05-15', 'mid'),
(11, 'LENOVO egér', 1, '2022-05-15', 'old'),
(12, 'LENOVO monitor', 1, '2022-05-15', 'new'),
(13, 'LOGITECH billentyűzet', 0, '2022-05-15', 'new'),
(14, 'LOGITECH egér', 0, '2022-05-15', 'new'),
(15, 'ASUS fejhallgató', 0, '2022-05-15', 'new'),
(16, 'LOGITECH fejhallgató', 1, '2022-05-15', 'new'),
(17, 'ACER fejhallgató', 2, '2022-05-15', 'new'),
(18, 'MSI fejhallgató', 3, '2022-05-15', 'old'),
(19, 'STEELSERIES fejhallgató', 4, '2022-05-15', 'mid'),
(20, 'HYPERX fejhallgató', 5, '2022-05-15', 'new'),
(21, 'RAZER fejhallgató', 0, '2022-05-15', 'new'),
(22, 'RAZER egér', 0, '2022-05-15', 'new'),
(23, 'RAZER billentyűzet', 0, '2022-05-15', 'mid'),
(24, 'RAZER laptop', 0, '2022-05-15', 'mid'),
(25, 'RAZER monitor', 0, '2022-05-15', 'mid');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `employee_id` (`employee_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT a táblához `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
