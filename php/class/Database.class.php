<?php

class Database
{
    private $db_name;
    private $db_user;
    private $db_pass;
    private $db_host;
    private $pdo;

    // constructeur de la classe Database
    public function __construct($db_name= 'soundisen', $db_user='user1' , $db_pass='soundisen' , $db_host='localhost')
    {
        $this->db_name = $db_name;
        $this->db_user = $db_user;
        $this->db_pass = $db_pass;
        $this->db_host = $db_host;
    }

    // connexion a la base de donnees
    private function getPDO()
    {
        if ($this->pdo === null) {
            $pdo = new PDO('mysql:dbname=' . $this->db_name . ';host=localhost;charset=UTF8;port=3307', $this->db_user, $this->db_pass);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->pdo = $pdo;
        }
        return $this->pdo;
    }

    // renvoie les derniers morceaux joues par un utilisateur
    public function getLastPlayed($email, $nb)
    {
        $sql = 'SELECT m.*, a.cover AS cover, ar.nom_scene AS artiste
                FROM a_lue AS al
                INNER JOIN morceau AS m ON al.id_morceau = m.id_morceau
                INNER JOIN album_contient_morceaux AS acm ON m.id_morceau = acm.id_morceau
                INNER JOIN album AS a ON acm.id_album = a.id_album
                INNER JOIN a_publie AS ap ON a.id_album = ap.id_album
                INNER JOIN artiste AS ar ON ap.id_artiste = ar.id_artiste
                WHERE al.email = :email
                ORDER BY al.date_lecture DESC
                LIMIT :limit';

        $sth = $this->getPDO()->prepare($sql);
        $sth->bindValue(':email', $email, PDO::PARAM_STR);
        $sth->bindValue(':limit', intval($nb), PDO::PARAM_INT);
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_CLASS, 'Morceau');
    }
    
    // renvoie les derniers morceaux sortis
    public function getLastsAdded($nb)
    {
        $sql = 'SELECT * FROM `album` ORDER BY `date_parution` DESC LIMIT '.$nb.';';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':nb' => $nb]);
        return $sth->fetchAll(PDO::FETCH_CLASS, 'Album');
    }

    // renvoie les morceaux de la base de donnees 
    public function getMorceaux()
    {
        $sql = 'SELECT m.*, a.cover AS cover, s.nom_scene AS artiste
                FROM `morceau` m
                JOIN `album_contient_morceaux` acm ON m.id_morceau = acm.id_morceau
                JOIN `album` a ON acm.id_album = a.id_album
                JOIN `a_publie` ap ON a.id_album = ap.id_album
                JOIN `artiste` s ON ap.id_artiste = s.id_artiste';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute();
        return $sth->fetchAll(PDO::FETCH_CLASS, 'Morceau');
    }

    // renvoie les morceaux de la base de donnees en fonction de la recherche
    public function getMorceauInfo($search=null, $filters=null){

        if($filters == 'titre'){
            $filters = 'm.titre';
        } else if($filters == 'artiste'){
            $filters = 'art.nom_scene';
        } else if($filters == 'album'){
            $filters = 'a.titre';
        } else {
            $filters = 'm.titre';
        }

        $sql ='SELECT m.id_morceau, m.titre, m.duree, m.emplacement, m.emplacement_morceau, a.titre AS album, art.nom_scene AS artiste
        FROM morceau m
        JOIN album_contient_morceaux acm ON m.id_morceau = acm.id_morceau
        JOIN album a ON acm.id_album = a.id_album
        JOIN a_publie ap ON acm.id_album = ap.id_album
        JOIN artiste art ON ap.id_artiste = art.id_artiste
        WHERE '.$filters.' LIKE \'%' .$search. '%\'';

        $sth = $this->getPDO()->prepare($sql);
        $sth->execute();

        return $sth->fetchAll(PDO::FETCH_CLASS, 'Morceau');
    }

    // renvoie les informations d'un utilisateur en fonction de son email
    public function getUser($email)
    {
        $sql = 'SELECT * FROM `user` WHERE `email` = :email';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':email' => $email]);
        return $sth->fetchAll(PDO::FETCH_CLASS, 'User');
    }
    
    // verifie si le mot de passe correspond a l'email
    public function verifyUser($email, $password)
    {
        $sql = 'SELECT * FROM user WHERE email = :email';
        $sth = $this->getPDO()->prepare($sql);  
        $sth->execute([':email' => $email]);
        $user = $sth->fetch(PDO::FETCH_ASSOC);
    
        if ($user && strcmp($password, $user['mdp'])==0) {
            return true;
        }
        return false;
        
    }

    // renvoie les informations detaillees d'un morceau en fonction de son id
    public function getAllInfoMorceau($id_morceau){
        $sql = 'SELECT a.nom_scene, a.prenom, a.nom, a.date_mort, a.style_musical, m.titre AS titre_morceau, al.titre AS titre_album, m.duree, m.date_parution
            FROM morceau m
            JOIN album_contient_morceaux acm ON m.id_morceau = acm.id_morceau
            JOIN album al ON acm.id_album = al.id_album
            JOIN a_publie ap ON al.id_album = ap.id_album
            JOIN artiste a ON ap.id_artiste = a.id_artiste
            WHERE m.id_morceau = :id_morceau';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':id_morceau' => $id_morceau]);
        return $sth->fetchAll(PDO::FETCH_CLASS, 'Morceau');
    }

    // ajoute un utilisateur a la base de donnees
    public function addUser($email, $password, $prenom, $nom, $date_naissance){
        $sql = 'INSERT INTO user (email, mdp, prenom, nom, date_naissance) VALUES (:email, :mdp, :prenom, :nom, :date_naissance)';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':email' => $email, ':mdp' => $password, ':prenom' => $prenom, ':nom' => $nom, ':date_naissance' => $date_naissance]);
    }

    // ajoute un morceau a la liste de lecture de l'utilisateur
    public function a_lue($url_morc, $email, $favori){
        $sql = 'INSERT INTO a_lue (id_morceau, email, date_lecture, favori)
        SELECT morceau.id_morceau, :email, NOW(), :favori
        FROM morceau
        WHERE morceau.emplacement_morceau = :url_morc
        ON DUPLICATE KEY UPDATE date_lecture = NOW()';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':url_morc' => $url_morc, ':email' => $email, ':favori' => $favori]);
    }

    // ajoute une playliste a la base de donnees
    public function createPlaylist($email, $nom_playlist, $img){
        $sql = 'INSERT INTO playlist (email, nom, image, date_crea) VALUES (:email, :nom_playlist, :img, NOW())';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':email' => $email, ':nom_playlist' => $nom_playlist, ':img' => $img]);
    }

    // ajoute un morceau a une playlist
    public function addMorceauPlaylist($id_playlist, $id_morceau){
        $sql = 'INSERT INTO playlist_contient_morceaux (id_playlist, id_morceau, date_ajout) VALUES (:id_playlist, :id_morceau, NOW())';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':id_playlist' => $id_playlist, ':id_morceau' => $id_morceau]);
    }

    //renvoie les playlists d'un utilisateur
    public function getPlaylists($email){
        $sql = 'SELECT * FROM playlist WHERE email = :email';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':email' => $email]);
        return $sth->fetchAll(PDO::FETCH_CLASS, 'Playlist');
    }

    //renvoie les informations d'une playlist
    public function getPlaylistDetails($email, $nom_playlist){
        $sql = 'SELECT m.id_morceau, m.titre, m.duree, m.emplacement, m.emplacement_morceau, a.titre AS album, art.nom_scene AS artiste
        FROM morceau m
        JOIN album_contient_morceaux acm ON m.id_morceau = acm.id_morceau
        JOIN album a ON acm.id_album = a.id_album
        JOIN a_publie ap ON acm.id_album = ap.id_album
        JOIN artiste art ON ap.id_artiste = art.id_artiste
        JOIN playlist_contient_morceaux pcm ON m.id_morceau = pcm.id_morceau
        JOIN playlist p ON pcm.id = p.id
        WHERE p.email = :email AND p.nom = :nom_playlist';
        $sth = $this->getPDO()->prepare($sql);
        $sth->execute([':email' => $email, ':nom_playlist' => $nom_playlist]);
        return $sth->fetchAll(PDO::FETCH_CLASS, 'Morceau');
    }
}
