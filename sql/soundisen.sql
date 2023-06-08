-- phpMyAdmin SQL Dump
-- version 5.0.4deb2+deb11u1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mer. 07 juin 2023 à 06:56
-- Version du serveur :  10.5.19-MariaDB-0+deb11u2
-- Version de PHP : 7.4.33

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

CREATE TABLE `album` (
  `id_album` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `date_parution` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `album`
--

INSERT INTO `album` (`id_album`, `titre`, `date_parution`) VALUES
(1, '+', '2011-09-09'),
(2, 'x', '2014-06-20'),
(3, 'One Love', '2009-08-24'),
(4, 'Listen', '2014-11-21'),
(5, '1989', '2014-10-27'),
(6, 'Reputation', '2017-11-10'),
(7, 'Sgt. Pepper\'s Lonely Hearts Club Band', '1967-06-01'),
(8, 'Abbey Road', '1969-09-26'),
(9, 'Discovery', '2001-02-26'),
(10, 'Random Access Memories', '2013-05-17'),
(11, 'Tribal Memories', '2018-05-16');

-- --------------------------------------------------------

--
-- Structure de la table `album_contient_morceaux`
--

CREATE TABLE `album_contient_morceaux` (
  `id_morceau` int(11) NOT NULL,
  `id_album` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(11, 6),
(12, 6),
(13, 7),
(14, 7),
(15, 8),
(16, 8),
(17, 9),
(18, 9),
(19, 10),
(20, 10),
(21, 11);

-- --------------------------------------------------------

--
-- Structure de la table `artiste`
--

CREATE TABLE `artiste` (
  `id_artiste` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom_scene` varchar(50) DEFAULT NULL,
  `date_naissance` date NOT NULL,
  `date_mort` date DEFAULT NULL,
  `photo` varchar(50) DEFAULT NULL,
  `type_artiste` varchar(100) NOT NULL,
  `style_musical` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `a_lue` (
  `id_morceau` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `date_lecture` datetime NOT NULL,
  `favori` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(6, 'francois@example.com', '2023-06-07 05:43:26', 0),
(7, 'francois@example.com', '2023-06-07 06:00:17', 0),
(8, 'francois@example.com', '2023-06-07 06:04:53', 0),
(8, 'timote@example.com', '2023-06-06 19:21:04', 0),
(9, 'francois@example.com', '2023-06-07 06:15:53', 0),
(9, 'timote@example.com', '2023-06-06 15:23:00', 0),
(10, 'francois@example.com', '2023-06-06 19:05:22', 0),
(11, 'francois@example.com', '2023-06-07 06:01:37', 0),
(11, 'timote@example.com', '2023-06-06 14:43:02', 0),
(12, 'francois@example.com', '2023-06-07 06:00:17', 0),
(13, 'francois@example.com', '2023-06-06 18:40:23', 0),
(13, 'timote@example.com', '2023-06-06 14:43:01', 0),
(14, 'francois@example.com', '2023-06-06 18:43:58', 0),
(15, 'francois@example.com', '2023-06-07 06:18:30', 0),
(16, 'francois@example.com', '2023-06-07 06:05:28', 0),
(17, 'francois@example.com', '2023-06-06 19:08:43', 0),
(18, 'francois@example.com', '2023-06-07 05:43:26', 0),
(19, 'francois@example.com', '2023-06-07 06:18:30', 0),
(19, 'timote@example.com', '2023-06-07 06:15:29', 1),
(20, 'francois@example.com', '2023-06-06 18:42:53', 0),
(21, 'francois@example.com', '2023-06-07 06:56:09', 0);

-- --------------------------------------------------------

--
-- Structure de la table `a_publie`
--

CREATE TABLE `a_publie` (
  `id_album` int(11) NOT NULL,
  `id_artiste` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `morceau` (
  `id_morceau` int(11) NOT NULL,
  `titre` varchar(255) NOT NULL,
  `duree` float NOT NULL,
  `date_parution` date NOT NULL,
  `style_musical` varchar(100) NOT NULL,
  `emplacement` varchar(100) DEFAULT NULL,
  `emplacement_morceau` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `morceau`
--

INSERT INTO `morceau` (`id_morceau`, `titre`, `duree`, `date_parution`, `style_musical`, `emplacement`, `emplacement_morceau`) VALUES
(1, 'The A Team', 4.18, '2011-09-09', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/plus.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_The_A_team.mp3'),
(2, 'Lego House', 3.1, '2011-09-09', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/plus.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Lego_House.mp3'),
(3, 'Sing', 3.55, '2014-06-20', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/X.jpg', 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Sing.mp3'),
(4, 'Thinking Out Loud', 4.41, '2014-06-20', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/X.jpg', 'http://prj-web-cir2-grp-58/assets/music/Ed_Sheeran_Thinking_Out_Loud.mp3'),
(5, 'When Love Takes Over', 3.12, '2009-08-24', 'EDM', 'http://prj-web-cir2-grp-58/assets/img/one_love.jpeg', 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_When_Love_Takes_Over.mp3'),
(6, 'Sexy Bitch', 3.12, '2009-08-24', 'EDM', 'http://prj-web-cir2-grp-58/assets/img/one_love.jpeg', 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Sexy_Bitch.mp3'),
(7, 'Dangerous', 3.23, '2014-11-21', 'EDM', 'http://prj-web-cir2-grp-58/assets/img/listen.jpg', 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Dangerous.mp3'),
(8, 'Lovers on the Sun', 3.43, '2014-11-21', 'EDM', 'http://prj-web-cir2-grp-58/assets/img/listen.jpg', 'http://prj-web-cir2-grp-58/assets/music/David_Guetta_Lovers_On_The_Sun.mp3'),
(9, 'Shake It Off', 4.01, '2014-10-27', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/1989.jpg', 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Shake_It_Off.mp3'),
(10, 'Blank Space', 4.32, '2014-10-27', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/1989.jpg', 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Blank_Space.mp3'),
(11, 'Look What You Made Me Do', 4.15, '2017-11-10', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/reputation.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Look_What_You_Made_Me_Do.mp3'),
(12, 'Delicate', 3.54, '2017-11-10', 'Pop', 'http://prj-web-cir2-grp-58/assets/img/reputation.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Taylor_Swift_Delicate.mp3'),
(13, 'With a Little Help from My Friends', 2.44, '1967-06-01', 'Rock', 'http://prj-web-cir2-grp-58/assets/img/splhcb.jpeg', 'http://prj-web-cir2-grp-58/assets/music/With_A_Little_Help_From_My_Friends.mp3'),
(14, 'Lucy in the Sky with Diamonds', 3.28, '1967-06-01', 'Rock', 'http://prj-web-cir2-grp-58/assets/img/splhcb.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Lucy_In_The_Sky_With_Diamonds.mp3'),
(15, 'Come Together', 4.18, '1969-09-26', 'Rock', 'http://prj-web-cir2-grp-58/assets/img/abbey_road.jpeg', 'http://prj-web-cir2-grp-58/assets/music/The_Beatles_Come_Together.mp3'),
(16, 'Here Comes the Sun', 3.11, '1969-09-26', 'Rock', 'http://prj-web-cir2-grp-58/assets/img/abbey_road.jpeg', 'http://prj-web-cir2-grp-58/assets/music/The_Beatles_Here_Comes_The_Sun.mp3'),
(17, 'One More Time', 5.21, '2001-02-26', 'Electronique', 'http://prj-web-cir2-grp-58/assets/img/discovery.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_One_More_Time.mp3'),
(18, 'Harder, Better, Faster, Stronger', 3.46, '2001-02-26', 'Electronique', 'http://prj-web-cir2-grp-58/assets/img/discovery.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Harder_Better_Faster_Stronger.mp3'),
(19, 'Get Lucky', 4.08, '2013-05-17', 'Electronique', 'http://prj-web-cir2-grp-58/assets/img/ram.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Get_Lucky.mp3'),
(20, 'Instant Crush', 5.39, '2013-05-17', 'Electronique', 'http://prj-web-cir2-grp-58/assets/img/ram.jpeg', 'http://prj-web-cir2-grp-58/assets/music/Daft_Punk_Instant.mp3'),
(21, 'Tribal Memories', 8.11, '2018-05-14', 'EDM', 'http://prj-web-cir2-grp-58/assets/img/albumtribal.jpg', 'http://prj-web-cir2-grp-58/assets/music/Leks_Tribal_Memories.mp3');

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE `playlist` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `date_crea` date NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `playlist_contient_morceaux` (
  `id` int(11) NOT NULL,
  `id_morceau` int(11) NOT NULL,
  `date_ajout` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE `style_musical` (
  `style_musical` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `style_musical`
--

INSERT INTO `style_musical` (`style_musical`) VALUES
('EDM'),
('Electronique'),
('Hip-hop'),
('Pop'),
('Rock');

-- --------------------------------------------------------

--
-- Structure de la table `type_artiste`
--

CREATE TABLE `type_artiste` (
  `type_artiste` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `type_artiste`
--

INSERT INTO `type_artiste` (`type_artiste`) VALUES
('chanteur'),
('chanteuse'),
('dj'),
('groupe');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `email` varchar(255) NOT NULL,
  `mdp` varchar(30) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `nom` varchar(30) NOT NULL,
  `date_naissance` date NOT NULL,
  `photo_profil` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`email`, `mdp`, `prenom`, `nom`, `date_naissance`, `photo_profil`) VALUES
('francois@example.com', 'mdp1', 'Francois', 'David', '2003-12-30', 'photo1.jpg'),
('timote@example.com', 'mdp2', 'Timote', 'Chimienti', '2003-08-07', 'photo2.jpg');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id_album`);

--
-- Index pour la table `album_contient_morceaux`
--
ALTER TABLE `album_contient_morceaux`
  ADD PRIMARY KEY (`id_morceau`,`id_album`),
  ADD KEY `album_contient_morceaux_album0_FK` (`id_album`);

--
-- Index pour la table `artiste`
--
ALTER TABLE `artiste`
  ADD PRIMARY KEY (`id_artiste`),
  ADD KEY `artiste_type_artiste_FK` (`type_artiste`),
  ADD KEY `artiste_style_musical0_FK` (`style_musical`);

--
-- Index pour la table `a_lue`
--
ALTER TABLE `a_lue`
  ADD PRIMARY KEY (`id_morceau`,`email`),
  ADD KEY `a_lue_user0_FK` (`email`);

--
-- Index pour la table `a_publie`
--
ALTER TABLE `a_publie`
  ADD PRIMARY KEY (`id_album`,`id_artiste`),
  ADD KEY `a_publie_artiste0_FK` (`id_artiste`);

--
-- Index pour la table `morceau`
--
ALTER TABLE `morceau`
  ADD PRIMARY KEY (`id_morceau`),
  ADD KEY `morceau_style_musical_FK` (`style_musical`);

--
-- Index pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playlist_user_FK` (`email`);

--
-- Index pour la table `playlist_contient_morceaux`
--
ALTER TABLE `playlist_contient_morceaux`
  ADD PRIMARY KEY (`id`,`id_morceau`),
  ADD KEY `playlist_contient_morceaux_morceau0_FK` (`id_morceau`);

--
-- Index pour la table `style_musical`
--
ALTER TABLE `style_musical`
  ADD PRIMARY KEY (`style_musical`);

--
-- Index pour la table `type_artiste`
--
ALTER TABLE `type_artiste`
  ADD PRIMARY KEY (`type_artiste`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `album`
--
ALTER TABLE `album`
  MODIFY `id_album` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT pour la table `artiste`
--
ALTER TABLE `artiste`
  MODIFY `id_artiste` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `morceau`
--
ALTER TABLE `morceau`
  MODIFY `id_morceau` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
-- Contraintes pour la table `a_lue`
--
ALTER TABLE `a_lue`
  ADD CONSTRAINT `a_lue_morceau_FK` FOREIGN KEY (`id_morceau`) REFERENCES `morceau` (`id_morceau`),
  ADD CONSTRAINT `a_lue_user0_FK` FOREIGN KEY (`email`) REFERENCES `user` (`email`);

--
-- Contraintes pour la table `a_publie`
--
ALTER TABLE `a_publie`
  ADD CONSTRAINT `a_publie_album_FK` FOREIGN KEY (`id_album`) REFERENCES `album` (`id_album`),
  ADD CONSTRAINT `a_publie_artiste0_FK` FOREIGN KEY (`id_artiste`) REFERENCES `artiste` (`id_artiste`);

--
-- Contraintes pour la table `morceau`
--
ALTER TABLE `morceau`
  ADD CONSTRAINT `morceau_style_musical_FK` FOREIGN KEY (`style_musical`) REFERENCES `style_musical` (`style_musical`);

--
-- Contraintes pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `playlist_user_FK` FOREIGN KEY (`email`) REFERENCES `user` (`email`);

--
-- Contraintes pour la table `playlist_contient_morceaux`
--
ALTER TABLE `playlist_contient_morceaux`
  ADD CONSTRAINT `playlist_contient_morceaux_morceau0_FK` FOREIGN KEY (`id_morceau`) REFERENCES `morceau` (`id_morceau`),
  ADD CONSTRAINT `playlist_contient_morceaux_playlist_FK` FOREIGN KEY (`id`) REFERENCES `playlist` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
