# Soundisen | Readme (Application de lecture de musique | projet de fin d'année cir2)

Ce Readme va tout d'abord expliquer comment configurer le projet, puis il va expliquer comment naviguer entre les pages.   
Nombre de Participants : 2     
Durée : 1 semaine     
Langage : Html / Css / Js / Php / Sql   
Navigateur utilisé : Firefox Version 113.0.2 (64 bits)   
Année : Isen CIR2 Juin 2023   

# Le Projet

## Configuration
- generation de la base de donnée :
    - Pour générer la base de donnée, il suffit d'importer le script soundisen.slq dans le terminal sql de votre serveur.
        (le script sql et le script python etaient la pour generer la base de donnee au debut du projet mais celle ci a ete modifiee au cours du projet. C'est pourquoi le script soundisen.sql est le seul a importer)

- Pour utiliser la base de données deja mise en place sur le serveur :
    1 - modifiez votre fichier "hosts" (C:\Windows\System32\drivers\etc\hosts pour les machines fonctionnants sous windows | /etc/hosts pour celles sous linux) en ajoutant la ligne suivante : 10.10.51.58 prj-web-cir2-grp-58
    2 - collez cette url dans Firefox : http://prj-web-cir2-grp-58
    3 - vous arrivez sur la page de connexion, vous pouvez créer un compte pour ensuite arriver sur la page d'accueil.

## Les pages

- Page de connexion :    
    En vous connectant sur l'adresse du site vous arriverez si un page de connexion.    
    Ici vous pourrez soit vous connecter si vous possédez déjà un compte.    
    Si vous ne possedez pas de compte vous pourrez en creer un via le bouton inscription.    
- Les pages :    
  Les pages se constituent d'un footer avec un audioplayer, d'un header avec le logo, une barre de recherche ainsi que le profil, la section des playlist se trouvant sur la gauche, et enfin la section principale qui elle va être modifiée au cour de la navigation.    
- Page d'accueil :     
    Une fois connecté vous arriverez sur la page d'accueil, c'est la page centrale du site.    
    Vous y trouverez vos dernières écoutes, une liste de lecture aléatoire et les dernières sorties musicales.    
- Pop up de recherche :     
    En cliquant sur la barre de recherche vous verrez apparaitre une popup contenant les résultats de votre recherche, vous pourrez les filtrer directement à l'aide des boutons.    
    A chaque entrée clavier dans la zone, les résultats seront raffraichit.    
    Pour effectuer directement la recherche appuyez sur entrer.    
- Page de recherche :     
    Après avoir appuyé sur entrer apparaitra cette page.    
    Se présenteront à vous trois section :     
  - Les résultats de recherche par artistes    
  - Les résultats de recherche par titres    
  - Les résultats de recherche par album    
- Page de playlist :    
    En cliquant sur une playlist dans le bandeau à gauche de l'écran vous pourrez accèder à vos playlist.    
    Toutes vos musiques ajoutées y seront présentes, ainsi que son nom et sa date de création.    
- Popup ajout à une playlist :     
    Sur chaque bandeau de titres se trouve un signe "+", en cliquant dessus vous pourrez le morceau à une de vos playlist.    
- Popup création d'une playlist :    
    Dans le bandeau des playlists, en haut, se situe un "+" entouré d'un cercle, en cliquant dessus vous pourrez creer une playlist avec le nom de votre choix.    
- Informations titres :    
  Sur chaque bandeau de titres se trouve un chevron pointant vers le bas, en cliquant dessus vous pourrez afficher une popup montrant le détails de la musique ainsi que son artiste et les albums qu'il a sortit.    

  - Autres :     
      En cliquant sur les coeurs vous ajouterez des morceaux à votre playlist "Like".    
      Sur chaque titre affiché, vous pourrez cliquer pour le jouer directement dans la page.    
      Vous pouvez avancer ou reculer dans la musique en cliquant sur la barre dans le footer.    
      Vous pouvez également changer le volume en utilisant la barre dans le footer en bas à gauche.    
      Toutes les listes sur les pages sont scrollables à la souris mais vous pouvez également "cliquer-glisser" ou "grab" ces listes pour naviguer à l'intérieur.    
      Un visualiseur d'audio peut etre activé ou désactivé en cliquant sur l'image dans le footer.    
      Vous pouvez skip une musique ou aller à la musique précédente avec les boutons dans le footer.   
      Pour vérifier vos informations de connexion vous pouvez passer la souris sur votre nom d'utilisateur et les informations s'afficheront. Pour afficher le mot de passe il faudra passer la souris dessus.   
      A la fin d'une musique, la prochaine dans la liste de lecture ses lancera automatiquement.    
      
         
#Arborescence : 
         
```├── README.md
├── assets/
│   ├── css/
│   │   ├── connexion.css
│   │   ├── playlist.css
│   │   ├── popupinformation.css
│   │   ├── resize.css
│   │   ├── resizeconnexion.css
│   │   ├── resultsearchcss.css
│   │   ├── style.css
│   │   ├── visualiser.css
│   ├── font/
│   │   ├── GothamBold.ttf
│   │   ├── GothamMedium.ttf
│   ├── img/
│   │   ├── 1989.jpg
│   │   ├── X.jpg
│   │   ├── abbey_road.jpeg
│   │   ├── albumtribal.jpg
│   │   ├── discovery.jpeg
│   │   ├── imgplaylist.png
│   │   ├── listen.jpg
│   │   ├── lognoirtransparent.png
│   │   ├── logoblanc.png
│   │   ├── logoblanctransparent.png
│   │   ├── logonoir.png
│   │   ├── one_love.jpeg
│   │   ├── plus.jpeg
│   │   ├── plus.png
│   │   ├── pp.png
│   │   ├── ram.jpeg
│   │   ├── reputation.jpeg
│   │   ├── sefa.jpg
│   │   ├── splhcb.jpeg
│   ├── js/
│   │   ├── ajax.js
│   │   ├── connexion.js
│   │   ├── mainwindowevent.js
│   │   ├── player.js
│   │   ├── script.js
│   │   ├── sound.js
│   │   ├── visualiser.js
│   ├── music/
│   │   ├── Daft_Punk_Get_Lucky.mp3
│   │   ├── Daft_Punk_Harder_Better_Faster_Stronger.mp3
│   │   ├── Daft_Punk_Instant.mp3
│   │   ├── Daft_Punk_One_More_Time.mp3
│   │   ├── David_Guetta_Dangerous.mp3
│   │   ├── David_Guetta_Lovers_On_The_Sun.mp3
│   │   ├── David_Guetta_Sexy_Bitch.mp3
│   │   ├── David_Guetta_When_Love_Takes_Over.mp3
│   │   ├── Ed_Sheeran_Lego_House.mp3
│   │   ├── Ed_Sheeran_Sing.mp3
│   │   ├── Ed_Sheeran_The_A_team.mp3
│   │   ├── Ed_Sheeran_Thinking_Out_Loud.mp3
│   │   ├── Leks_Tribal_Memories.mp3
│   │   ├── Lucy_In_The_Sky_With_Diamonds.mp3
│   │   ├── Taylor_Swift_Blank_Space.mp3
│   │   ├── Taylor_Swift_Delicate.mp3
│   │   ├── Taylor_Swift_Look_What_You_Made_Me_Do.mp3
│   │   ├── Taylor_Swift_Shake_It_Off.mp3
│   │   ├── The_A_Team_Ed_Sheeran.mp3
│   │   ├── The_Beatles_Come_Together.mp3
│   │   ├── The_Beatles_Here_Comes_The_Sun.mp3
│   │   ├── With_A_Little_Help_From_My_Friends.mp3
│   │   ├── laWanksi_DuSale.mp3
├── index.html
├── page/
│   ├── accueil.html
├── php/
│   ├── class/
│   │   ├── Database.class.php
│   │   ├── Morceau.class.php
│   │   ├── Playlist.class.php
│   │   ├── User.class.php
│   ├── request.php
├── python/
│   ├── remplissagebdd.py
├── sql/
│   ├── soundisen.sql
│   ├── sql.sql

11 directories, 70 files
```

**Pour tout problème ou question : fddavid.francois@gmail.com | timote.chimienti@isen-ouest.yncrea.fr**
