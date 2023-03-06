-- Active: 1675263799721@@127.0.0.1@3308

#CREATE DATABASE
DROP DATABASE IF EXISTS plantes;
CREATE DATABASE plantes DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE plantes;

CREATE TABLE firma_comercial
( nom_firma VARCHAR(20) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE adob (
  nom_adob VARCHAR(15) PRIMARY KEY,
  nom_firma VARCHAR(20) NOT NULL,
  tipus_adob ENUM('LLD','AI') NOT NULL,
FOREIGN KEY (nom_firma) REFERENCES firma_comercial (nom_firma)
) ENGINE=InnoDB;

CREATE TABLE estacio
( estacio VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE planta
( nom_cientific VARCHAR(30) PRIMARY KEY,
 nom_popular VARCHAR(30) NOT NULL,
 estacio_floracio VARCHAR (10),
 FOREIGN KEY (estacio_floracio) REFERENCES estacio (estacio)
)ENGINE=InnoDB;

CREATE TABLE metode_reproduccio
( nom_metode VARCHAR(10) PRIMARY KEY
)ENGINE=InnoDB;


CREATE TABLE planta_interior
(nom_planta VARCHAR(30) PRIMARY KEY,
ubicacio VARCHAR(40) NOT NULL,
temperatura SMALLINT(2) NOT NULL,
 FOREIGN KEY (nom_planta) REFERENCES planta(nom_cientific)
)ENGINE=InnoDB;

CREATE TABLE planta_exterior
(nom_planta VARCHAR(30) PRIMARY KEY,
tipus_planta ENUM('P','T') DEFAULT 'P',
 FOREIGN KEY (nom_planta) REFERENCES planta(nom_cientific)
 )ENGINE=InnoDB;

 CREATE TABLE exemplar_planta
(nom_planta VARCHAR(30),
num_exemplar  SMALLINT(2),
PRIMARY KEY (nom_planta,num_exemplar),
FOREIGN KEY (nom_planta) REFERENCES planta(nom_cientific)
)ENGINE=InnoDB;


CREATE TABLE dosi_adob
(nom_planta VARCHAR(30),
estacio VARCHAR(10),
nom_adob VARCHAR(15),
quantitat_adob SMALLINT(3)  NOT NULL CHECK (quantitat_adob>=20 AND quantitat_adob<=100),
PRIMARY KEY (nom_planta,estacio,nom_adob),
FOREIGN KEY (nom_planta) REFERENCES planta(nom_cientific),
FOREIGN KEY (estacio) REFERENCES estacio (estacio),
FOREIGN KEY (nom_adob) REFERENCES adob(nom_adob)
)ENGINE=InnoDB;

CREATE TABLE reproduccio
(nom_planta VARCHAR(30),
 nom_metode VARCHAR(10),
 grau_exit ENUM('Alt', 'Mitjà','Baix'),
 PRIMARY KEY (nom_planta,nom_metode),
 FOREIGN KEY (nom_planta) REFERENCES planta(nom_cientific),
 FOREIGN KEY (nom_metode)  REFERENCES metode_reproduccio(nom_metode)
 )ENGINE=InnoDB;









