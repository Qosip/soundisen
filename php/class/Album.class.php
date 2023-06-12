<?php

class Album
{
    // attributs
    public $id_album;
    public $titre;
    public $date_parution;
    public $emplacement;

    // methodes
    public function Getid()
    {
        return $this->id_morceau;
    }

    public function Gettitre()
    {
        return $this->titre;
    }

    public function Getduree()
    {
        return $this->duree;
    }

    public function Getdate_parution()
    {
        return $this->date_parution;
    }

    public function Getstyle_musical()
    {
        return $this->style_musical;
    }

    public function Getemplacement()
    {
        return $this->emplacement;
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

    public function Setdate_parution($date_parution)
    {
        $this->date_parution = $date_parution;
    }

    public function Setstyle_musical($style_musical)
    {
        $this->style_musical = $style_musical;
    }

    public function Setemplacement_fichier($emplacement)
    {
        $this->emplacement = $emplacement;
    }

}
