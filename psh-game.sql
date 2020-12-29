-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 29, 2020 at 11:13 PM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `psh-game`
--

-- --------------------------------------------------------

--
-- Table structure for table `stats`
--

CREATE TABLE `stats` (
  `id` int(11) NOT NULL,
  `user-id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nickname` varchar(150) NOT NULL,
  `image` varchar(150) NOT NULL,
  `creation` date NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nickname`, `image`, `creation`, `score`) VALUES
(59, 'Mrs Neea Linna', 'https://randomuser.me/api/portraits/women/9.jpg', '2020-12-29', 25),
(60, 'Mrs Jasmine Mitchell', 'https://randomuser.me/api/portraits/women/55.jpg', '2020-12-29', 38),
(61, 'Mrs Marie Wagner', 'https://randomuser.me/api/portraits/women/82.jpg', '2020-12-29', 77),
(62, 'Mr Mikael Maijala', 'https://randomuser.me/api/portraits/men/25.jpg', '2020-12-29', 3),
(63, 'Mr Gualdim da Rosa', 'https://randomuser.me/api/portraits/men/4.jpg', '2020-12-29', 28),
(64, 'Mr Marceau Le Gall', 'https://randomuser.me/api/portraits/men/55.jpg', '2020-12-29', 89),
(65, 'Mr Sam Reynolds', 'https://randomuser.me/api/portraits/men/88.jpg', '2020-12-29', 64),
(66, 'Ms Ashley Obrien', 'https://randomuser.me/api/portraits/women/49.jpg', '2020-12-29', 62),
(67, 'Mrs Rebecca Gray', 'https://randomuser.me/api/portraits/women/70.jpg', '2020-12-29', 88),
(68, 'Mr Anthony Gill', 'https://randomuser.me/api/portraits/men/78.jpg', '2020-12-29', 35),
(69, 'Mademoiselle Vivienne Morel', 'https://randomuser.me/api/portraits/women/12.jpg', '2020-12-29', 4),
(70, 'Miss Amalie Sørensen', 'https://randomuser.me/api/portraits/women/26.jpg', '2020-12-29', 77),
(71, 'Miss Roxanne Imanse', 'https://randomuser.me/api/portraits/women/23.jpg', '2020-12-29', 34),
(72, 'Ms Brittany Cole', 'https://randomuser.me/api/portraits/women/72.jpg', '2020-12-29', 12),
(73, 'Ms Linda Lambert', 'https://randomuser.me/api/portraits/women/74.jpg', '2020-12-29', 85),
(74, 'Mr Alexis Bergeron', 'https://randomuser.me/api/portraits/men/45.jpg', '2020-12-29', 95),
(75, 'Mr Jules Denis', 'https://randomuser.me/api/portraits/men/20.jpg', '2020-12-29', 24),
(76, 'Mr Shane Lord', 'https://randomuser.me/api/portraits/men/34.jpg', '2020-12-29', 30),
(77, 'Miss Nicoline Christiansen', 'https://randomuser.me/api/portraits/women/80.jpg', '2020-12-29', 60);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `stats`
--
ALTER TABLE `stats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `stats`
--
ALTER TABLE `stats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
