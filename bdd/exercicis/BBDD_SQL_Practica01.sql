/* ejercicio 1*/
CREATE DATABASE practica01 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
use practica01;

DROP DATABASE 'practica01';


CREATE TABLE TREBALL (
    nom VARCHAR(20) PRIMARY KEY,
    edat INT (3),
    carrec VARCHAR(50)
);
/* fin ejercicio 1*/

/* EJERCICIO 2*/

CREATE TABLE CIUTAT (
    nom VARCHAR(25) NOT NULL PRIMARY KEY,
    comarca VARCHAR(25) NOT NULL,
    provincia VARCHAR(25) NOT NULL,
    habitantes INT(7)
);

/* FIN EJERCICIO 2 */

/*  EJERCICIO 3 */

CREATE TABLE CLIENT (
    idclient INT(4) PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(20),
    cognoms VARCHAR(20),
    data_naixement DATE,
    tipus VARCHAR(20) DEFAULT 'habitual',

    UNIQUE (nom,cognoms)
);

/*FIN EJERCICIO 3 */

/* EJERCICIO 4 */

CREATE TABLE DEPARTAMENT (
    numero INT(2),
    nom CHAR(9) PRIMARY KEY,
    localitzacio CHAR(10)
);

/* FIN EJERCICIO 4 */

/* EJERCICIO 5 */

CREATE TABLE DEPARTAMENT2 (
    numero INT(2) PRIMARY KEY,
    nom CHAR(9) UNIQUE,
    localitzacio CHAR(10)
);

/* FIN EJERCICIO 5 */

/* EJERCICIO 6 */

CREATE TABLE PRODUCTE (
    idproducto INT(4) PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    descripcio VARCHAR (100),
    catecoria VARCHAR(20) NOT NULL,
    preu DECIMAL(4,2) NOT NULL,
    fabricant INT(4) NOT NULL,
    FOREIGN KEY (fabricant) REFERENCES FABRICANT(idfabricant)
);

CREATE TABLE FABRICANT (
    idfabricant INT(4) PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    web VARCHAR(20),
    telefon VARCHAR(20)
);

/* FIN EJERCICIO 6 */

/* EJERCICIO 7 */

CREATE TABLE ASIGNATURA (
    codi CHAR (3) PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    cicle VARCHAR(20),
    curs VARCHAR(20)
);

CREATE TABLE PROFESOR (
    codi CHAR (3) PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    cognoms VARCHAR(20),
    data_naixement DATE,
    telefon VARCHAR(20),
    adressa VARCHAR(20)
);

CREATE TABLE ALUMNE (
    codi CHAR (3) PRIMARY KEY,
    nom VARCHAR(20) NOT NULL,
    cognoms VARCHAR(20),
    data_naixement DATE,
    telefon VARCHAR(20),
    adressa VARCHAR(20),
    primera_matricula DATE NOT NULL
);

CREATE TABLE ESTUDIA (
    alumne CHAR (3) NOT NULL,
    asignatura CHAR (3) NOT NULL,
    PRIMARY KEY (alumne, asignatura),
    FOREIGN KEY (alumne) REFERENCES ALUMNE(codi),
    FOREIGN KEY (asignatura) REFERENCES ASIGNATURA(codi)
);

CREATE TABLE ENSEÑA (
    profesor CHAR (3) NOT NULL,
    asignatura CHAR (3) NOT NULL,
    PRIMARY KEY (profesor, asignatura),
    FOREIGN KEY (profesor) REFERENCES PROFESOR(codi),
    FOREIGN KEY (asignatura) REFERENCES ASIGNATURA(codi)
);

/* fin ejercicio 7 */