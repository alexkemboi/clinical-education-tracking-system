-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2023 at 04:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

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
  `add_info_id` int(11) NOT NULL,
  `allergies_or_medical_conditions` enum('yes','no') NOT NULL,
  `allergies_or_medical_conditions_specify` text DEFAULT NULL,
  `signature` varchar(255) NOT NULL,
  `certification` varchar(255) NOT NULL,
  `student_signature` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `studentid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `clinical_rotations`
--

CREATE TABLE `clinical_rotations` (
  `id` int(11) NOT NULL,
  `rotation_name` varchar(255) DEFAULT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `preceptor` varchar(255) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `educational_info`
--

CREATE TABLE `educational_info` (
  `edu_info_id` int(11) NOT NULL,
  `institution_name` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `field_of_study` varchar(255) NOT NULL,
  `start_date` varchar(255) NOT NULL,
  `end_date` varchar(255) NOT NULL,
  `studentid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `educational_info`
--

INSERT INTO `educational_info` (`edu_info_id`, `institution_name`, `degree`, `field_of_study`, `start_date`, `end_date`, `studentid`) VALUES
(1, 'KISII UNIVERSITY', 'SOFTWARE ENGINEERING', 'COMPUTING', '2023-05-10', '2023-05-30', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `emergency_info`
--

CREATE TABLE `emergency_info` (
  `emergency_info_id` int(11) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `relationship` varchar(255) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `studentid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_information`
--

INSERT INTO `personal_information` (`id`, `firstName`, `secondName`, `dob`, `gender`, `address`, `phone_number`, `email`) VALUES
(1, 'ALEX', 'KEMBOI', '2023-05-08', 'Female', '100 eldoret', '0726837210', 'jepkogeifaith9@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `rotation_areas`
--

CREATE TABLE `rotation_areas` (
  `id` int(11) NOT NULL,
  `area_name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `supervisor_name` varchar(255) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rotation_areas`
--

INSERT INTO `rotation_areas` (`id`, `area_name`, `description`, `supervisor_name`, `department`, `location`) VALUES
(4, 'Internal Medicine', 'Description of Internal Medicine', 'Dr. Smith', 'Internal Medicine Department', 'Hospital A'),
(5, 'Surgery', 'Description of Surgery', 'Dr. Johnson', 'Surgery Department', 'Hospital B'),
(6, 'Pediatrics', 'Description of Pediatrics', 'Dr. Anderson', 'Pediatrics Department', 'Hospital C'),
(7, 'Obstetrics and Gynecology', 'Description of Obstetrics and Gynecology', 'Dr. Williams', 'Obstetrics and Gynecology Department', 'Hospital D'),
(8, 'Emergency Medicine', 'Description of Emergency Medicine', 'Dr. Brown', 'Emergency Department', 'Hospital E');

-- --------------------------------------------------------

--
-- Table structure for table `rotation_area_objectives`
--

CREATE TABLE `rotation_area_objectives` (
  `id` int(11) NOT NULL,
  `rotation_area_id` int(11) DEFAULT NULL,
  `objective` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `rotation_area_objectives`
--

INSERT INTO `rotation_area_objectives` (`id`, `rotation_area_id`, `objective`) VALUES
(26, 4, 'Gain proficiency in diagnosing and managing common medical conditions.'),
(27, 4, 'Develop skills in interpreting diagnostic tests.'),
(28, 4, 'Learn effective communication and bedside manner with patients.'),
(29, 4, 'Understand and apply principles of evidence-based medicine.'),
(30, 4, 'Participate in medical rounds and discussions to enhance knowledge.'),
(31, 5, 'Acquire knowledge of surgical anatomy, techniques, and perioperative care.'),
(32, 5, 'Learn to assist in various surgical procedures.'),
(33, 5, 'Develop skills in wound closure, suturing, and basic surgical techniques.'),
(34, 5, 'Understand surgical ethics, patient safety, and infection control.'),
(35, 5, 'Gain exposure to surgical subspecialties and interdisciplinary teams.'),
(36, 6, 'Learn to assess and manage common pediatric conditions.'),
(37, 6, 'Acquire skills in performing pediatric physical examinations.'),
(38, 6, 'Understand unique communication requirements with children and families.'),
(39, 6, 'Participate in well-child visits, immunizations, and developmental assessments.'),
(40, 6, 'Gain exposure to pediatric subspecialties.'),
(41, 7, 'Gain proficiency in prenatal care and monitoring fetal development.'),
(42, 7, 'Develop skills in assisting in labor and delivery.'),
(43, 7, 'Learn about common gynecological conditions and their management.'),
(44, 7, 'Understand principles of prenatal and postnatal care.'),
(45, 7, 'Gain exposure to obstetric and gynecological surgeries.'),
(46, 8, 'Acquire knowledge and skills in triage, resuscitation, and stabilization.'),
(47, 8, 'Learn to perform basic emergency procedures.'),
(48, 8, 'Develop proficiency in interpreting and ordering diagnostic tests.'),
(49, 8, 'Understand principles of trauma management and resuscitation protocols.'),
(50, 8, 'Gain exposure to a wide range of acute medical conditions.');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `secondName`, `email`, `password`) VALUES
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
  ADD PRIMARY KEY (`add_info_id`),
  ADD KEY `additional_information_fk_studentid` (`studentid`);

--
-- Indexes for table `clinical_rotations`
--
ALTER TABLE `clinical_rotations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `educational_info`
--
ALTER TABLE `educational_info`
  ADD PRIMARY KEY (`edu_info_id`),
  ADD KEY `fk_studentid` (`studentid`);

--
-- Indexes for table `emergency_info`
--
ALTER TABLE `emergency_info`
  ADD PRIMARY KEY (`emergency_info_id`),
  ADD KEY `emergency_info_fk_studentid` (`studentid`);

--
-- Indexes for table `personal_information`
--
ALTER TABLE `personal_information`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rotation_areas`
--
ALTER TABLE `rotation_areas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rotation_area_objectives`
--
ALTER TABLE `rotation_area_objectives`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rotation_area_id` (`rotation_area_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clinical_rotations`
--
ALTER TABLE `clinical_rotations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_information`
--
ALTER TABLE `personal_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `rotation_areas`
--
ALTER TABLE `rotation_areas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `rotation_area_objectives`
--
ALTER TABLE `rotation_area_objectives`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `additional_information`
--
ALTER TABLE `additional_information`
  ADD CONSTRAINT `additional_information_fk_studentid` FOREIGN KEY (`studentid`) REFERENCES `personal_information` (`id`);

--
-- Constraints for table `clinical_rotations`
--
ALTER TABLE `clinical_rotations`
  ADD CONSTRAINT `clinical_rotations_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `personal_information` (`id`);

--
-- Constraints for table `educational_info`
--
ALTER TABLE `educational_info`
  ADD CONSTRAINT `fk_studentid` FOREIGN KEY (`studentid`) REFERENCES `personal_information` (`id`);

--
-- Constraints for table `emergency_info`
--
ALTER TABLE `emergency_info`
  ADD CONSTRAINT `emergency_info_fk_studentid` FOREIGN KEY (`studentid`) REFERENCES `personal_information` (`id`);

--
-- Constraints for table `rotation_area_objectives`
--
ALTER TABLE `rotation_area_objectives`
  ADD CONSTRAINT `rotation_area_objectives_ibfk_1` FOREIGN KEY (`rotation_area_id`) REFERENCES `rotation_areas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
