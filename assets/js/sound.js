'use strict';

var Params= new URLSearchParams(window.location.search);
var login = Params.get('login');

//recherche ajax effectuées à chaque rechergement du script
ajaxRequest('GET', '../php/request.php/playlists/?login='+login, displayPlaylists)
ajaxRequest('GET', '../php/request.php/last_morceau/?nb='+20, displayLastAdded)
ajaxRequest('GET', '../php/request.php/morceau/?nb='+20, displaylistlecture)
ajaxRequest('GET', '../php/request.php/user/?login='+login, displayUsername)
ajaxRequest('GET', '../php/request.php/lastplayed/?login='+login+'&nb='+20, displayLastPlayed)


function checkNotNull(id) {
    if (id !== null) {
        return false
    } else {
        return true
    }
}

function displayPlaylists(playlists) {
    //console.log(playlists)
    document.getElementById('grabplaylist').innerHTML =""
    for(let playlist of playlists) {
        document.getElementById('grabplaylist').innerHTML += "<div class=\"itemLeftPlaylist\"><div class=\"iconLeftPlaylist\"><img alt=\"img\" src=\""+playlist.image+"\"></div><div class=\"nomLeftPlaylist\">"+playlist.nom+"</div></div>"
    }
    var showplaylist = document.querySelectorAll(".itemLeftPlaylist");
    showplaylist.forEach(function(recall) {
        recall.addEventListener('click', () => {
            ajaxRequest('GET', '../php/request.php/playlistDetail/?login='+login+'&nom_playlist='+recall.querySelector(".nomLeftPlaylist").innerText, displayPlaylistMorceaux)
            document.getElementById('Spopup').classList.remove("searchtransi");
            document.getElementById('backpopfilter').classList.remove("searchbacktransi");
            renewlistener()
        });
    });
}
function displayPlaylistMorceaux(morceaux) {

    let dureetot = 0
    for(let morceau of morceaux){
        let duree=morceau.duree
        duree=duree*60
        dureetot += duree

    }
    var secondtime = Math.floor(dureetot%60.0)
    var mintime = Math.floor(dureetot/60.0)
    if (secondtime<10){
        secondtime = "0"+secondtime
    }
    if (mintime<10){
        mintime = "0"+mintime
    }
    dureetot = mintime+":"+secondtime

    
    // dureetot=(dureetot/=60).toFixed(2)
    document.getElementById('Mainwindow').innerHTML = ""
    document.getElementById('Mainwindow').innerHTML += "<div class=\"infoplaylist\">\n" +
                "        <div class=\"imgplaylist\">\n" +
                "            <img src=\"../assets/img/imgplaylist.png\">\n" +
                "        </div>\n" +
                "        <div class=\"donneesplaylist\">\n" +
                "            <div class=\"Nomplaylist\">\n" +
                "                <span id=\"popplaylistnom\">Playlist :</span>\n" +
                "            </div>\n" +
                "            <div class=\"Dureeplaylist\">\n" +
                "                Durée : <span id=\"popplaylistduree\">"+dureetot+" min</span>\n" +
                "            </div>\n" +
                // "            <div class=\"Datecreationplaylist\">\n" +
                // "                Date de création : <span id=\"popplaylistdate\">04/06/2023</span>\n" +
                // "            </div>\n" +
                "        </div>\n" +
                "    </div>\n"+
                "<div class=\"listplaylist divgrabvertical\" id=\"containplaylist\" onwheel=\"scrollVertically(event, 'containplaylist')\"></div>"+
                "    <div class=\"containerpopupplaylist\" id=\"popupcontaincreateplaylist\"></div>" 

    for (let morceau of morceaux) {
        document.getElementById('containplaylist').innerHTML +=
                "        <div class=\"musicinplaylist\">\n" +
                "            <div class=\"musicinplayliststart\">\n" +
                "                <img class =\"imageplaylisteclass\" src=\""+morceau.emplacement+"\">\n" +
                "                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
                "                    <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
                "                    <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
                "                </svg>\n" + "<div class=\"lientitre\">" + morceau.emplacement_morceau + "</div><div class=\"titremorceau\">" + morceau.titre +"</div>"+
                "            </div>\n" +
                "            <div class=\"musicinplaylistmid\">\n" +
                "                <div class=\"musicinplaylistmidartist\">"+morceau.artiste+"</div>\n" +
                "                <div class=\"musicinplaylistmidname\">"+morceau.titre+"</div>\n" +
                "            </div>\n" +
                "            <div class=\"musicinplaylistlast\">\n" +
                "                <div class=\"buttonplusandheart\">\n" +
                "                    <div class=\"heartlivesearch\">\n" +
                "                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n" +
                "                            <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n" +
                "                        </svg>\n" +
                "                    </div>\n" +
                "                    <div class=\"pluslivesearch\">\n" +
                "                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n" +
                "                            <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n" +
                "                        </svg>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "                <div class=\"buttontimeandmore\">\n" +
                "                    <div class=\"buttontimeandmoretime\">"+morceau.duree+"</div>\n" +
                "                    <div class=\"buttontimeandmoremore\">\n" +
                "                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
                "                            <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
                "                        </svg>\n" +
                "                    </div>\n" +
                "                </div>\n" +
                "            </div>\n"

    }
    var toplaymus2 = document.querySelectorAll(".musicinplayliststart");
    toplaymus2.forEach(function(play) {
        play.addEventListener("click", function (event) {
            event.preventDefault();
            var link = play.querySelector(".lientitre");
            var musicPlayer = document.getElementById('musicPlayer');

            musicPlayer.src = link.innerHTML;
            musicPlayer.load();
            document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
            document.getElementById('imgplayerd').src = play.querySelector(".imageplaylisteclass").src;
            musicPlayer.addEventListener('canplay', function () {
                musicPlayer.play();
                let data = {
                    url_morc: link.innerHTML,
                    email: login,
                    favori: 0
                }
                ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
                    //console.log(response)
                }, data);
            });
        });
    });

}
function displayLastAdded(sounds)
{
        document.getElementById('thirdcontain').innerHTML = '';
        for (let sound of sounds) {
            document.getElementById('thirdcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src=" + sound.emplacement + "><div class=\"onhoversec1\"><div class=\"artistehover\">" + sound.titre + "</div><div class=\"titrehover\">" + sound.date_parution + "</div></div><div class=\"lientitre\">" + sound.emplacement_morceau + "</div><div class=\"titremorceau\">" + sound.titre+ "</div></div>";
        }
        var toplaymus = document.querySelectorAll(".soundprevlist");
        toplaymus.forEach(function (play) {
            play.addEventListener("click", function (event) {
                event.preventDefault();
                var link = play.querySelector(".lientitre");
                var musicPlayer = document.getElementById('musicPlayer');

                musicPlayer.src = link.innerHTML;
                musicPlayer.load();
                document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
                document.getElementById('imgplayerd').src = play.querySelector(".Imgsec1").src;
                musicPlayer.addEventListener('canplay', function () {
                    musicPlayer.play();
                    let data = {
                        url_morc: link.innerHTML,
                        email: login,
                        favori: 0
                    }
                    ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
                        //console.log(response)
                    }, data);
                });
            });
        });

}
function displaylistlecture(sounds)
{
        document.getElementById('secondcontain').innerHTML = '';
        const list = []
        globalListnext = []
        for (let sound of sounds) {
            list.push(sound)

            // document.getElementById('thirdcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src=\""+sound.emplacement+"\"><div class=\"onhoversec1\"><div class=\"artistehover\">"+sound.titre+"</div><div class=\"titrehover\">"+sound.date_parution+"</div></div><div class=\"lientitre\">"+sound.emplacement_morceau+"</div></div>";
        }
        for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
        for (let i = 0; i < Math.min(20, list.length); i++) {
            globalListnext.push(list[i])
            document.getElementById('secondcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src=" + list[i].emplacement + "><div class=\"onhoversec1\"><div class=\"artistehover\">" + list[i].titre + "</div><div class=\"titrehover\">" + list[i].date_parution + "</div></div><div class=\"lientitre\">" + list[i].emplacement_morceau + "</div><div class=\"titremorceau\">" + list[i].titre +"</div></div>";
        }
        var toplaymus = document.querySelectorAll(".soundprevlist");
        toplaymus.forEach(function (play) {
            play.addEventListener("click", function (event) {
                event.preventDefault();
                var link = play.querySelector(".lientitre");
                var musicPlayer = document.getElementById('musicPlayer');

                musicPlayer.src = link.innerHTML;
                musicPlayer.load();
                document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
                document.getElementById('imgplayerd').src = play.querySelector(".Imgsec1").src;
                musicPlayer.addEventListener('canplay', function () {
                    musicPlayer.play();
                    let data = {
                        url_morc: link.innerHTML,
                        email: login,
                        favori: 0
                    }
                    ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
                        //console.log(response)
                    }, data);
                });
            });
        });

}
function displayLastPlayed(sounds)
{
        document.getElementById('firstcontain').innerHTML = '';
        globalListbefore = []
        for (let sound of sounds) {
            //document.getElementById('thirdcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src="+sound.emplacement+"><div class=\"onhoversec1\"><div class=\"artistehover\">"+sound.titre+"</div><div class=\"titrehover\">"+sound.date_parution +"</div></div><div class=\"lientitre\">"+sound.emplacement_morceau+"</div></div>";
            //console.log(sound);
            globalListbefore.push(sound)
            // document.getElementById('thirdcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src=\""+sound.emplacement+"\"><div class=\"onhoversec1\"><div class=\"artistehover\">"+sound.titre+"</div><div class=\"titrehover\">"+sound.date_parution+"</div></div><div class=\"lientitre\">"+sound.emplacement_morceau+"</div></div>";
            document.getElementById('firstcontain').innerHTML += "<div class=\"soundprevlist\"><img alt=\"img\" class=\"Imgsec1\" src=" + sound.emplacement + "><div class=\"onhoversec1\"><div class=\"artistehover\">" + sound.titre + "</div><div class=\"titrehover\">" + sound.date_parution + "</div></div><div class=\"lientitre\">" + sound.emplacement_morceau + "</div><div class=\"titremorceau\">" + sound.titre + "</div></div>";
        }
        var toplaymus = document.querySelectorAll(".soundprevlist");
        toplaymus.forEach(function (play) {
            play.addEventListener("click", function (event) {
                event.preventDefault();
                var link = play.querySelector(".lientitre");
                var musicPlayer = document.getElementById('musicPlayer');

                musicPlayer.src = link.innerHTML;
                musicPlayer.load();
                document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
                document.getElementById('imgplayerd').src = play.querySelector(".Imgsec1").src;
                musicPlayer.addEventListener('canplay', function () {
                    musicPlayer.play();
                    let data = {
                        titre: link.innerHTML,
                        email: login,
                        favori: 0
                    }
                    ajaxRequest('POST', '../php/request.php/a_lue/', function (response) {
                        //console.log(response)
                    }, data);
                });
            });
        });

}

function displayUsername(user)
{
    document.getElementById('Userr').innerHTML = "<div class=\"nomutil\">"+user[0].prenom+"</div><div class=\"pp\"><img alt=\"img\" src=\"../assets/img/sefa.jpg\"></div>";
    document.querySelector('.infonom').innerText = "Nom : "+ user[0].nom
    document.querySelector('.infoage').innerText = "Age : "+user[0].date_naissance
    document.querySelector('.infomail').innerText = "Mail : "+user[0].email
    document.querySelector('.infomdp').innerHTML = "Mot de passe : <span class=\"hiddenfromuser\">"+user[0].mdp+"</span>"
    if (checkNotNull('Motd')){
        document.getElementById('Motd').innerHTML = "Bonjour " + user[0].prenom;
    }
}
