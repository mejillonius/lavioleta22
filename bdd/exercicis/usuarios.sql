-- Active: 1675263799721@@127.0.0.1@3308

    CREATE DATABASE permis
        DEFAULT CHARACTER SET = 'utf8mb4';
USE permis;
CREATE TABLE usuari
(codi INT PRIMARY KEY,
nom VARCHAR(25) NOT NULL
) ENGINE=InnoDB;
CREATE TABLE contrasenya
(codi INT PRIMARY KEY,
contrasenya VARCHAR(15),
FOREIGN KEY (codi) REFERENCES usuari(codi)
) ENGINE = InnoDB;

/*Exercici 1:
Crea un usuari anomenat anna.abad amb contrasenya anna.*/
CREATE USER 'anna.abad'@'localhost' IDENTIFIED BY 'anna';

/*Exercici 2:
Crea un usuari anomenat bernat.bonet que es podrà connectar des de l'ordinador IP 192.168.1.13,
amb contrasenya bernat, (contrasenya codificada en codi hash).*/ 
CREATE USER 'bernat.bonet'@'192.168.1.13' IDENTIFIED BY 'bernat';
CREATE USER 'bernat.bonet'@'192.168.1.13' IDENTIFIED BY PASSWORD '*AE66A16DB72C9E4EF1A742C4FC651C0FE70B88FF';

/*Crea tres usuaris (carla.cruz, david.dosta, eric.esteve) amb les seves contrasenyes (carla, david i eric,
respectivament) de tres maneres diferents:
– Amb l'ordre CREATE USER ...
– Amb l'ordre GRANT ...
- Inserint a la taula corresponent*/
CREATE USER 'carla.cruz' IDENTIFIED BY 'carla',
'david.dosta' IDENTIFIED BY 'david','eric.esteve' IDENTIFIED BY 'eric';
GRANT USAGE ON *.* TO 'carla.cruz' IDENTIFIED BY 'carla',
'david.dosta' IDENTIFIED BY 'david','eric.esteve' IDENTIFIED BY 'eric';

/*Fer insercions a la taula user de la base de dades mysql.*/

/*Exercici 4:
L'usuari anna.abad és l'administrador, per tant que tingui permís per a fer tot.*/
GRANT ALL PRIVILEGES ON *.* TO 'anna.abad' WITH GRANT OPTION;

/*Exercici 5:
a) Dona permís a bernat.bonet els privilegis de seleccionar i inserir registres sobre la
taula usuari.*/
GRANT SELECT,INSERT ON permis.usuari TO 'bernat.bonet'@'192.168.1.13';

/*Exercici 6:
a)Dona permís a carla.cruz els privilegis d'inserir registres sobre la taula usuari.*/
GRANT INSERT ON permis.usuari TO 'carla.cruz';

/*Exercici 7:
Fes que l'usuari anna.abad assigni tots els permisos a carla.cruz.*/
GRANT ALL PRIVILEGES ON permis.usuari TO 'carla.cruz';

/*Exercici 8:
a) Assigna permisos a bernat.bonet per modificar la contrasenya de la taula
contrasenya.*/
GRANT UPDATE (contrasenya) ON permis.contrasenya TO 'bernat.bonet'@'192.168.1.13';

/*Exercici 9:
Amb l'opció WITH GRANT OPTION se li pot donar a l'usuari que rep permisos el privilegi per que pugui donarlos
a altres usuaris.
Assigna tots els permisos a carla.cruz per la taula usuari, donant-li permisos per
assignar permisos a altres.*/
GRANT ALL PRIVILEGES ON permis.usuari TO 'carla.cruz' WITH GRANT OPTION;

/*Exercici 10:
a) Assigna a david.dosta permís per mostrar els registres de la taula usuari.*/
GRANT SELECT ON permis.usuari TO 'david.dosta';
/*b) Comprova que no li pot assignar el mateix permís per la taula contrasenya.*/
GRANT SELECT ON permis.contrasenya TO 'david.dosta'; 
GRANT USAGE ON *.* TO 'ivet.izquierdo' IDENTIFIED BY 'ivet';