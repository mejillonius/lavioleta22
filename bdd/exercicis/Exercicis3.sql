-- Active: 1675263799721@@127.0.0.1@3308

CREATE DATABASE items COLLATE
utf8mb4_unicode_ci; 
USE items;



CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `price` int(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=utf8;


INSERT INTO `items` (`id`, `name`, `description`, `price`, `category_id`, `created`, `modified`) VALUES
(1, 'LG P880 4X HD', 'My first awesome phone!', 336, 3, '2014-06-01 01:12:26', '2014-05-31 17:42:26'),
(2, 'Google Nexus 4', 'The most awesome phone of 2013!', 299, 2, '2014-06-01 01:12:26', '2014-05-31 17:42:26'),
(3, 'Samsung Galaxy S4', 'How about no?', 600, 3, '2014-06-01 01:12:26', '2014-05-31 17:42:26'),
(6, 'Bench Shirt', 'The best shirt!', 29, 1, '2014-06-01 01:12:26', '2014-05-31 02:42:21'),
(7, 'Lenovo Laptop', 'My business partner.', 399, 2, '2014-06-01 01:13:45', '2014-05-31 02:43:39'),
(8, 'Samsung Galaxy Tab 10.1', 'Good tablet.', 259, 2, '2014-06-01 01:14:13', '2014-05-31 02:44:08'),
(9, 'Spalding Watch', 'My sports watch.', 199, 1, '2014-06-01 01:18:36', '2014-05-31 02:48:31'),
(10, 'Sony Smart Watch', 'The coolest smart watch!', 300, 2, '2014-06-06 17:10:01', '2014-06-05 18:39:51'),
(11, 'Huawei Y300', 'For testing purposes.', 100, 2, '2014-06-06 17:11:04', '2014-06-05 18:40:54'),
(12, 'Abercrombie Lake Arnold Shirt', 'Perfect as gift!', 60, 1, '2014-06-06 17:12:21', '2014-06-05 18:42:11'),
(13, 'Abercrombie Allen Brook Shirt', 'Cool red shirt!', 70, 1, '2014-06-06 17:12:59', '2014-06-05 18:42:49'),
(26, 'Another product', 'Awesome product!', 555, 2, '2014-11-22 19:07:34', '2014-11-21 21:37:34'),
(28, 'Wallet', 'You can absolutely use this one!', 799, 6, '2014-12-04 21:12:03', '2014-12-03 23:42:03'),
(31, 'Amanda Waller Shirt', 'New awesome shirt!', 333, 1, '2014-12-13 00:52:54', '2014-12-12 03:22:54'),
(42, 'Nike Shoes for Men', 'Nike Shoes', 12999, 3, '2015-12-12 06:47:08', '2015-12-12 07:17:08'),
(48, 'Bristol Shoes', 'Awesome shoes.', 999, 5, '2016-01-08 06:36:37', '2016-01-08 07:06:37'),
(60, 'Rolex Watch', 'Luxury watch.', 25000, 1, '2016-01-11 15:46:02', '2016-01-11 16:16:02');


ALTER TABLE `items`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;


# Exercici 9 
CREATE TABLE empleat
(codi INT(4) PRIMARY KEY,
nom VARCHAR(15),
cognoms VARCHAR(30),
treball VARCHAR(10),
codi_carrec INT(4),
data_contracte DATE,
salari INT(7),
comissio INT(7),
departament INT(2)
)ENGINE=InnoDB;
#Exercici 10
ALTER TABLE empleat MODIFY
salari DECIMAL(7,2) NOT NULL;
#Exercici 11
CREATE TABLE departament
(numero_dep INT(2),
nom_dep VARCHAR(9) UNIQUE,
localitzacio VARCHAR(10)
)ENGINE=InnoDB;
#Exercici 12
CREATE TABLE departament2
(numero_dep INTEGER(2) PRIMARY KEY,
nom_dep VARCHAR(9) UNIQUE,
localitzacio VARCHAR(10)
)ENGINE=InnoDB;
# Exercici 13 
CREATE TABLE empleat2
(codi INTEGER(4) PRIMARY KEY,
nom VARCHAR(15),
cognoms VARCHAR(30),
treball VARCHAR(10),
codi_carrec INTEGER(4),
data_contracte DATE,
salari INTEGER(7),
comissio INTEGER(7),
departament INTEGER(2),
FOREIGN KEY (departament) REFERENCES departament2 (numero_dep)
)ENGINE=InnoDB;
#Exercici 14
ALTER TABLE empleat2 ADD CONSTRAINT unic_sal_comm UNIQUE (salari,comissio);

# Exercici 15 
ALTER TABLE empleat2 ADD
INDEX index1 (codi);

#Exercici 16 
DROP INDEX index1 ON empleat2;
#Exercici 17
ALTER TABLE empleat2 DROP INDEX unic_sal_comm;
#Exercici 18 
ALTER TABLE departament2 DROP PRIMARY KEY;
