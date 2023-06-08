<?php

class Playlist
{
    public $id; 
    public $nom;
    public $img; // chemin de l'image
    public $date_crea;
    public $email_user;

    public function Getid()
    {
        return $this->id;
    }

    public function Getnom()
    {
        return $this->nom;
    }

    public function Getimg()
    {
        return $this->img;
    }

    public function Getdate_crea()
    {
        return $this->date_crea;
    }

    public function Getemail_user()
    {
        return $this->email_user;
    }



    public function Setid($id)
    {
        $this->id = $id;
    }

    public function Setnom($nom)
    {
        $this->nom = $nom;
    }

    public function Setimg($img)
    {
        $this->img = $img;
    }

    public function Setdate_crea($date_crea)
    {
        $this->date_crea = $date_crea;
    }

    public function Setemail_user($email_user)
    {
        $this->email_user = $email_user;
    }
}