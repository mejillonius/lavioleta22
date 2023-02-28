DROP DATABASE IF EXISTS empresa;
CREATE DATABASE empresa DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE empresa;


CREATE TABLE treball
(nom VARCHAR(20) PRIMARY KEY,
edat SMALLINT(2),
carrec VARCHAR(50)
)
ENGINE=InnoDB;
#Exercici 2:
CREATE TABLE ciutat
(nom VARCHAR(25) PRIMARY KEY,
comarca VARCHAR(25) NOT NULL,
provincia VARCHAR(25) NOT NULL,
habitants INT(7)
);

SHOW CREATE TABLE ciutat;
#Exercici 3:
CREATE TABLE clientb
(idclient INT(3) AUTO_INCREMENT PRIMARY KEY,
nom VARCHAR(25) NOT NULL,
cognoms VARCHAR(25) NOT NULL,
data_naixement DATE,
tipus VARCHAR(10) DEFAULT 'Habitual',
UNIQUE(nom,cognoms)
)ENGINE=InnoDB;

SHOW CREATE TABLE clientb;
#Exercici 4:
CREATE TABLE departament
(numero SMALLINT(2),
nom VARCHAR(9) UNIQUE,
localitzacio VARCHAR(10)
)ENGINE=InnoDB;
#Exercici 5:
CREATE TABLE departament2
(numero SMALLINT(2) PRIMARY KEY,
nom VARCHAR(9) NOT NULL UNIQUE,
localitzacio VARCHAR(10)
)ENGINE=InnoDB;
#Exercici 6:
DROP DATABASE IF EXISTS botiga;
CREATE DATABASE botiga DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE botiga;
CREATE TABLE fabricant
(codi_fabricant SMALLINT(4) PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
adreça_web VARCHAR(20),
telefon CHAR(9)
)ENGINE=InnoDB;
CREATE TABLE producte
(codi_producte SMALLINT(4) PRIMARY KEY,
codi_fabricant SMALLINT(4) NOT NULL,
nom VARCHAR(20) NOT NULL,
descripcio VARCHAR(20),
categoria VARCHAR(20),
preu DECIMAL(5,2),
FOREIGN KEY (codi_fabricant) REFERENCES fabricant (codi_fabricant)
)ENGINE=InnoDB;
#Exercici 7:
DROP DATABASE IF EXISTS institut2;
CREATE DATABASE institut2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
USE institut2;

CREATE TABLE assignatura
(codi_assignatura CHAR(3) PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
cicle VARCHAR(20) NOT NULL,
curs SMALLINT(1)
)ENGINE=InnoDB;
CREATE TABLE professor
(codi_professor SMALLINT(3) PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(20) NOT NULL,
data_naixement DATE,
adreca VARCHAR(20),
telefon VARCHAR(9)
)ENGINE=InnoDB;
CREATE TABLE alumne
(codi_alumne SMALLINT(3) PRIMARY KEY,
nom VARCHAR(20) NOT NULL,
cognoms VARCHAR(20) NOT NULL,
data_naixement DATE,
adreca VARCHAR(20),
telefon VARCHAR(9),
data_primera_matricula DATE
)ENGINE=InnoDB;
CREATE TABLE imparteix
(codi_professor SMALLINT(3),
codi_assignatura CHAR(3),
PRIMARY KEY(codi_professor,codi_assignatura),
FOREIGN KEY (codi_professor) REFERENCES professor (codi_professor),
FOREIGN KEY (codi_assignatura) REFERENCES assignatura (codi_assignatura)
)ENGINE=InnoDB;
CREATE TABLE estudia
(codi_alumne SMALLINT(3),
codi_assignatura CHAR(3),
PRIMARY KEY(codi_alumne,codi_assignatura),
FOREIGN KEY (codi_alumne) REFERENCES alumne (codi_alumne),
FOREIGN KEY (codi_assignatura) REFERENCES assignatura (codi_assignatura)
)
ENGINE=InnoDB;