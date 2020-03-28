-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Мар 26 2020 г., 12:48
-- Версия сервера: 8.0.18
-- Версия PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `travelagency`
--

-- --------------------------------------------------------

--
-- Структура таблицы `hotels`
--

CREATE TABLE `hotels` (
  `hotel_id` int(11) NOT NULL,
  `adress` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `price_per_night` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `hotel_vacations`
--

CREATE TABLE `hotel_vacations` (
  `hotel_vacation_id` int(11) NOT NULL,
  `hotel_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `services`
--

CREATE TABLE `services` (
  `service_id` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `sevice_vacations`
--

CREATE TABLE `sevice_vacations` (
  `service_vacation_id` int(11) NOT NULL,
  `service_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `transport_tickets`
--

CREATE TABLE `transport_tickets` (
  `transport_tickets_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `departure_date` date NOT NULL,
  `arrival_date` date NOT NULL,
  `icao_departure` varchar(4) COLLATE utf8mb4_general_ci NOT NULL,
  `icao_arrival` varchar(4) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `first_name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `last_name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` int(20) NOT NULL,
  `identification_code` int(11) NOT NULL,
  `email` varchar(20) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `vacations`
--

CREATE TABLE `vacations` (
  `vacation_id` int(11) NOT NULL,
  `date_start` date NOT NULL,
  `date_end` date NOT NULL,
  `price` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `vacation_tickets`
--

CREATE TABLE `vacation_tickets` (
  `vacation_ticket_id` int(11) NOT NULL,
  `vacation_id` int(11) NOT NULL,
  `transport_tickets_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `hotels`
--
ALTER TABLE `hotels`
  ADD PRIMARY KEY (`hotel_id`);

--
-- Индексы таблицы `hotel_vacations`
--
ALTER TABLE `hotel_vacations`
  ADD PRIMARY KEY (`hotel_vacation_id`),
  ADD KEY `hotel_id` (`hotel_id`),
  ADD KEY `vacation_id` (`vacation_id`);

--
-- Индексы таблицы `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`service_id`);

--
-- Индексы таблицы `sevice_vacations`
--
ALTER TABLE `sevice_vacations`
  ADD PRIMARY KEY (`service_vacation_id`),
  ADD KEY `service_id` (`service_id`),
  ADD KEY `vacation_id` (`vacation_id`);

--
-- Индексы таблицы `transport_tickets`
--
ALTER TABLE `transport_tickets`
  ADD PRIMARY KEY (`transport_tickets_id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Индексы таблицы `vacations`
--
ALTER TABLE `vacations`
  ADD PRIMARY KEY (`vacation_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Индексы таблицы `vacation_tickets`
--
ALTER TABLE `vacation_tickets`
  ADD PRIMARY KEY (`vacation_ticket_id`),
  ADD KEY `vacation_id` (`vacation_id`),
  ADD KEY `transport_tickets_id` (`transport_tickets_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `hotels`
--
ALTER TABLE `hotels`
  MODIFY `hotel_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `hotel_vacations`
--
ALTER TABLE `hotel_vacations`
  MODIFY `hotel_vacation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `services`
--
ALTER TABLE `services`
  MODIFY `service_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `sevice_vacations`
--
ALTER TABLE `sevice_vacations`
  MODIFY `service_vacation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `transport_tickets`
--
ALTER TABLE `transport_tickets`
  MODIFY `transport_tickets_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `vacations`
--
ALTER TABLE `vacations`
  MODIFY `vacation_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `vacation_tickets`
--
ALTER TABLE `vacation_tickets`
  MODIFY `vacation_ticket_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `hotel_vacations`
--
ALTER TABLE `hotel_vacations`
  ADD CONSTRAINT `hotel_vacations_ibfk_1` FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`hotel_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `hotel_vacations_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`vacation_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `sevice_vacations`
--
ALTER TABLE `sevice_vacations`
  ADD CONSTRAINT `sevice_vacations_ibfk_1` FOREIGN KEY (`service_id`) REFERENCES `services` (`service_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `sevice_vacations_ibfk_2` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`vacation_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `vacations`
--
ALTER TABLE `vacations`
  ADD CONSTRAINT `vacations_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Ограничения внешнего ключа таблицы `vacation_tickets`
--
ALTER TABLE `vacation_tickets`
  ADD CONSTRAINT `vacation_tickets_ibfk_1` FOREIGN KEY (`vacation_id`) REFERENCES `vacations` (`vacation_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `vacation_tickets_ibfk_2` FOREIGN KEY (`transport_tickets_id`) REFERENCES `transport_tickets` (`transport_tickets_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
