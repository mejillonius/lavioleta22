-- Active: 1675263799721@@127.0.0.1@3308
DROP DATABASE IF EXISTS institut;
CREATE DATABASE institut DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE institut;

CREATE TABLE alumne
(codi INTEGER NOT NULL,
nom CHAR(20) NOT NULL,
cognoms CHAR(40) NOT NULL,
data_naixement DATE,
PRIMARY KEY (codi)
);
DROP TABLE alumne;
CREATE TABLE alumne
(codi SMALLINT(4),
nom VARCHAR(20),
cognoms VARCHAR(40),
inscripcio DATETIME,
data_naixement DATE,
via_acces CHAR(1),
nota_acces DECIMAL(4,2)
);

CREATE TABLE via
(via_acces CHAR(1) PRIMARY KEY
);
CREATE TABLE alumne
(codi SMALLINT(4) AUTO_INCREMENT PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(40) NOT NULL UNIQUE,
inscripcio DATETIME,
data_naixement DATE,
via_acces CHAR(1) DEFAULT 'A' REFERENCES via,
nota_acces DECIMAL(4,2)
);

CREATE TABLE `alumne` (
  `codi` smallint(4) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  `cognoms` varchar(40) NOT NULL,
  `inscripcio` datetime DEFAULT NULL,
  `data_naixement` date DEFAULT NULL,
  `via_acces` char(1) DEFAULT 'A',
  `nota_acces` decimal(4,2) DEFAULT NULL,
  PRIMARY KEY (`codi`),
  UNIQUE KEY `cognoms` (`cognoms`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE via;

DROP TABLE alumne;


CREATE TABLE via
(via_acces CHAR(1) PRIMARY KEY
)ENGINE=InnoDB;

CREATE TABLE alumne
(codi INT(4) PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(40) NOT NULL,
inscripcio DATETIME,
data_naixement DATE,
via_acces CHAR(1) DEFAULT 'A',
nota_acces DECIMAL(4,2),
UNIQUE (nom,cognoms),
FOREIGN KEY (via_acces) REFERENCES via(via_acces)
)AUTO_INCREMENT=1000,
ENGINE=InnoDB;

SHOW CREATE TABLE alumne;

ALTER TABLE via ADD descripcio CHAR(4);
ALTER TABLE via MODIFY descripcio CHAR(8);
ALTER TABLE via CHANGE descripcio ccc SMALLINT(4);
ALTER TABLE via RENAME via_acces;
ALTER TABLE via_acces DROP descripcio;

SHOW CREATE TABLE via_acces;
SHOW CREATE TABLE alumne;

use institut;

SHOW INDEX FROM alumne;

CREATE TABLE materia
(codi_materia INT AUTO_INCREMENT PRIMARY KEY,
materia VARCHAR(20),
departament VARCHAR(20)
);
SHOW INDEX FROM materia;
ALTER TABLE materia MODIFY materia VARCHAR(20) UNIQUE;
SHOW INDEX FROM materia;
CREATE INDEX xdepartament ON materia (departament);
SHOW INDEX FROM materia;

DROP INDEX xdepartament ON materia;
 DROP INDEX materia ON materia;
DROP INDEX primary ON materia;

use empresa;

CREATE TABLE personal
(codi INT(4) AUTO_INCREMENT PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(40) NOT NULL,
data_naixement DATE,
salari DECIMAL(6,2),
UNIQUE(nom,cognoms)
)ENGINE=InnoDB;

DROP TABLE personal;
INSERT INTO personal VALUES (null,'Josep','Font',null,1867.56);
INSERT INTO personal VALUES (null,'Jordi','Vila','1979/2/20',1243.06);
INSERT INTO personal VALUES (null,'Anna','Torner',null,1243.06);
INSERT INTO personal (nom,cognoms) VALUES ('Miquel','Ferrando');

ALTER TABLE personal ADD CONSTRAINT sal_pos CHECK (salari>0);


INSERT INTO personal VALUES (null,'Gerardino','Codina','1974/5/07',1402.89);

DELETE FROM personal WHERE codi=1;
DELETE FROM personal WHERE cognoms='Codina' LIMIT 2;

UPDATE personal SET salari=salari*1.032;

ALTER TABLE personal ADD sexe ENUM('H','D');

UPDATE personal SET sexe='H';
UPDATE personal SET sexe='D' WHERE codi IN (3,6,15);

ALTER TABLE personal ADD carrec VARCHAR(20);
UPDATE personal SET carrec='Programador';
UPDATE personal SET carrec='Cap de projecte' WHERE codi IN (18,22);

CREATE TABLE projecte
(codi SMALLINT AUTO_INCREMENT PRIMARY KEY,
descripcio VARCHAR(30) NOT NULL,
cap INT(4),
CONSTRAINT fk_cap FOREIGN KEY (cap) REFERENCES personal(codi)
);
CREATE TABLE assignat
(codi_empleat INT(4) NOT NULL,
codi_projecte SMALLINT NOT NULL,
data_inici DATE NOT NULL,
data_final DATE,
PRIMARY KEY (codi_empleat,codi_projecte),
CONSTRAINT fk_empleat FOREIGN KEY (codi_empleat) REFERENCES personal(codi),

CONSTRAINT fk_projecte FOREIGN KEY (codi_projecte) REFERENCES projecte(codi)
);

INSERT INTO projecte VALUES (null,'Disseny de BD agència de viatges',18);
INSERT INTO projecte VALUES (null,'Disseny programa gestió hotel',22);
INSERT INTO projecte VALUES (null,'Programa gestió botiga informàtica',18);

ALTER TABLE projecte MODIFY descripcio VARCHAR(60) NOT NULL;

INSERT INTO assignat VALUES (2,1,'2003/3/12','2004/12/23');
INSERT INTO assignat VALUES (3,1,'2003/3/12','2004/7/17');
INSERT INTO assignat VALUES (4,1,'2004/7/18','2004/12/23');
INSERT INTO assignat VALUES (6,2,'2004/1/7','2004/9/13');
INSERT INTO assignat VALUES (15,2,'2004/1/7',null);
INSERT INTO assignat VALUES (17,2,'2004/1/7','2004/9/13');
INSERT INTO assignat VALUES (18,2,'2004/1/7',null);
INSERT INTO assignat VALUES (2,3,'2005/1/7',null);
INSERT INTO assignat VALUES (4,3,'2005/1/7',null);
INSERT INTO assignat VALUES (22,3,'2004/9/14',null);
INSERT INTO assignat VALUES (23,3,'2004/9/14',null);