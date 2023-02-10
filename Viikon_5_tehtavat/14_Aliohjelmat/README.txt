CREATE PROCEDURE `lisaaSuoritus`(
IN En VARCHAR(45),
IN Sn VARCHAR(45),
IN Kk VARCHAR(45),
IN Arvo TINYINT
)

Aliohjelma:BEGIN
DECLARE Stdnt INT DEFAULT 0;
DECLARE Period INT DEFAULT 0;


SELECT idOpiskelija INTO Stdnt FROM Opiskelija WHERE Sukunimi = Sn AND Etunimi = En;
if Stdnt=0 THEN
	SELECT 'opiskelijaa ei ole';
    LEAVE Aliohjelma;
END IF;

SELECT idOpintojakso INTO Period FROM opintojakso WHERE Koodi = Kk;
IF Period=0 THEN
	SELECT'Opintojaksoa Ei löydy';
    LEAVE Aliohjelma;
END IF;
	
    IF Arvo NOT BETWEEN 0 AND 5 THEN
    SELECT 'Arvosana Ei välillä 0-5';
	LEAVE Aliohjelma;
END IF;
INSERT INTO Arviointi VALUES(NULL,Arvo,CURDATE(),Stdnt,Period);

END