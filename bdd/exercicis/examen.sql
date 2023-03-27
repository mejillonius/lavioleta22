-- Active: 1675263800707@@127.0.0.1@3306@plantes

/* exercici 1:
mostra el nom popular i la ubicacio de les plantes d'interior de les que tenim algun exemplar */

select nom_popular, ubicacio from planta INNER JOIN planta_interior on planta.nom_cientific = planta_interior.nom_planta where planta.nom_cientific in (SELECT nom_planta from exemplar_planta);

/* Exercici 2:
mostra el nom popular, l'adob i la quantitat d'asuest mes 10 unitats, de les plantes que utilitzen un adob de la firma prisadob o que la quantitat es menor o igual a 30 unitats */

select nom_popular, nom_adob, quantitat_adob + 10 from planta INNER JOIN dosi_adob on planta.nom_cientific = dosi_adob.nom_planta WHERE nom_adob in (SELECT nom_adob FROM adob where nom_firma = 'PRISADOB');

/* exercici 3:
mostra el nom popular de les plantes que utilitzen un adob de accio inmediata i que floreixen a la primavera */

select distinct nom_popular 
from planta 
INNER JOIN dosi_adob on planta.nom_cientific = dosi_adob.nom_planta 
WHERE estacio_floracio = 'Primavera' AND nom_adob in (SELECT nom_adob FROM adob where tipus_adob = 'AI'); 

/* exercici 4:
mostra el nom cientific i el metode de reproduccio de les plantes que no utilitzen l'adob casaadob */
select nom_cientific, nom_metode
from planta 
INNER join reproduccio on planta.nom_cientific = reproduccio.nom_planta
INNER JOIN dosi_adob on planta.nom_cientific = dosi_adob.nom_planta 
WHERE not nom_adob = 'Casadob';

/* exercici 5:
mostra les estacions de floracio de les quals tenim algun exemplar de planta */

select distinct estacio_floracio
from planta
INNER join exemplar_planta on planta.nom_cientific = exemplar_planta.nom_planta
where estacio_floracio is NOT NULL;

/* exercici 6:
mostra el nom popular, el metode de reproduccio i la primera lletra del grau d'exit de les plantes que no tenen un grau d'exit alt */

select nom_popular, nom_metode, LEFT(grau_exit, 1)
from planta
INNER JOIN reproduccio on planta.nom_cientific = reproduccio.nom_planta
where NOT grau_exit = 'Alt';

/* exercici 7:
mostra el nom de les plantes que se'ls hi ha afegit adob en la mateixa estacio que la seva floracio */

select distinct nom_cientific 
from planta
INNER JOIN dosi_adob on planta.nom_cientific = dosi_adob.nom_planta 
where estacio_floracio = estacio;

/* exercici 8:
mostra en minuscules el nom cientific de les plantes d'extrerior que utilitzen adobs de la firma cirsadob i les plantes d'interior que utilitzen el metode de reproduccio per capficats */

select DISTINCT LOWER (nom_cientific)
from planta
INNER JOIN reproduccio on planta.nom_cientific = reproduccio.nom_planta
INNER JOIN dosi_adob on planta.nom_cientific = dosi_adob.nom_planta 
where ( nom_cientific in (select nom_planta FROM planta_exterior) 
        AND nom_adob in (select nom_adob from adob where nom_firma = 'CIRSADOB' ))
OR (nom_metode = 'Capficats' 
        AND nom_cientific in (select nom_planta from planta_interior))
