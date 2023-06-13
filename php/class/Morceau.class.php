<?php

class Morceau
{
    // attributs 
    public $id_morceau;
    public $titre;
    public $duree;
    public $emplacement_morceau;
    public $cover;


    // methodes
    public function Getid()
    {
        return $this->id_morceau;
    }

    public function Gettitre()
    {
        return $this->titre;
    }

    public function Getcover()
    {
        return $this->cover;
    }

    public function Getduree()
    {
        return $this->duree;
    }

    public function Getemplacement_morceau()
    {
        return $this->emplacement_morceau;
    }

    public function Setid($id_morceau)
    {
        $this->id_morceau = $id_morceau;
    }

    public function Settitre($titre)
    {
        $this->titre = $titre;
    }

    public function Setduree($duree)
    {
        $this->duree = $duree;
    }

    public function Setcover($cover)
    {
         $this->cover = $cover;
    }

    public function Setemplacement_fichier($emplacement)
    {
        $this->emplacement = $emplacement;
    }

}
