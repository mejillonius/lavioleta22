-- Active: 1675263800707@@127.0.0.1@3306@empresa


CREATE DATABASE empresa DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
use empresa;
/* DROP DATABASE 'practica01'; */

/* ejercicio 9 */

CREATE TABLE EMPLEAT (
    codi INT(4) PRIMARY KEY,
    nom CHAR(15) ,
    cognoms CHAR(30),
    treball CHAR(30),
    codi_carrec int(4) ,
    data_contracte DATE,
    salari INT(7),
    comissio INT(7),
    departament INT(2)
)ENGINE=InnoDB;

/* fin ejercicio 9 */

/* ejercicio 10 */

alter table EMPLEAT MODIFY salari DECIMAL(5,2) NOT NULL;

/* fin ejercicio 10 */

/* ejercicio 11 */

CREATE TABLE DEPARTAMENT (
    numero_dep INT(2),
    nom_dep CHAR(9) PRIMARY KEY,
    localitzacio CHAR(10)
)ENGINE=InnoDB;

/* fin ejercicio 11 */

/* ejercicio 12 */

CREATE TABLE DEPARTAMENT2 (
    numero_dep INT(2) PRIMARY KEY,
    nom_dep CHAR(9) ,
    localitzacio CHAR(10)
)ENGINE=InnoDB;

/* fin ejercicio 12 */

/* ejercicio 13 */

CREATE TABLE EMPLEAT2 (
    codi INT(4) PRIMARY KEY,
    nom CHAR(15) ,
    cognoms CHAR(30),
    treball CHAR(30),
    codi_carrec int(4) ,
    data_contracte DATE,
    salari INT(7),
    comissio INT(7),
    departament INT(2),
    FOREIGN KEY (departament) REFERENCES DEPARTAMENT2(numero_dep)
)ENGINE=InnoDB;

/* fin ejercicio 13 */

/* ejercicio 14 */

ALTER TABLE EMPLEAT2 ADD CONSTRAINT unic_sal_comm UNIQUE (salari, comissio);

/* fin ejercicio 14 */

/* ejercicio 15 */

ALTER TABLE EMPLEAT2 ADD INDEX index1 (codi);

/* fin ejercicio 15 */

/* ejercicio 16 */

DROP INDEX index1 on EMPLEAT2;

/* fin ejercicio 16 */

/* ejercicio 17 */

ALTER TABLE EMPLEAT2 DROP INDEX unic_sal_comm;

/* fin ejercicio 17 */

/* ejercicio 18 */

ALTER TABLE `DEPARTAMENT` DROP PRIMARY KEY;

/* fin ejercicio 18 */
