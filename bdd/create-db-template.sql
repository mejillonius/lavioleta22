-- Active: 1675263800707@@127.0.0.1@3306@institut
DROP DATABASE IF EXISTS institut;
CREATE DATABASE institut DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE institut;

DROP DATABASE institut;

CREATE TABLE alumne
   (codi           INTEGER NOT NULL,
   nom             CHAR(20) NOT NULL,
   cognoms         CHAR(40) NOT NULL,
   data_naixement  DATE,
   PRIMARY KEY (codi)
   );


DROP TABLE alumne;
DROP TABLE via;

CREATE TABLE alumne
   (codi SMALLINT(4),
   nom VARCHAR(20),
   cognoms VARCHAR(40),
   inscripcio DATETIME,
   data_naixement DATE,
   via_acces CHAR(1),
   nota_acces DECIMAL(4,2)
   )
   ;



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
) ;


CREATE TABLE via
(via_acces CHAR(1) PRIMARY KEY)
ENGINE=InnoDB;
CREATE TABLE alumne
(codi INT(4) PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(40) NOT NULL,
inscripcio DATETIME,
data_naixement DATE,
via_acces CHAR(1) DEFAULT'x',
nota_acces DECIMAL(4,2),
UNIQUE (nom,cognoms),
FOREIGN KEY (via_acces) REFERENCES via(via_acces)
)AUTO_INCREMENT=1000,
ENGINE=InnoDB
;

SHOW CREATE TABLE alumne;

alter table via add descripcio char(4);
alter table via modify descripcio char(8);
alter table via change descripcio ccc SMALLINT;
alter table via rename via_access;


CREATE TABLE materia
       (codi_materia 
INT AUTO_INCREMENT PRIMARY KEY,
       materia VARCHAR(20),
       departament VARCHAR(20)
       );

SHOW INDEX FROM materia;
ALTER TABLE materia MODIFY materia VARCHAR(20) UNIQUE; SHOW INDEX FROM materia;
CREATE INDEX xdepartament ON materia (departament); SHOW INDEX FROM materia;

drop INDEX xdepartament on materia;
drop index materia on materia;