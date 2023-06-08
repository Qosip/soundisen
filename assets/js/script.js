var searchdata;
var listplaylist=[];
ajaxRequest('GET', '../php/request.php/playlists/?login='+login, function (response) {listplaylist=(response)});
const slider = document.querySelector('.slider');
const thumb = document.querySelector('.thumb');
const progress = document.querySelector('.progress');
progress.style.width = '50%'
thumb.style.left = `50%`;
const volumeinit = document.getElementById("musicPlayer");
volumeinit.volume = 0.5;
slider.addEventListener('input', () => {
    //changer l'apparence des range sur le player
    const value = slider.value;
    const percent = (value - slider.min) / (slider.max - slider.min) * 100;
    progress.style.width = `${percent}%`;
    thumb.style.left = `${percent}%`;
});
const slider2 = document.getElementById('slid');
const thumb2 = document.getElementById('th2');
const progress2 = document.getElementById('prog');
progress2.style.width = '50%'
thumb2.style.left = `50%`;
slider2.addEventListener('input', () => {
    //changer l'apparence des range sur le player
    const value = slider2.value;
    const percent = (value - slider2.min) / (slider2.max - slider2.min) * 100;
    progress2.style.width = `${percent}%`;
    thumb2.style.left = `${percent}%`;
});
document.getElementById('rang').addEventListener("mouseenter", showthumb);
function showthumb(){
    //affichage du point sur le hover du volume
    document.getElementById('th').style.backgroundColor = "white"
}
document.getElementById('rang').addEventListener("mouseleave", hidethumb);
function hidethumb(){
    //on rend invisible le point sur le mouseleave du volume
    document.getElementById('th').style.backgroundColor = "transparent"
}
document.getElementById('rang2').addEventListener("mouseenter", showthumb2);
function showthumb2(){
    document.getElementById('th2').style.backgroundColor = "white"
}
document.getElementById('rang2').addEventListener("mouseleave", hidethumb2);
function hidethumb2(){
    document.getElementById('th2').style.backgroundColor = "transparent"
}
function scrollHorizontally(event, id) {
    //on permet d'utiliser la molette de la souris sur les div horizontales car l'event grab sur les div enleve l'action par defaut
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    document.getElementById(id).scrollLeft -= (delta * 40); //vitesse de déplacement
    event.preventDefault();
}
function scrollVertically(event, id) {
    //on permet d'utiliser la molette de la souris sur les div verticales car l'event grab sur les div enleve l'action par defaut
    var delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    document.getElementById(id).scrollTop -= (delta * 40); //vitesse de déplacement
    event.preventDefault();
}

document.getElementById('rd').addEventListener("mouseenter", triangleassombrit);
function triangleassombrit(){
    //sur hover du rond des controles, le triangle s'assombrit
    document.getElementById('tri').style.transitionDuration = "0.1s"
    document.getElementById('tri').style.color = "#6e6eb9"
}
document.getElementById('rd').addEventListener("mouseleave", triangleeclaircit);
function triangleeclaircit(){
    //sur mouseleave du rond des controles, le triangle s'eclaircit
    document.getElementById('tri').style.color = "#a5a5d7"
}

document.getElementById('inputsearch').addEventListener('keyup', function() {
    //dès qu'un nouveau caractère est tapé dans le search, on envoie une requête ajax
    if (document.getElementById('inputsearch').value !== null) {
        searchdata= document.getElementById('inputsearch').value
        ajaxRequestDQS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=titre');
        //console.log(document.getElementById('inputsearch').value)
    } else {
        console.log("error");
    }

});

document.getElementById('searchbar').addEventListener("click", appearpopsearch);
function appearpopsearch(){
    // apparition de la popup search rapide
    document.getElementById('Spopup').classList.add("searchtransi");
    document.getElementById('backpopfilter').classList.add("searchbacktransi");
    ajaxRequestDQS('GET', '../php/request.php/search');

    var toshowpopinfo = document.querySelectorAll(".chevronlivesearch");
    toshowpopinfo.forEach(function(chevron) {
        chevron.addEventListener("click", function (event) {
            document.getElementById('bigsectionpop').style.zIndex = "7"
            document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
            document.getElementById('Spopup').classList.remove("searchtransi");
            document.getElementById('backpopfilter').classList.remove("searchbacktransi");
        });
    });
}


