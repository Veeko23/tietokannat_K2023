///////////////////////////////////////////////////////////////////////////////////////////////
Lisätään teoksia Procedurella :
///////////////////////////////////////////////////////////////////////////////////////////////

	        ETUNIMI | SUKUNIMI | TEOS | ISBN

CALL LisaaTeos('Ilkka','Remes','kotkanpesä','9789510452639');
CALL LisaaTeos('Ilkka','Remes','Kremlin Nyrkki','9789510467589');
CALL LisaaTeos('J.K','Rowling','Harry Potter ja salaisuuksien kammio','9789513184889');
CALL LisaaTeos('J. R. R.','Tolkien','The Lord of the Rings Deluxe Edition','9780544273443');
CALL LisaaTeos('Stephen','King','Satumaa','9789520448684');

///////////////////////////////////////////////////////////////////////////////////////////////
 SAMA TEOS JOSSA 2 ERI TEKIJÄÄÄ
///////////////////////////////////////////////////////////////////////////////////////////////
CALL LisaaTeos('Douglas','Preston','Laavalasikammio','9789512431526');
CALL LisaaTeos('Lincoln','Child','Laavalasikammio','9789512431526');         


///////////////////////////////////////////////////////////////////////////////////////////////
Lisätään muutama Asiakas :
///////////////////////////////////////////////////////////////////////////////////////////////

INSERT INTO asiakas VALUES(NULL,'Jaakko','Kivi','Tuulimyllyntie 66','044-260-0453');
INSERT INTO asiakas VALUES(NULL,'Pasi','Sistonen','Gesterbyntie 3','040-213-4593');
INSERT INTO asiakas VALUES(NULL,'Olli-Pekka','Nurminen','Viinikantie 41','042-358-3423');

///////////////////////////////////////////////////////////////////////////////////////////////
Tehdään Kirjat jotka ovat kirjastossa :
///////////////////////////////////////////////////////////////////////////////////////////////
INSERT INTO Kirja VALUES(NULL,'10','Fantasia');
INSERT INTO Kirja VALUES(NULL,'10','Fantasia');
INSERT INTO Kirja VALUES(NULL,'9','Fantasia');
INSERT INTO Kirja VALUES(NULL,'8','Fantasia');
INSERT INTO Kirja VALUES(NULL,'7','Jannitys');
INSERT INTO Kirja VALUES(NULL,'6','Jannitys');

///////////////////////////////////////////////////////////////////////////////////////////////
Tehdään lainaus tapahtumat procedurella :
///////////////////////////////////////////////////////////////////////////////////////////////

		ETUNIMI | SUKUNIMI | KIRJAN_NIMI

CALL Uusi_Lainaus('Jaakko','kivi','kotkanpesä');
CALL Uusi_Lainaus('Pasi','Sistonen','Satumaa');
CALL Uusi_Lainaus('Olli-Pekka','Nurminen','Harry Potter ja salaisuuksien kammio');


