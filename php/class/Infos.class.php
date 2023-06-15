<?php

class Infos
{
    // Attributs
    private $titre;
    private $contenudansalbum;
    private $duree;
    private $annee;

    private $artiste_scene;
    private $artiste_nom;
    private $artiste_prenom;
    private $artiste_mort;
    private $artiste_naissance;
    private $artiste_style;
    private $artiste_type;

    private $liste_albums;

    // Méthodes

    public function Gettitre()
    {
        return $this->titre;
    }

    public function Getcontenudansalbum()
    {
        return $this->contenudansalbum;
    }

    public function Getduree()
    {
        return $this->duree;
    }

    public function Getannee()
    {
        return $this->annee;
    }

    public function Getartiste_scene()
    {
        return $this->artiste_scene;
    }

    public function Getartiste_nom()
    {
        return $this->artiste_nom;
    }

    public function Getartiste_prenom()
    {
        return $this->artiste_prenom;
    }

    public function Getartiste_mort()
    {
        return $this->artiste_mort;
    }

    public function Getartiste_naissance()
    {
        return $this->artiste_naissance;
    }

    public function Getartiste_style()
    {
        return $this->artiste_style;
    }

    public function Getartiste_type()
    {
        return $this->artiste_type;
    }

    public function Getliste_albums()
    {
        return $this->liste_albums;
    }

    public function Settitre($titre)
    {
        $this->titre = $titre;
    }

    public function Setcontenudansalbum($contenudansalbum)
    {
        $this->contenudansalbum = $contenudansalbum;
    }

    public function Setduree($duree)
    {
        $this->duree = $duree;
    }

    public function Setannee($annee)
    {
        $this->annee = $annee;
    }

    public function Setartiste_scene($artiste_scene)
    {
        $this->artiste_scene = $artiste_scene;
    }

    public function Setartiste_nom($artiste_nom)
    {
        $this->artiste_nom = $artiste_nom;
    }

    public function Setartiste_prenom($artiste_prenom)
    {
        $this->artiste_prenom = $artiste_prenom;
    }

    public function Setartiste_mort($artiste_mort)
    {
        $this->artiste_mort = $artiste_mort;
    }

    public function Setartiste_naissance($artiste_naissance)
    {
        $this->artiste_naissance = $artiste_naissance;
    }

    public function Setartiste_style($artiste_style)
    {
        $this->artiste_style = $artiste_style;
    }

    public function Setartiste_type($artiste_type)
    {
        $this->artiste_type = $artiste_type;
    }

    public function Setliste_albums($liste_albums)
    {
        $this->liste_albums = $liste_albums;
    }
}