document.addEventListener('click', function(event) {
    //On check si le click est en dehors des differentes popup (addtracktoplaylist et createplaylist) pour les cacher
    var maDiv = document.getElementById('searchbar');
    var maDiv2 = document.getElementById('Spopup');
    var elementClique = event.target;

    //Vérifier si l'élément cliqué est à l'intérieur de la div spécifique
    if (!maDiv.contains(elementClique) && !maDiv2.contains(elementClique)) {
        //L'utilisateur a cliqué en dehors de la div spécifique
        document.getElementById('Spopup').classList.remove("searchtransi");
        document.getElementById('backpopfilter').classList.remove("searchbacktransi");
    }
    var monpop = document.getElementById('popupcontaincreateplaylist');
    var monbut = document.getElementById('buttoncreateplaylist');
    var monpop4 = document.getElementsByClassName('pluslivesearch');
    var monpop5 = document.getElementById('plusalone');

    var containsElement = false;

    // Itérer sur tous les éléments avec la classe spécifiée
    for (var i = 0; i < monpop4.length; i++) {
        if (monpop4[i].contains(elementClique)) {
            containsElement = true;
            break;
        }
    }
    if (!monpop.contains(elementClique) && !monbut.contains(elementClique) && !containsElement && !monpop5.contains(elementClique)) {
        document.getElementById('popupcontaincreateplaylist').innerHTML = ""
        document.getElementById('popupcontaincreateplaylist').style.zIndex = -1
    }
});

document.getElementById('buttoncreateplaylist').addEventListener("click", appearpopplaylist);
function appearpopplaylist(){
    //apparition de la pop up creer une playlist avec affectation html
    document.getElementById('popupcontaincreateplaylist').innerHTML = "<div class=\"backpopupplaylist\"></div>\n" +
        "        <div class=\"popupplaylist\">\n" +
        "            <input class=\"txtpopupplaylist\" type=\"text\" placeholder=\"Nom de votre playlist\" maxlength=\"30\">\n" +
        "            <input type=\"file\" class=\"filepopupplaylist\" id=\"filesearch\" content=\"browse\">\n" +
        "            <div class=\"replacestylefile\">\n" +
        "                <div class=\"txtdansfile\">Ajouter une photo</div>\n" +
        "            </div>\n" +
        "            <button class=\"popupcreateplaylistvalid\" id=\"validtocreateplay\">Valider</button>\n" +
        "        </div>";
            
    document.getElementById('popupcontaincreateplaylist').style.zIndex = 15
    var validtocreate = document.getElementById("validtocreateplay");
    //On bind le bouton de validation pour cacher la popup sur son click
    validtocreate.addEventListener("click", function (event) {
        // console.log(document.getElementsByClassName('txtpopupplaylist')[0].value)
        let data={
            login: login,
            nom_playlist: document.getElementsByClassName('txtpopupplaylist')[0].value
        }
        ajaxRequest('POST', '../php/request.php/createplaylist/', function (response) {console.log(response);}, data);
        document.getElementById('popupcontaincreateplaylist').innerHTML = ""
        document.getElementById('popupcontaincreateplaylist').style.zIndex = -1
    });
}
function appearaddtracktoplay() {
    //apparition de la pop up pour ajouter un titre à une playlist avec affectation html
    document.getElementById('popupcontaincreateplaylist').style.zIndex = 15;
    document.getElementById('popupcontaincreateplaylist').innerHTML = "<div class=\"backpopupplaylist\"></div>\n" +
        "     <div class=\"popupaddtrackp\">\n" +
        "        <select class=\"menuderoulantaddtop\">\n" +
        "        </select>\n" +
        "        <button class=\"validaddtrack\">Valider</button>\n" +
        "    </div>";
    var select = document.querySelector('.menuderoulantaddtop');
    //console.log(listplaylist);
    if (Array.isArray(listplaylist)) {
        for (let playlist of listplaylist) {
            var option = document.createElement('option');
            option.value = playlist.id; // Modifier en fonction de l'ID de la playlist
            option.textContent = playlist.nom; // Modifier en fonction du nom de la playlist
            select.appendChild(option);
        }
    } else {
        console.log("Erreur : listplaylist n'est pas un tableau");
    }
}
var showresultfromartists = document.querySelectorAll(".showresultfromartist");

