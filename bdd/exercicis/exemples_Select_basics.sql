-- Active: 1675263799721@@127.0.0.1@3308@plantes
SELECT * FROM planta;
SELECT nom_cientific, estacio_floracio
FROM planta;

SELECT nom_cientific  Nom, estacio_floracio  Floracio
FROM planta
 WHERE  estacio_floracio='Hivern';

 SELECT nom_firma
FROM firma_comercial;

SELECT nom_planta
FROM planta_interior
WHERE ubicacio='Llum directa';

SELECT nom_planta, quantitat_adob
FROM dosi_adob
WHERE quantitat_adob>=50;

SELECT nom_planta
FROM reproduccio
WHERE nom_metode='Esqueix' AND grau_exit='Alt';

SELECT nom_planta
FROM exemplar_planta
WHERE num_exemplar=4;

SELECT DISTINCT nom_firma FROM adob;

SELECT DISTINCT nom_planta
FROM dosi_adob
WHERE estacio='Primavera';

SELECT nom_planta,nom_metode
FROM reproduccio
WHERE nom_metode='Esqueix' AND grau_exit='Alt';

SELECT nom_planta,nom_adob
FROM dosi_adob
WHERE quantitat_adob BETWEEN 40 AND 50;

SELECT nom_adob
FROM adob
WHERE nom_firma IN ('TIRSADOB','PRISADOB');

SELECT nom_popular
FROM planta
WHERE nom_popular LIKE '%n';

SELECT COUNT(*) AS 'Floracio primavera'
FROM planta
WHERE estacio_floracio='Primavera';

SELECT SUM(quantitat_adob) AS 'Totals adob'
FROM dosi_adob
WHERE estacio='Primavera' AND nom_adob='Casadob';


SELECT nom_planta,temperatura
FROM planta_interior
WHERE temperatura>(SELECT AVG(temperatura) FROM planta_interior);

SELECT nom_planta,nom_adob,estacio,quantitat_adob
FROM dosi_adob
WHERE quantitat_adob = (SELECT MIN(quantitat_adob) FROM dosi_adob);

SELECT nom_popular, nom_adob, estacio, quantitat_adob
FROM planta,dosi_adob
WHERE nom_cientific=nom_planta
AND quantitat_adob > (SELECT AVG(quantitat_adob) FROM dosi_adob)-10
AND quantitat_adob < (SELECT AVG(quantitat_adob) FROM dosi_adob)+10;





SELECT nom_popular
FROM planta
WHERE estacio_floracio ='Primavera'
ORDER BY nom_popular;

SELECT nom_popular
FROM planta
WHERE estacio_floracio <>'Primavera'
ORDER BY nom_popular DESC;

SELECT nom_planta, quantitat_adob
FROM dosi_adob
WHERE nom_adob='Casadob' OR nom_adob='Plantavit';


SELECT nom_planta, SUM(quantitat_adob)
FROM dosi_adob
WHERE nom_adob='Casadob' OR nom_adob='Plantavit'
GROUP BY nom_planta;

SELECT nom_planta, SUM(quantitat_adob)
FROM dosi_adob
WHERE nom_adob='Casadob' OR nom_adob='Plantavit'
GROUP BY nom_planta
HAVING SUM(quantitat_adob)>90;

#Creem la base de dades
CREATE DATABASE empresa3;
#Utilitzem la base de dades empresa
USE empresa3;
#Creem la taula treballador
CREATE TABLE treballador
(codi INT PRIMARY KEY,
nom VARCHAR(20)
);
#Creem la taula comissio
CREATE TABLE comissio
(nom VARCHAR(20) PRIMARY KEY,
cost INT(4)
);
#Introduim els valors a la taula treballador
INSERT INTO treballador VALUES (1,'Josep Font');
INSERT INTO treballador VALUES (2,'Joan Cambra');
INSERT INTO treballador VALUES (3,'Marta Serra');
#Introduim els valors a la taula comissio
INSERT INTO comissio VALUES ('Josep Font',200);
INSERT INTO comissio VALUES ('Joan Cambra',300);
INSERT INTO comissio VALUES ('Montse Rubió',500);
INSERT INTO comissio VALUES ('Pere Forner',400);

SELECT codi, treballador.nom, cost
FROM treballador, comissio
WHERE treballador.nom=comissio.nom;

SELECT codi, treballador.nom, cost
FROM treballador JOIN comissio ON treballador.nom=comissio.nom;

SELECT codi, tr.nom, cost
FROM treballador tr NATURAL JOIN comissio;

USE empresa3;
SELECT codi, treballador.nom, cost
FROM treballador INNER JOIN comissio ON treballador.nom=comissio.nom;
SELECT codi, tr.nom, cost
FROM treballador tr NATURAL INNER JOIN comissio;

SELECT codi, tr.nom, cost
FROM treballador tr LEFT JOIN comissio co ON tr.nom=co.nom;

SELECT codi, tr.nom, cost
FROM treballador tr NATURAL LEFT JOIN comissio co;


SELECT codi, tr.nom, cost
FROM treballador tr RIGHT JOIN comissio co ON tr.nom=co.nom;
SELECT codi, co.nom, cost
FROM treballador tr NATURAL RIGHT JOIN comissio co;

SELECT codi, tr.nom, cost
FROM treballador tr CROSS JOIN comissio co ON tr.nom=co.nom;
/* SELECT codi, co.nom, cost
FROM treballador tr  CROSS JOIN comissio co; */