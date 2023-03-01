-- Active: 1675263800707@@127.0.0.1@3306@ej20
/* ejercicio 20 */

CREATE DATABASE ej20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
use ej20;

CREATE TABLE FAMILIA (
    codi VARCHAR(3) PRIMARY KEY,
    nom varchar (35) not null
);

INSERT INTO FAMILIA VALUES ('INF', 'Informàtica i comunicació');
INSERT INTO FAMILIA VALUES ('ADM', 'Administració i gestió' );
INSERT INTO FAMILIA VALUES ('COM', 'Comerç i màrqueting' );
INSERT INTO FAMILIA VALUES ('HOT', 'Hoteleria i turisme' );


CREATE TABLE CICLE_FORMATIU(
    codi_cicle VARCHAR(4) PRIMARY KEY,
    tipus VARCHAR(1) not null,
    nom VARCHAR(50) not null,
    familia VARCHAR(3) not null,
    Foreign Key (familia) REFERENCES FAMILIA(codi)
);

INSERT INTO CICLE_FORMATIU VALUES ('SMIX', 'M', 'Sistemes microinformàtics i xarxes', 'INF');
INSERT INTO CICLE_FORMATIU VALUES ('ASIX', 'S', 'Administració de sistemes informàtics en la xarxa', 'INF');
INSERT INTO CICLE_FORMATIU VALUES ('DAM', 'S', "Desenvolupament d'aplicacions multiplataforma", 'INF');
INSERT INTO CICLE_FORMATIU VALUES ('DAW', 'S', "Desenvolupament d'aplicacions web", 'INF');

CREATE TABLE MODUL (
    numero_de_modul int(1) not null,
    titol varchar(50) not NULL,
    codi_cicle VARCHAR(4) not null,
    Foreign Key (codi_cicle) REFERENCES CICLE_FORMATIU(codi_cicle),
    PRIMARY KEY (codi_cicle, numero_de_modul)
);

INSERT INTO MODUL VALUES (1,"Muntatge i manteniment d’equips","SMIX");
INSERT INTO MODUL VALUES (2,"Sistemes operatius monolloc","SMIX");
INSERT INTO MODUL VALUES (1,"Implantació de sistemes operatius","ASIX");
INSERT INTO MODUL VALUES (2,"Gestió de bases de dades","ASIX");
INSERT INTO MODUL VALUES (3,"Programació bàsica","ASIX");


CREATE TABLE UNITAT_FORMATIVA (
    numero_unitat INT(1) NOT NULL,
    titol varchar(100) NOT NULL,
    codi_cicle varchar(4) NOT NULL,
    numero_de_modul int(1) NOT NULL,
    PRIMARY KEY (numero_unitat, codi_cicle, numero_de_modul),
    Foreign Key (codi_cicle, numero_de_modul) REFERENCES MODUL(codi_cicle, numero_de_modul)
);

INSERT INTO UNITAT_FORMATIVA VALUES (1,"Electricitat a l’ordinador", "SMIX", 1);
INSERT INTO UNITAT_FORMATIVA VALUES (2,"Components d’un equip microinformàtic", "SMIX", 1);
INSERT INTO UNITAT_FORMATIVA VALUES (3,"Muntatge d’un equip microinformàtic", "SMIX", 1);
INSERT INTO UNITAT_FORMATIVA VALUES (1,"Introducció als sistemes operatius", "SMIX", 2);
INSERT INTO UNITAT_FORMATIVA VALUES (2,"Sistemes operatius propietaris", "SMIX", 2);
INSERT INTO UNITAT_FORMATIVA VALUES (1,"Instal·lació, configuració i explotació del sistema informàtic", "ASIX", 1);
INSERT INTO UNITAT_FORMATIVA VALUES (2,"Gestió de la informació i de recursos en una xarxa", "ASIX", 1);
INSERT INTO UNITAT_FORMATIVA VALUES (1,"Introducció a les bases de dades", "ASIX", 2);
INSERT INTO UNITAT_FORMATIVA VALUES (2,"Llenguatges SQL: DML i DDL", "ASIX", 2);
INSERT INTO UNITAT_FORMATIVA VALUES (1,"Programació estructurada", "ASIX", 3);



/* fin ejercicio 20 */

/* ejercicio 21 */

ALTER TABLE MODUL ADD hores INT(3) NOT NULL;
ALTER TABLE UNITAT_FORMATIVA ADD hores INT(3) NOT NULL;

UPDATE MODUL SET hores = 198 where numero_de_modul = 1 AND codi_cicle = 'SMIX';
UPDATE MODUL SET hores = 132 where numero_de_modul = 2 AND codi_cicle = 'SMIX';
UPDATE MODUL SET hores = 231 where numero_de_modul = 1 AND codi_cicle = 'ASIX';
UPDATE MODUL SET hores = 165 where numero_de_modul = 2 AND codi_cicle = 'ASIX';
UPDATE MODUL SET hores = 165 where numero_de_modul = 3 AND codi_cicle = 'ASIX';

UPDATE UNITAT_FORMATIVA SET hores = 25 WHERE numero_de_modul = 1 AND numero_unitat = 1 AND codi_cicle = 'SMIX';
UPDATE UNITAT_FORMATIVA SET hores = 28 WHERE numero_de_modul = 1 AND numero_unitat = 2 AND codi_cicle = 'SMIX';
UPDATE UNITAT_FORMATIVA SET hores = 28 WHERE numero_de_modul = 1 AND numero_unitat = 3 AND codi_cicle = 'SMIX';
UPDATE UNITAT_FORMATIVA SET hores = 33 WHERE numero_de_modul = 2 AND numero_unitat = 1 AND codi_cicle = 'SMIX';
UPDATE UNITAT_FORMATIVA SET hores = 33 WHERE numero_de_modul = 2 AND numero_unitat = 2 AND codi_cicle = 'SMIX';
UPDATE UNITAT_FORMATIVA SET hores = 60 WHERE numero_de_modul = 1 AND numero_unitat = 1 AND codi_cicle = 'ASIX';
UPDATE UNITAT_FORMATIVA SET hores = 80 WHERE numero_de_modul = 1 AND numero_unitat = 2 AND codi_cicle = 'ASIX';
UPDATE UNITAT_FORMATIVA SET hores = 33 WHERE numero_de_modul = 2 AND numero_unitat = 1 AND codi_cicle = 'ASIX';
UPDATE UNITAT_FORMATIVA SET hores = 66 WHERE numero_de_modul = 2 AND numero_unitat = 2 AND codi_cicle = 'ASIX';
UPDATE UNITAT_FORMATIVA SET hores = 85 WHERE numero_de_modul = 3 AND numero_unitat = 1 AND codi_cicle = 'ASIX';

/* fin ejercicio 21 */