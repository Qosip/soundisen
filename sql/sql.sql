#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: user
#------------------------------------------------------------

CREATE TABLE user(
        email          Varchar (255) NOT NULL ,
        mdp            Varchar (30) NOT NULL ,
        prenom         Varchar (30) NOT NULL ,
        nom            Varchar (30) NOT NULL ,
        date_naissance Date NOT NULL ,
        photo_profil   Varchar (100) NOT NULL
	,CONSTRAINT user_PK PRIMARY KEY (email)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: album
#------------------------------------------------------------

CREATE TABLE album(
        id_album       Int  Auto_increment  NOT NULL ,
        titre          Varchar (50) NOT NULL ,
        date_parution  Date NOT NULL ,
        image          Varchar (100) NOT NULL
	,CONSTRAINT album_PK PRIMARY KEY (id_album)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: playlist
#------------------------------------------------------------

CREATE TABLE playlist(
        id        Int  Auto_increment  NOT NULL ,
        nom       Varchar (30) NOT NULL ,
        image     Varchar (100) NOT NULL ,
        date_crea Date NOT NULL ,
        email     Varchar (255) NOT NULL
	,CONSTRAINT playlist_PK PRIMARY KEY (id)

	,CONSTRAINT playlist_user_FK FOREIGN KEY (email) REFERENCES user(email)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: type_artiste
#------------------------------------------------------------

CREATE TABLE type_artiste(
        type_artiste Varchar (100) NOT NULL
	,CONSTRAINT type_artiste_PK PRIMARY KEY (type_artiste)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: style_musical
#------------------------------------------------------------

CREATE TABLE style_musical(
        style_musical Varchar (100) NOT NULL
	,CONSTRAINT style_musical_PK PRIMARY KEY (style_musical)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: artiste
#------------------------------------------------------------

CREATE TABLE artiste(
        id_artiste     Int  Auto_increment  NOT NULL ,
        nom            Varchar (30) NOT NULL ,
        prenom         Varchar (30) NOT NULL ,
        nom_scene      Varchar (50) ,
        date_naissance Date NOT NULL ,
        date_mort      Date ,
        photo          Varchar (50) NOT NULL ,
        type_artiste   Varchar (100) NOT NULL ,
        style_musical  Varchar (100) NOT NULL
	,CONSTRAINT artiste_PK PRIMARY KEY (id_artiste)

	,CONSTRAINT artiste_type_artiste_FK FOREIGN KEY (type_artiste) REFERENCES type_artiste(type_artiste)
	,CONSTRAINT artiste_style_musical0_FK FOREIGN KEY (style_musical) REFERENCES style_musical(style_musical)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: morceau
#------------------------------------------------------------

CREATE TABLE morceau(
        id_morceau    Int  Auto_increment  NOT NULL ,
        titre         Varchar (255) NOT NULL ,
        duree         Float NOT NULL ,
        date_parution Date NOT NULL ,
        style_musical Varchar (100) NOT NULL
	,CONSTRAINT morceau_PK PRIMARY KEY (id_morceau)

	,CONSTRAINT morceau_style_musical_FK FOREIGN KEY (style_musical) REFERENCES style_musical(style_musical)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: a_publie
#------------------------------------------------------------

CREATE TABLE a_publie(
        id_album   Int NOT NULL ,
        id_artiste Int NOT NULL
	,CONSTRAINT a_publie_PK PRIMARY KEY (id_album,id_artiste)

	,CONSTRAINT a_publie_album_FK FOREIGN KEY (id_album) REFERENCES album(id_album)
	,CONSTRAINT a_publie_artiste0_FK FOREIGN KEY (id_artiste) REFERENCES artiste(id_artiste)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: album_contient_morceaux
#------------------------------------------------------------

CREATE TABLE album_contient_morceaux(
        id_morceau Int NOT NULL ,
        id_album   Int NOT NULL
	,CONSTRAINT album_contient_morceaux_PK PRIMARY KEY (id_morceau,id_album)

	,CONSTRAINT album_contient_morceaux_morceau_FK FOREIGN KEY (id_morceau) REFERENCES morceau(id_morceau)
	,CONSTRAINT album_contient_morceaux_album0_FK FOREIGN KEY (id_album) REFERENCES album(id_album)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: playlist_contient_morceaux
#------------------------------------------------------------

CREATE TABLE playlist_contient_morceaux(
        id         Int NOT NULL ,
        id_morceau Int NOT NULL ,
        date_ajout Date NOT NULL
	,CONSTRAINT playlist_contient_morceaux_PK PRIMARY KEY (id,id_morceau)

	,CONSTRAINT playlist_contient_morceaux_playlist_FK FOREIGN KEY (id) REFERENCES playlist(id)
	,CONSTRAINT playlist_contient_morceaux_morceau0_FK FOREIGN KEY (id_morceau) REFERENCES morceau(id_morceau)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: a_lue
#------------------------------------------------------------

CREATE TABLE a_lue(
        id_morceau   Int NOT NULL ,
        email        Varchar (255) NOT NULL ,
        date_lecture Date NOT NULL ,
        favori       TinyINT NOT NULL
	,CONSTRAINT a_lue_PK PRIMARY KEY (id_morceau,email)

	,CONSTRAINT a_lue_morceau_FK FOREIGN KEY (id_morceau) REFERENCES morceau(id_morceau)
	,CONSTRAINT a_lue_user0_FK FOREIGN KEY (email) REFERENCES user(email)
)ENGINE=InnoDB;

