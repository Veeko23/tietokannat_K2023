////////////////////////////////////////////////////////////////////////
Owner taulun teko:	
////////////////////////////////////////////////////////////////////////

CREATE TABLE owner (
OwnerID int,
First_Name varchar(255),
Last_Name varchar(255),
Address varchar(255)
);

////////////////////////////////////////////////////////////////////////
Poistetaan pet-taulusta owner-kenttä. Lisätään sen tilalle viiteavain omistaja-tauluun:
////////////////////////////////////////////////////////////////////////

mysql> ALTER TABLE pet DROP COLUMN owner;
mysql> ALTER TABLE pet ADD COLUMN petID INT PRIMARY KEY AUTO_INCREMENT;
mysql> ALTER TABLE pet ADD COLUMN ownerID INT;
mysql> ALTER TABLE pet ADD CONSTRAINT FOREIGN KEY(ownerID) REFERENCES 
owner(ownerID);

////////////////////////////////////////////////////////////////////////
Päivitetty pet taulut:
////////////////////////////////////////////////////////////////////////

UPDATE pet SET ownerID=3 WHERE name='Claws' OR name='Chirpy' OR name='Whistler';
UPDATE pet SET ownerID=1 WHERE name='Buffy' OR name='fluffy';
UPDATE pet SET ownerID=4 WHERE name='Fang' OR name='Slim';
UPDATE pet SET ownerID=5 WHERE name='Bowser';

////////////////////////////////////////////////////////////////////////
Lisätään Owner tauluun tiedot : 
////////////////////////////////////////////////////////////////////////

INSERT INTO owner VALUES ( 'Harold','Lloyd','Someaddress 1',NULL);
INSERT INTO owner VALUES ( 'Gwen','Stefani','Someaddress 2',NULL);
INSERT INTO owner VALUES ( 'Benny','Hill','Someaddress 3',NULL);
INSERT INTO owner VALUES ( 'Diane','Keaton','Someaddress 4',NULL);

////////////////////////////////////////////////////////////////////////
Lisätään tässä vaiheessa owner-tauluun henkilö, joka ei omista lemmikkiä. Lisätään myös pettauluun lemmikki, jolla ei ole omistajaa
////////////////////////////////////////////////////////////////////////

INSERT INTO owner VALUES ( 'Charlie','Chaplin','',NULL);
INSERT INTO pet VALUES ( 'Puffball','dog','m','2014-09-04',NULL,NULL,NULL);

////////////////////////////////////////////////////////////////////////
pet ja owner ja niiden välillä yhdestä moneen-yhteys :
////////////////////////////////////////////////////////////////////////

SELECT * FROM owner JOIN pet ON owner.OwnerID = pet.OwnerID;


