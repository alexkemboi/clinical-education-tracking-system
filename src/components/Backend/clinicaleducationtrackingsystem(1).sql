-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 04:59 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clinicaleducationtrackingsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `additional_information`
--

CREATE TABLE `additional_information` (
  `id` int(11) NOT NULL,
  `allergies_or_medical_conditions` enum('yes','no') NOT NULL,
  `allergies_or_medical_conditions_specify` text DEFAULT NULL,
  `signature` varchar(255) NOT NULL,
  `certification` varchar(255) NOT NULL,
  `student_signature` varchar(255) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `educational_info`
--

CREATE TABLE `educational_info` (
  `id` int(11) NOT NULL,
  `institution_name` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `field_of_study` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `educational_info`
--

INSERT INTO `educational_info` (`id`, `institution_name`, `degree`, `field_of_study`, `start_date`, `end_date`) VALUES
(1, 'KISII UNIVERSITY', 'SOFTWARE ENGINEERING', 'COMPUTING', '2023-05-10', '2023-05-30');

-- --------------------------------------------------------

--
-- Table structure for table `emergency_info`
--

CREATE TABLE `emergency_info` (
  `id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `relationship` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `emergency_info`
--

INSERT INTO `emergency_info` (`id`, `contact_name`, `relationship`, `phone_number`, `email`) VALUES
(1, 'walter', 'mum', '0726837210', 'akemboi97@gmail.om');

-- --------------------------------------------------------

--
-- Table structure for table `personal_information`
--

CREATE TABLE `personal_information` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `secondName` varchar(255) NOT NULL,
  `dob` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `personal_information`
--

INSERT INTO `personal_information` (`id`, `firstName`, `secondName`, `dob`, `gender`, `address`, `phone_number`, `email`) VALUES
(1, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(2, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(3, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(4, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(5, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(6, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(7, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(8, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com'),
(9, 'PETER', 'KIBET', '2023-05-10', 'Female', '86 BF', '0726837210', 'AKEMBOI97@GMAIL.COM'),
(10, 'PETER', 'KIBET', '2023-05-10', 'Female', '86 BF', '0726837210', 'AKEMBOI97@GMAIL.COM');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `secondName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `secondName`, `email`, `password`) VALUES
(1, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(2, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(3, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(4, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(5, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(6, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(7, 'learning', 'alex', 'jepkogeifaith9@gmail.com', 'pgk88XmmiegTSTT'),
(8, 'aa', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(9, 'aa', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(10, 'kamala', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(11, 'kamala', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(12, 'kamala', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(13, 'kamala', 'alex', 'ala@gmail.com', 'pgk88XmmiegTSTT'),
(14, '', '', '', 'pgk88XmmiegTSTT'),
(15, '', '', '', 'pgk88XmmiegTSTT'),
(16, '', '', '', 'pgk88XmmiegTSTT'),
(17, '', '', '', 'pgk88XmmiegTSTT'),
(18, '', '', '', 'pgk88XmmiegTSTT'),
(19, '', '', '', 'pgk88XmmiegTSTT'),
(20, '', '', '', 'pgk88XmmiegTSTT'),
(21, '', '', '', 'pgk88XmmiegTSTT'),
(22, 'ALEX', 'KEMBOI', 'alexkemboi97@gmail.com', '1234'),
(23, 'ALEX', 'KEMBOI', 'alexkemboi97@gmail.com', '1234'),
(24, 'ALEX', 'KEMBOI', 'alexkemboi97@gmail.com', '1234'),
(25, 'ALEX', 'KEMBOI', 'alexkemboi97@gmail.com', '1234'),
(26, 'WALTER', 'KIBIWOTT', 'walter@gmail.com', '1234'),
(27, 'kamala', 'jerop', 'jerop@yahoo.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `additional_information`
--
ALTER TABLE `additional_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `educational_info`
--
ALTER TABLE `educational_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emergency_info`
--
ALTER TABLE `emergency_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_information`
--
ALTER TABLE `personal_information`
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
-- AUTO_INCREMENT for table `additional_information`
--
ALTER TABLE `additional_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `educational_info`
--
ALTER TABLE `educational_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `emergency_info`
--
ALTER TABLE `emergency_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `personal_information`
--
ALTER TABLE `personal_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
