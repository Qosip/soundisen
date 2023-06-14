-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : mer. 14 juin 2023 à 15:36
-- Version du serveur : 10.6.5-MariaDB
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `soundisen`
--

-- --------------------------------------------------------

--
-- Structure de la table `album`
--

DROP TABLE IF EXISTS `album`;
CREATE TABLE IF NOT EXISTS `album` (
  `id_album` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(50) NOT NULL,
  `date_parution` date NOT NULL,
  `cover` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_album`)
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `album`
--

INSERT INTO `album` (`id_album`, `titre`, `date_parution`, `cover`) VALUES
(1, '+', '2011-09-09', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(2, 'x', '2014-06-20', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(3, 'One Love', '2009-08-24', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(4, 'Listen', '2014-11-21', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(5, '1989', '2014-10-27', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(6, 'Reputation', '2017-11-10', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(7, 'Sgt. Pepper\'s Lonely Hearts Club Band', '1967-06-01', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(8, 'Abbey Road', '1969-09-26', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(9, 'Discovery', '2001-02-26', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(10, 'Random Access Memories', '2013-05-17', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg'),
(11, 'Tribal Memories', '2018-05-16', 'https://thumbs.dreamstime.com/b/black-vinyl-record-isolated-white-34399328.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `album_contient_morceaux`
--

DROP TABLE IF EXISTS `album_contient_morceaux`;
CREATE TABLE IF NOT EXISTS `album_contient_morceaux` (
  `id_morceau` int(11) NOT NULL,
  `id_album` int(11) NOT NULL,
  PRIMARY KEY (`id_morceau`,`id_album`),
  KEY `album_contient_morceaux_album0_FK` (`id_album`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `album_contient_morceaux`
--

INSERT INTO `album_contient_morceaux` (`id_morceau`, `id_album`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5),
(11, 6),;

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

DROP TABLE IF EXISTS `artiste`;
CREATE TABLE IF NOT EXISTS `artiste` (
  `id_artiste` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom_scene` varchar(50) DEFAULT NULL,
  `date_naissance` date NOT NULL,
  `date_mort` date DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `type_artiste` varchar(100) NOT NULL,
  `style_musical` varchar(100) NOT NULL,
  PRIMARY KEY (`id_artiste`),
  KEY `artiste_type_artiste_FK` (`type_artiste`),
  KEY `artiste_style_musical0_FK` (`style_musical`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `artiste`
--

INSERT INTO `artiste` (`id_artiste`, `nom`, `prenom`, `nom_scene`, `date_naissance`, `date_mort`, `photo`, `type_artiste`, `style_musical`) VALUES
(1, 'Sheeran', 'Edward Christopher', 'Ed Sheeran', '1991-02-17', NULL, 'img', 'chanteur', 'Pop'),
(2, 'Guetta', 'Pierre David', 'David Guetta', '1967-11-07', NULL, 'img', 'dj', 'EDM'),
(3, 'Swift', 'Taylor Alison', 'Taylor Swift', '1989-09-13', NULL, 'img', 'chanteuse', 'Pop'),
(4, 'The Beatles', '', 'The Beatles', '1940-11-09', '1980-12-09', 'img', 'groupe', 'Rock'),
(5, 'Daft Punk', '', 'Daft Punk', '1974-01-03', NULL, 'img', 'groupe', 'Electronique'),
(6, 'Leʞs', 'Lucas', 'Boussouar', '1995-08-30', NULL, 'img', 'dj', 'EDM');

-- --------------------------------------------------------

--
-- Structure de la table `a_lue`
--

DROP TABLE IF EXISTS `a_lue`;
CREATE TABLE IF NOT EXISTS `a_lue` (
  `id_morceau` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_lecture` datetime NOT NULL,
  `favori` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `a_lue`
--

INSERT INTO `a_lue` (`id_morceau`, `email`, `date_lecture`, `favori`) VALUES
(1, 'francois@example.com', '2023-06-07 05:43:34', 0),
(1, 'timote@example.com', '2023-06-06 14:43:01', 0),
(2, 'francois@example.com', '2023-06-07 06:18:30', 0),
(2, 'timote@example.com', '2023-06-06 18:41:40', 0),
(3, 'francois@example.com', '2023-06-06 18:16:29', 0),
(4, 'francois@example.com', '2023-06-07 06:38:01', 0),
(4, 'timote@example.com', '2023-06-06 14:43:01', 1),
(5, 'francois@example.com', '2023-06-07 05:43:26', 0),
(97, 'francois@example.com', '2023-06-13 22:10:43', 0),
(7, 'francois@example.com', '2023-06-13 22:10:43', 0),
(7, 'francois@example.com', '2023-06-13 22:10:43', 0),
(101, 'francois@example.com', '2023-06-13 22:10:43', 0),
(124, 'francois@example.com', '2023-06-13 22:10:43', 0),
(123, 'francois@example.com', '2023-06-13 22:10:43', 0),
(101, 'francois@example.com', '2023-06-13 22:10:43', 0),
(97, 'francois@example.com', '2023-06-13 22:10:53', 0),
(108, 'francois@example.com', '2023-06-14 17:26:48', 0),
(108, 'francois@example.com', '2023-06-14 17:26:48', 0),
(108, 'francois@example.com', '2023-06-14 17:26:49', 0),
(108, 'francois@example.com', '2023-06-14 17:26:50', 0),
(108, 'francois@example.com', '2023-06-14 17:26:51', 0),
(108, 'francois@example.com', '2023-06-14 17:26:51', 0),
(108, 'francois@example.com', '2023-06-14 17:27:08', 0),
(118, 'francois@example.com', '2023-06-14 17:27:50', 0),
(118, 'francois@example.com', '2023-06-14 17:27:52', 0);

-- --------------------------------------------------------

--
-- Structure de la table `a_publie`
--

DROP TABLE IF EXISTS `a_publie`;
CREATE TABLE IF NOT EXISTS `a_publie` (
  `id_album` int(11) NOT NULL,
  `id_artiste` int(11) NOT NULL,
  PRIMARY KEY (`id_album`,`id_artiste`),
  KEY `a_publie_artiste0_FK` (`id_artiste`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `a_publie`
--

INSERT INTO `a_publie` (`id_album`, `id_artiste`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(5, 3),
(6, 3),
(7, 4),
(8, 4),
(9, 5),
(10, 5),
(11, 6);

-- --------------------------------------------------------

--
-- Structure de la table `morceau`
--

DROP TABLE IF EXISTS `morceau`;
CREATE TABLE IF NOT EXISTS `morceau` (
  `id_morceau` int(11) NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `duree` float NOT NULL,
  `emplacement_morceau` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_morceau`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `morceau`
--

INSERT INTO `morceau` (`id_morceau`, `titre`, `duree`, `emplacement_morceau`) VALUES
(1, 'The A Team', 4.18, 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_The_A_team.mp3'),
(2, 'Lego House', 3.1, 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Lego_House.mp3'),
(3, 'Sing', 3.55, 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Sing.mp3'),
(4, 'Thinking Out Loud', 4.41, 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Thinking_Out_Loud.mp3'),
(5, 'When Love Takes Over', 3.12, 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_When_Love_Takes_Over.mp3'),
(6, 'Sexy Bitch', 3.12, 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Sexy_Bitch.mp3'),
(7, 'Dangerous', 3.23, 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Dangerous.mp3'),
(8, 'Lovers on the Sun', 3.43, 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Lovers_On_The_Sun.mp3'),
(9, 'Shake It Off', 4.01, 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Shake_It_Off.mp3'),
(10, 'Blank Space', 4.32, 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Blank_Space.mp3'),
(11, 'Look What You Made Me Do', 4.15, 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Look_What_You_Made_Me_Do.mp3'),
(12, 'Delicate', 3.54, 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Delicate.mp3'),
(13, 'With a Little Help from My Friends', 2.44, 'http://prj-web-cir2-grp-58/assets/music/With_A_Little_Help_From_My_Friends.mp3'),
(14, 'Lucy in the Sky with Diamonds', 3.28, 'http://prj-web-cir2-grp-58/assets/music/Lucy_In_The_Sky_With_Diamonds.mp3'),
(15, 'Come Together', 4.18, 'http://prj-web-cir2-grp-58/assets/music/The_Beatles_Come_Together.mp3'),
(16, 'Here Comes the Sun', 3.11, 'http://prj-web-cir2-grp-58/assets/music/The_Beatles_Here_Comes_The_Sun.mp3'),
(17, 'One More Time', 5.21, 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_One_More_Time.mp3'),
(18, 'Harder, Better, Faster, Stronger', 3.46, 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Harder_Better_Faster_Stronger.mp3'),
(19, 'Get Lucky', 4.08, 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Get_Lucky.mp3'),
(20, 'Instant Crush', 5.39, 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Instant.mp3'),
(21, 'Tribal Memories', 8.11, 'http://prj-web-cir2-grp-58/assets/music/Leks_Tribal_Memories.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

DROP TABLE IF EXISTS `playlist`;
CREATE TABLE IF NOT EXISTS `playlist` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `date_crea` date NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `playlist`
--

INSERT INTO `playlist` (`id`, `nom`, `image`, `date_crea`, `email`) VALUES
(1, 'Titres Likes', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-06', 'francois@example.com'),
(2, 'Titres Likes', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-06', 'timote@example.com'),
(3, 'test 1', 'http://prj-web-cir2-grp-58/assets/img/pp.png', '2023-06-06', 'timote@example.com'),
(4, 'test 2', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-06', 'timote@example.com'),
(5, 'oui', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-06', 'francois@example.com'),
(6, 'New', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-07', 'francois@example.com'),
(7, 'Playlist', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-07', 'francois@example.com'),
(8, 'test 3', 'http://prj-web-cir2-grp-58/assets/img/imgplaylist.png', '2023-06-07', 'timote@example.com');

-- --------------------------------------------------------

--
-- Structure de la table `playlist_contient_morceaux`
--

DROP TABLE IF EXISTS `playlist_contient_morceaux`;
CREATE TABLE IF NOT EXISTS `playlist_contient_morceaux` (
  `id` int(11) NOT NULL,
  `id_morceau` int(11) NOT NULL,
  `date_ajout` datetime NOT NULL,
  PRIMARY KEY (`id`,`id_morceau`),
  KEY `playlist_contient_morceaux_morceau0_FK` (`id_morceau`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `playlist_contient_morceaux`
--

INSERT INTO `playlist_contient_morceaux` (`id`, `id_morceau`, `date_ajout`) VALUES
(3, 6, '2023-06-06 00:00:00'),
(3, 10, '2023-06-06 00:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `style_musical`
--

DROP TABLE IF EXISTS `style_musical`;
CREATE TABLE IF NOT EXISTS `style_musical` (
  `style_musical` varchar(100) NOT NULL,
  PRIMARY KEY (`style_musical`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `style_musical`
--

INSERT INTO `style_musical` (`style_musical`) VALUES
('acidcore'),
('EDM'),
('Electronique'),
('Hip-hop'),
('Pop'),
('Rock');

-- --------------------------------------------------------

--
-- Structure de la table `type_artiste`
--

DROP TABLE IF EXISTS `type_artiste`;
CREATE TABLE IF NOT EXISTS `type_artiste` (
  `type_artiste` varchar(100) NOT NULL,
  PRIMARY KEY (`type_artiste`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `type_artiste`
--

INSERT INTO `type_artiste` (`type_artiste`) VALUES
('artist'),
('chanteur'),
('chanteuse'),
('dj'),
('groupe');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `email` varchar(255) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `date_naissance` date NOT NULL,
  `photo_profil` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`email`, `mdp`, `prenom`, `nom`, `date_naissance`, `photo_profil`) VALUES
('francois@example.com', 'mdp1', 'Francois', 'David', '2003-12-30', 'photo1.jpg'),
('timote@example.com', 'mdp2', 'Timote', 'Chimienti', '2003-08-07', 'photo2.jpg');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `album_contient_morceaux`
--
ALTER TABLE `album_contient_morceaux`
  ADD CONSTRAINT `album_contient_morceaux_album0_FK` FOREIGN KEY (`id_album`) REFERENCES `album` (`id_album`),
  ADD CONSTRAINT `album_contient_morceaux_morceau_FK` FOREIGN KEY (`id_morceau`) REFERENCES `morceau` (`id_morceau`);

--
-- Contraintes pour la table `artiste`
--
ALTER TABLE `artiste`
  ADD CONSTRAINT `artiste_style_musical0_FK` FOREIGN KEY (`style_musical`) REFERENCES `style_musical` (`style_musical`),
  ADD CONSTRAINT `artiste_type_artiste_FK` FOREIGN KEY (`type_artiste`) REFERENCES `type_artiste` (`type_artiste`);

--
-- Contraintes pour la table `a_publie`
--
ALTER TABLE `a_publie`
  ADD CONSTRAINT `a_publie_album_FK` FOREIGN KEY (`id_album`) REFERENCES `album` (`id_album`),
  ADD CONSTRAINT `a_publie_artiste0_FK` FOREIGN KEY (`id_artiste`) REFERENCES `artiste` (`id_artiste`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
