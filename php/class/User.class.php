<?php

class User
{
    //attributs
    public $mail;
    public $nom;
    public $prenom;
    public $age;
    public $mdp;

    //methodes
    public function Getmail()
    {
        return $this->mail;
    }

    public function Getnom()
    {
        return $this->nom;
    }

    public function Getprenom()
    {
        return $this->prenom;
    }

    public function Getage()
    {
        return $this->age;
    }

    public function Getmdp()
    {
        return $this->mdp;
    }

    public function Setmail($mail)
    {
        $this->mail = $mail;
    }   

    public function Setnom($nom)
    {
        $this->nom = $nom;
    }   

    public function Setprenom($prenom)
    {
        $this->prenom = $prenom;
    }   

    public function Setage($age)
    {
        $this->age = $age;
    }

    public function Setmdp($mdp)
    {
        $this->mdp = $mdp;
    }

}