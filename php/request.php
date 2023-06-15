<?php
    ini_set('display_errors', 'on');
    error_reporting(E_ALL);

    // chargement des classes.
    spl_autoload_register(function ($class) {
    include 'class/' . $class . '.class.php';
    });

    // connexion à la base de donnees.
    $db = new Database();
    if (!$db)
    {
        header ('HTTP/1.1 503 Service Unavailable');
        exit;
    }

    // verification de la requette.
    $requestMethod = $_SERVER['REQUEST_METHOD'];
    $request = $_SERVER['PATH_INFO'];
    $request = explode('/', $request);


    $data=null;

    //gestion des requettes de type 'GET':

    if ($request[1] == 'last_morceau' && $requestMethod == 'GET')
    {
        $data = $db->getLastsAdded($_GET['nb']);
    } 
    else if ($request[1] == 'morceau' && $requestMethod == 'GET') 
    {
        $data = $db->getMorceaux();
    } 
    else if ($request[1] == 'search' && $requestMethod == 'GET')
    {
        $data = $db->getMorceauInfo();
    } 
    else if ($request[1] == 'livesearch' && $requestMethod == 'GET')
    {
        $data = $db->getMorceauInfo($_GET['searchdata'], $_GET['searchtype']);
    }   
    else if ($request[1] == 'user' && $requestMethod == 'GET')
    {
        $data = $db->getUser($_GET['login']);
    } 
    else if ($request[1] == 'lastplayed' && $requestMethod == 'GET')
    {
        $data = $db->getLastPlayed($_GET['login'], 20);
    } 
    else if ($request[1]=='playlists' && $requestMethod=='GET')
    {
        $data = $db->getPlaylists($_GET['login']);
    } 
    else if ($request[1] == 'playlistDetail' && $requestMethod == 'GET')
    {
        $data = $db->getPlaylistDetails($_GET['login'], $_GET['nom_playlist']);
    }
    else if ($request[1]=='infos' && $requestMethod=='GET'){
        $data = $db->getAllInfoMorceau($_GET['track'], $_GET['artiste']);
    }
    

    //gestion des requettes de type 'POST':

    //requette de connection
    if ($request[1]=='login' && $requestMethod=='POST')
    {
        $post = json_decode(file_get_contents('php://input'), true);
        $email = $post['email'];
        $password = $post['password'];

        if (empty($email) || empty($password)) {
            $data = array('success' => false, 'code_err' => 1);
        } else if ($db->verifyUser($email, $password)==true) {
            // Les informations d'identification sont valides
            $data = array('success' => true, 'code_err' => 'Connexion réussie');
        } else {
            // Les informations d'identification sont invalides
            $data = array('success' => false, 'code_err' => 2);
        }
    }

    //requette d'inscription
    else if ($request[1]=='inscription' && $requestMethod=='POST')
    {
        $post = json_decode(file_get_contents('php://input'), true);
        if (empty($post['email']) || empty($post['password']) || empty($post['prenom']) || empty($post['nom']) || empty($post['date_naissance'])) {
            $data = array('success' => false, 'code_err' => 1);
        } else if($db->getUser($post['email'])!=null)
        {
            $data = array('success' => false, 'code_err' => 3);
        } else {
            $data = array('success' => true, 'code_err' => 'Inscription réussie');
            $db->addUser($post['email'], $post['password'], $post['prenom'], $post['nom'], $post['date_naissance']);
        }
    }

    // requette d'inclusion dans la liste des elements lus
    else if ($request[1]=='a_lue' && $requestMethod=='POST')
    {
        $post = json_decode(file_get_contents('php://input'), true);
        if (empty($post['favori'])){
            $post['favori'] = 0;
        }            
        if (empty($post['url_morc']) || empty($post['email'])) {
            $data = array('success' => false, 'code_err' => 1);
        } else {
            $data = array('success' => true, 'code_err' => 'Lecture ajoutée');
            $db->a_lue($post['url_morc'], $post['email'], $post['favori']); 
        }
    }

    // requette de creation de playlist
    else if($request[1]=='createplaylist' && $requestMethod=='POST')
    {
        $post = json_decode(file_get_contents('php://input'), true);
        if (!isset($post['img']))
        {
            $img = '../assets/img/imgplaylist.png';
        }
        if (empty($post['login']) || empty($post['nom_playlist'])) {
            $data = array('success' => false, 'code_err' => 1);
        } else {
            $data = array('success' => true, 'code_err' => 'Playlist ajoutée');
            $db->createPlaylist($post['login'], $post['nom_playlist'], $img);
        }
    }

    // requette de remplissage de playlist
    else if($request[1]=='remplirplaylist' && $requestMethod=='POST')
    {
        $post = json_decode(file_get_contents('php://input'), true);
        if (empty($post['login']) || empty($post['id_playlist']) || empty($post['url_morc'])) {
            $data = array('success' => false, 'code_err' => 1);
        } else {
            $data = array('success' => true, 'code_err' => 'Morceau ajouté');
            $db->addMorceauPlaylist($post['login'], $post['id_playlist'], $post['url_morc']);
        }
    }



    // envoie des donnees au client.
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-control: no-store, no-cache, must-revalidate');
    header('Pragma: no-cache');
    if($requestMethod == 'POST')
        header('HTTP/1.1 201 Created');
    else
        header('HTTP/1.1 200 OK');
    echo json_encode($data);
    exit;
?>