import mysql.connector

# Connexion a la base de donnees
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='',
    database='soundisen'
)
cursor = conn.cursor()

# Inserer des enregistrements dans la table 'style_musical'
style_musical_records = [
    ('Pop',),
    ('Hip-hop',),
    ('EDM',),
    ('Rock',),
    ('Electronique',),
]

insert_style_musical_query = "INSERT INTO style_musical (style_musical) VALUES (%s)"
cursor.executemany(insert_style_musical_query, style_musical_records)

# Inserer des enregistrements dans la table 'type_artiste'
type_artiste_records = [
    ('chanteur',),
    ('chanteuse',),
    ('dj',),
    ('groupe',),
]

insert_type_artiste_query = "INSERT INTO type_artiste (type_artiste) VALUES (%s)"
cursor.executemany(insert_type_artiste_query, type_artiste_records)

# Inserer des enregistrements dans la table 'user'
user_records = [
    ('francois@example.com', 'mdp1', 'Francois', 'David', '2003-12-30', 'photo1.jpg'),
    ('timote@example.com', 'mdp2', 'Timote', 'Chimienti', '2003-08-07', 'photo2.jpg'),
]

insert_user_query = "INSERT INTO user (email, mdp, prenom, nom, date_naissance, photo_profil) VALUES (%s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_user_query, user_records)

# Inserer des enregistrements dans la table 'album'
album_records = [
    # ed sheeran:
    ('1','+', '2011-09-09', 'image1.jpg'),
    ('2','x', '2014-06-20', 'image2.jpg'),
    # David Guetta:
    ('3','One Love', '2009-08-24', 'image3.jpg'),
    ('4','Listen', '2014-11-21', 'image4.jpg'),
    # Taylor Swift:
    ('5','1989', '2014-10-27', 'image5.jpg'),
    ('6','Reputation', '2017-11-10', 'image6.jpg'),
    # The Beatles:
    ('7',"Sgt. Pepper's Lonely Hearts Club Band", '1967-06-01', 'image7.jpg'),
    ('8','Abbey Road', '1969-09-26', 'image8.jpg'),
    # Daft Punk:
    ('9','Discovery', '2001-02-26', 'image9.jpg'),
    ('10','Random Access Memories', '2013-05-17', 'image10.jpg'),
]

insert_album_query = "INSERT INTO album (id_album, titre, date_parution, image) VALUES (%s, %s, %s, %s)"
cursor.executemany(insert_album_query, album_records)

# Inserer des enregistrements dans la table 'artiste'
artiste_records = [
    ('1', 'Sheeran', 'Edward Christopher', 'Ed Sheeran', '1991-02-17', None, 'img', 'chanteur', 'Pop'),
    ('2', 'Guetta', 'Pierre David', 'David Guetta', '1967-11-07', None, 'img', 'dj', 'EDM'),
    ('3', 'Swift', 'Taylor Alison', 'Taylor Swift', '1989-09-13', None, 'img', 'chanteuse', 'Pop'),
    ('4', 'The Beatles', '', 'The Beatles', '1940-11-09', '1980-12-09', 'img', 'groupe', 'Rock'),
    ('5', 'Daft Punk', '', 'Daft Punk', '1974-01-03', None, 'img', 'groupe', 'Electronique'),
]

insert_artiste_query = "INSERT INTO artiste (id_artiste, nom, prenom, nom_scene, date_naissance, date_mort, photo, type_artiste, style_musical) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_artiste_query, artiste_records)

# Inserer des enregistrements dans la table 'morceau'
morceau_records = [
    ('1','The A Team', 4.18, '2011-09-09', 'Pop', 'chemin_vers_morceau1'),
    ('2','Lego House', 3.04, '2011-09-09', 'Pop', 'chemin_vers_morceau2'),
    ('3','Sing', 3.55, '2014-06-20', 'Pop', 'chemin_vers_morceau3'),
    ('4','Thinking Out Loud', 4.41, '2014-06-20', 'Pop', 'chemin_vers_morceau4'),
    ('5','When Love Takes Over', 3.11, '2009-08-24', 'EDM', 'chemin_vers_morceau5'),
    ('6','Sexy Bitch', 3.15, '2009-08-24', 'EDM', 'chemin_vers_morceau6'),
    ('7','Dangerous', 3.23, '2014-11-21', 'EDM', 'chemin_vers_morceau7'),
    ('8','Lovers on the Sun', 3.23, '2014-11-21', 'EDM', 'chemin_vers_morceau8'),
    ('9','Shake It Off', 3.39, '2014-10-27', 'Pop', 'chemin_vers_morceau9'),
    ('10','Blank Space', 3.51, '2014-10-27', 'Pop', 'chemin_vers_morceau10'),
    ('11',"Look What You Made Me Do", 3.31, '2017-11-10', 'Pop', 'chemin_vers_morceau11'),
    ('12','Delicate', 3.52, '2017-11-10', 'Pop', 'chemin_vers_morceau12'),
    ('13',"With a Little Help from My Friends", 2.44, '1967-06-01', 'Rock', 'chemin_vers_morceau13'),
    ('14',"Lucy in the Sky with Diamonds", 3.28, '1967-06-01', 'Rock', 'chemin_vers_morceau14'),
    ('15','Come Together', 4.19, '1969-09-26', 'Rock', 'chemin_vers_morceau15'),
    ('16','Here Comes the Sun', 3.05, '1969-09-26', 'Rock', 'chemin_vers_morceau16'),
    ('17','One More Time', 5.20, '2001-02-26', 'Electronique', 'chemin_vers_morceau17'),
    ('18','Harder, Better, Faster, Stronger', 3.43, '2001-02-26', 'Electronique', 'chemin_vers_morceau18'),
    ('19','Get Lucky', 4.08, '2013-05-17', 'Electronique', 'chemin_vers_morceau19'),
    ('20','Instant Crush', 5.37, '2013-05-17', 'Electronique', 'chemin_vers_morceau20'),
]

insert_morceau_query = "INSERT INTO morceau (id_morceau, titre, duree, date_parution, style_musical, emplacement) VALUES (%s, %s, %s, %s, %s, %s)"
cursor.executemany(insert_morceau_query, morceau_records)


conn.commit()
conn.close()