showresultfromartists.forEach(function(showresultfromartist) {
    //affichage sur hover du fond assombrit avec informations
    var onhoverResult1 = showresultfromartist.querySelector(".onhoverResult1");

    showresultfromartist.addEventListener("mouseover", function() {
        onhoverResult1.style.height = "100%";
    });

    showresultfromartist.addEventListener("mouseout", function() {
        onhoverResult1.style.height = "0";
    });
});
var showresultfromalbums = document.querySelectorAll(".showresultfromalbum");
showresultfromalbums.forEach(function(showresultfromartist) {
    //affichage sur hover du fond assombrit avec informations
    var onhoverResult2 = showresultfromartist.querySelector(".onhoverResult2");

    showresultfromartist.addEventListener("mouseover", function() {
        onhoverResult2.style.height = "100%";
    });

    showresultfromartist.addEventListener("mouseout", function() {
        onhoverResult2.style.height = "0";
    });
});
var showonalbum = document.querySelectorAll(".album");
showonalbum.forEach(function(showresultfromartist) {
    //affichage sur hover du fond assombrit avec informations
    var onhoveralbum = showresultfromartist.querySelector(".onhoverResult2");

    showresultfromartist.addEventListener("mouseover", function() {
        onhoveralbum.style.height = "100%";
    });

    showresultfromartist.addEventListener("mouseout", function() {
        onhoveralbum.style.height = "0";
    });
});

var showsec1 = document.querySelectorAll(".soundprevlist");
showsec1.forEach(function(show) {
    //affichage sur hover du fond assombrit avec informations
    var onhoverResult1 = show.querySelector(".onhoversec1");

    show.addEventListener("mouseover", function() {
        onhoverResult1.style.height = "100%";
    });

    show.addEventListener("mouseout", function() {
        onhoverResult1.style.height = "0";
    });
});

var plustoaddplaylist = document.querySelectorAll(".pluslivesearch");
plustoaddplaylist.forEach(function(showplus) {
    //affichage popup sur evenement
    showplus.addEventListener("click", function() {
        appearaddtracktoplay();
    });
});
var addtoplaylist = document.getElementById('plusalone');
addtoplaylist.addEventListener("click", function() {
    //affichage popup sur evenement
    appearaddtracktoplay();
});

var images = document.querySelectorAll("img");
images.forEach(function(image) {
    // empeche aux images d'etre aggripée par la souris (sur les scroll)
    image.addEventListener("dragstart", function(event) {
        event.preventDefault();
    });

    image.addEventListener("mousedown", function(event) {
        event.preventDefault();
    });
});

var toshowpopinfo = document.querySelectorAll(".chevronlivesearch");
toshowpopinfo.forEach(function(chevron) {
    //affichage de la popup information sur les click sur des chevrons
    chevron.addEventListener("click", function (event) {
        document.getElementById('bigsectionpop').style.zIndex = "7"
        document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
        document.getElementById('Spopup').classList.remove("searchtransi");
        document.getElementById('backpopfilter').classList.remove("searchbacktransi");
    });
});
var toshowpopinfofromplaylist = document.querySelectorAll(".buttontimeandmoremore");
toshowpopinfofromplaylist.forEach(function(chevron) {
    //affichage de la popup information sur les click sur des chevrons
    chevron.addEventListener("click", function (event) {
        document.getElementById('bigsectionpop').style.zIndex = "7"
        document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
        document.getElementById('Spopup').classList.remove("searchtransi");
        document.getElementById('backpopfilter').classList.remove("searchbacktransi");
    });
});
var toleavepopinfo = document.getElementById("quitinfo");
toleavepopinfo.addEventListener("click", function (event) {
    //bind du bouton quit pour quitter la popup des informations sur un morceau
    document.getElementById('bigsectionpop').style.zIndex = "-2"
    document.getElementById('toshowpopupinfo').classList.remove('classaddtoshowinfo')
});
window.addEventListener('resize', function() {
    //Ajout d'un évenement si l'écran est trop petit pour etre affiché
    var minScreenWidth = 250;
    if (window.innerWidth < minScreenWidth) {
        alert("Erreur : Ecran trop petit. Utilisez un autre appareil afin de visualiser ce site.")
    }
});


