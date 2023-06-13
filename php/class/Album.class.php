<?php

class Album
{
    // attributs
    public $id_album;
    public $titre;
    public $date_parution;
    public $cover;

    // methodes
    public function Getid()
    {
        return $this->id_album;
    }

    public function Gettitre()
    {
        return $this->titre;
    }

    public function Getdate_parution()
    {
        return $this->date_parution;
    }

    public function Getcover()
    {
        return $this->cover;
    }

    public function Setid($id_album)
    {
        $this->id_album = $id_album;
    }

    public function Settitre($titre)
    {
        $this->titre = $titre;
    }

    public function Setdate_parution($date_parution)
    {
        $this->date_parution = $date_parution;
    }

    public function Setcover($cover)
    {
        $this->cover = $cover;
    }

}
