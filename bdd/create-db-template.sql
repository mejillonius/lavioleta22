-- Active: 1675263800707@@127.0.0.1@3306@empresa
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

create table personal (
   codi INT(4) AUTO_INCREMENT PRIMARY KEY,
   nom varchar(20) not null,
   cognom varchar(40) not null,
   data_naixament date,
   salari DECIMAL(6,2),
   UNIQUE (nom, cognom)
) engine=InnoDB;


alter table personal ADD CONSTRAINT sal_pos CHECK(salari>0);

INSERT INTO personal VALUES (null,'Josep','Font',null,1867.56);
INSERT INTO personal VALUES (null,'Jordi','Vila','1979/2/20',1243.06); 
INSERT INTO personal VALUES (null,'Anna','Torner',null,1243.06); 
INSERT INTO personal (nom,cognom) VALUES ('Miquel','Ferrando');



INSERT INTO personal VALUES (null,'Josep','Font',null,1867.56);
INSERT INTO personal VALUES (null,'Jordi','Vila','1970/2/20',1243.06); 
INSERT INTO personal VALUES (null,'Anna','Torner',null,1243.06);
INSERT INTO personal VALUES (null,'Miquel','Ferrando',null,null);
#Els cognoms no poden ser nuls
#INSERT INTO personal VALUES (null,'Carla',null,'1968/4/13',1765.00); 
INSERT INTO personal VALUES (null,'Gerard','Codina','1974/5/27',1402.89); 
INSERT INTO personal VALUES (6,'Mercè','Vila','1978/6/27',1765.00);
#Està duplicat el nom-cognom amb un altre registre
#INSERT INTO personal VALUES (null,'Anna','Torner','1973/2/1',null); 
INSERT INTO personal VALUES (15,'Marta','Casas',null,null);
INSERT INTO personal VALUES (null,'Joel','Codina','1981/2/14',1402.89); 
#El sou ha de ser positiu
#INSERT INTO personal VALUES (null,'Marta','Pérez','1992/2/20',0.00);

DELETE FROM personal WHERE codi=1;
DELETE FROM personal WHERE cognom='Codina' LIMIT 2;

UPDATE personal SET salari=salari*1.032;

ALTER TABLE personal ADD sexe ENUM('H','D');

UPDATE personal SET sexe='H';
UPDATE personal SET sexe='D' WHERE codi IN (3,6,16);

ALTER TABLE personal ADD carrec VARCHAR(20);
UPDATE personal SET carrec='Programador';
UPDATE personal SET carrec='Cap de projecte' WHERE codi IN (17,18);

CREATE TABLE projecte(
   codi SMALLINT AUTO_INCREMENT PRIMARY KEY,
   descripcio VARCHAR(50) NOT NULL,
   cap INT,
   CONSTRAINT fk_cap FOREIGN KEY (cap) REFERENCES personal(codi)
   );
CREATE TABLE assignat(
   codi_empleat  INT NOT NULL,
   codi_projecte SMALLINT NOT NULL,
   data_inici DATE NOT NULL,
   data_final DATE,
   PRIMARY KEY (codi_empleat,codi_projecte),
   CONSTRAINT fk_empleat FOREIGN KEY (codi_empleat) REFERENCES personal(codi),
   CONSTRAINT fk_projecte FOREIGN KEY (codi_projecte) REFERENCES  projecte(codi)
   );



INSERT INTO projecte VALUES (null,'Disseny de BD agència de viatges',17); 
INSERT INTO projecte VALUES (null,'Disseny programa gestió hotel',15); 
INSERT INTO projecte VALUES (null,'Programa gestió botiga informàtica',17);
INSERT INTO assignat VALUES (2,1,'2003/3/12','2004/12/23'); 
INSERT INTO assignat VALUES (3,1,'2003/3/12','2004/7/17'); 
INSERT INTO assignat VALUES (4,1,'2004/7/18','2004/12/23'); 
INSERT INTO assignat VALUES (6,2,'2004/1/7','2004/9/13'); 
INSERT INTO assignat VALUES (15,2,'2004/1/7',null);
INSERT INTO assignat VALUES (17,2,'2004/1/7','2004/9/13'); 
INSERT INTO assignat VALUES (3,2,'2004/1/7',null);
INSERT INTO assignat VALUES (2,3,'2005/1/7',null);
INSERT INTO assignat VALUES (4,3,'2005/1/7',null);
INSERT INTO assignat VALUES (6,3,'2004/9/14',null); 
INSERT INTO assignat VALUES (18,3,'2004/9/14',null);

