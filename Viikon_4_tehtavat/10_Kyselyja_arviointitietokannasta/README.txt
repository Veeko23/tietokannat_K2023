1) 	SELECT Etunimi,Sukunimi,osoite,luokkatunnus,paivamaara,arvosana FROM opiskelija
   	JOIN Arviointi ON Arviointi.idOpiskelija = Opiskelija.idOpiskelija WHERE arvosana = 0;

2)	SELECT Etunimi,Sukunimi,arvosana,nimi FROM opiskelija
	JOIN arviointi ON Arviointi.idOpiskelija = Opiskelija.idOpiskelija
	JOIN Opintojakso ON opintojakso.idOpintojakso = Arviointi.idOpintojakso
	WHERE Nimi ='Fysiikka 3' AND arvosana > 0;

3)	SELECT Etunimi,Sukunimi,arvosana,nimi FROM opiskelija
	JOIN arviointi ON Arviointi.idOpiskelija = Opiskelija.idOpiskelija
	JOIN Opintojakso ON opintojakso.idOpintojakso = Arviointi.idOpintojakso
	WHERE etunimi = 'hessu';

4)	SELECT etunimi, AVG(Arvosana) FROM arviointi
	JOIN opiskelija ON arviointi.idOpiskelija = opiskelija.idOpiskelija
	WHERE Etunimi = 'Aku';


5)	SELECT * FROM opintojakso
	LEFT JOIN arviointi ON opintojakso.idOpintojakso = arviointi.idOpintojakso WHERE arvosana IS NULL;
TAI
	SELECT * FROM arviointi
    	RIGHT JOIN opintojakso ON opintojakso.idOpintojakso = arviointi.idOpintojakso WHERE arvosana IS NULL ;