var toshowvisu = document.getElementById("affiche");
toshowvisu.addEventListener("click", function (event) {
    //affichage ou déactivation du viualiser en fond
    if (document.getElementById('visu').style.zIndex === "-2"){
        document.getElementById('visu').style.display = "block"
        document.getElementById('visu').style.zIndex = "-1"
        document.getElementById("svgtovisu").innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"rgba(246, 244, 229, 0.67)\" class=\"bi bi-eye\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z\"/>\n" +
            "  <path d=\"M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z\"/>\n" +
            "</svg>";
        hideElementById('fogsearch');
        hideElementById('fogresultartist');
        hideElementById('fog');
        hideElementById('fogresultartistbis');
        hideElementById('fogresulttitre');
    }
    else{
        document.getElementById('visu').style.display = "none"
        document.getElementById('visu').style.zIndex = "-2"
        document.getElementById("svgtovisu").innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"rgba(246, 244, 229, 0.67)\" class=\"bi bi-eye-slash\" viewBox=\"0 0 16 16\">\n" +
            "                    <path d=\"M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z\"/>\n" +
            "                    <path d=\"M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z\"/>\n" +
            "                    <path d=\"M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z\"/>\n" +
            "                </svg>"
        showElementById('fogsearch');
        showElementById('fogresultartist');
        showElementById('fog');
        showElementById('fogresultartistbis');
        showElementById('fogresulttitre');
    }

});
function hideElementById(elementId) {
    //hide un element si non null
    var element = document.getElementById(elementId);
    if (element !== null) {
        element.style.display = "none";
    }
}
function showElementById(elementId) {
    //show un element si non null
    var element = document.getElementById(elementId);
    if (element !== null) {
        element.style.display = "block";
    }
}
var toplaymus = document.querySelectorAll(".soundprevlist");
toplaymus.forEach(function(play) {
    //sur click d'une image, joue la musique associée
    play.addEventListener("click", function (event) {
        event.preventDefault();
        var link = play.querySelector(".lientitre");
        var musicPlayer = document.getElementById('musicPlayer');

        musicPlayer.src = link.innerHTML;
        musicPlayer.load();
        document.getElementById('divshowtitre').innerHTML = play.querySelector(".titremorceau");
        musicPlayer.addEventListener('canplay', function() {
            musicPlayer.play();

        });
    });
});

document.getElementById('filtertitre').addEventListener("click", function (event) {
    //sur click d'un filtre, montre les resultats de la recherche associée
    ajaxRequestDQS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=titre');

});
document.getElementById('filterartiste').addEventListener("click", function (event) {
    //sur click d'un filtre, montre les resultats de la recherche associée
    ajaxRequestDQS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=artiste');

});
document.getElementById('filterAlbum').addEventListener("click", function (event) {
    //sur click d'un filtre, montre les resultats de la recherche associée
    ajaxRequestDQS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=album');

});

document.getElementById('before').addEventListener("click", function (event) {
    //sur click du control de la musique precedent, joue le morceau précedent la liste des morceaux ecoutés précédemment
    event.preventDefault();
    var musicPlayer = document.getElementById('musicPlayer');

    musicPlayer.src = globalListbefore[0].emplacement_morceau;
    musicPlayer.load();
    document.getElementById('divshowtitre').innerText = globalListbefore[0].titre;
    document.getElementById('imgplayerd').src = globalListbefore[0].emplacement;
    musicPlayer.addEventListener('canplay', function () {
        musicPlayer.play();
        let data = {
            titre: globalListbefore[0].titre,
            email: login,
            favori: 0
        }
        ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
            //console.log(response)
        }, data);
    });
    globalListbefore.shift();
});
document.getElementById('after').addEventListener("click", function (event) {
    //sur click du control de la musique suivante, joue le morceau suivant la liste de lecture
    event.preventDefault();
    var musicPlayer = document.getElementById('musicPlayer');

    musicPlayer.src = globalListnext[0].emplacement_morceau;
    musicPlayer.load();
    document.getElementById('divshowtitre').innerText = globalListnext[0].titre;
    document.getElementById('imgplayerd').src = globalListnext[0].emplacement;
    musicPlayer.addEventListener('canplay', function () {
        musicPlayer.play();
        let data = {
            titre: globalListnext[0].titre,
            email: login,
            favori: 0
        }
        ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
            //console.log(response)
        }, data);
    });
    globalListnext.shift();
    var container = document.getElementById('secondcontain');
    var firstElement = container.querySelector('.soundprevlist:first-child');
    if (firstElement) {
        container.removeChild(firstElement);
    }
    //ajaxRequest('GET', '../php/request.php/lastplayed/?login='+login+'&nb='+20, displayLastPlayed)
});

document.getElementById('Userr').addEventListener("mouseover", function (event) {
    document.querySelector('.displayinfouser').classList.add('displayinfouserhover')
    document.querySelector('.infoprenom').innerText = "Prénom : "+document.querySelector(".nomutil").innerText

});
document.querySelector('.displayinfouser').addEventListener("mouseleave", function (event) {
    document.querySelector('.displayinfouser').classList.remove('displayinfouserhover')
    document.querySelector('.displayinfouser').style.height = "0"
});
