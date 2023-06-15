
function renewlistenerfromlivesearch() {

    var displayresult = document.querySelectorAll(".resultlivesearch");

    displayresult.forEach(function (element) {
        //affichage des infos sur evenement click d'un chevron
        var track = element.querySelector(".titleinfolivesearch").innerText;
        var chevron = element.querySelector(".chevronlivesearch");
        var artiste = element.querySelector(".otherinfolivesearch").innerText;

        var parties = artiste.split("-");

        if (parties.length > 1) {
            var art = parties[1].trim();
        }

        chevron.addEventListener("click", function () {
            ajaxRequest('GET', '../php/request.php/infos/?track=' + track + "&artiste=" + art, displayinfos)
        });
    });
}

function displayinfos(infos) {

    document.querySelector('.containimg').querySelector("img").src = infos[0].photo;
    document.querySelector('.Dnomdescene').querySelector("span").innerText = infos[0].nom_scene;
    document.querySelector('.Dprenom').querySelector("span").innerText = infos[0].prenom;
    document.querySelector('.Dnom').querySelector("span").innerText = infos[0].nom;
    document.querySelector('.Dmort').querySelector("span").innerText = infos[0].date_mort;
    document.querySelector('.Dstyle').querySelector("span").innerText = infos[0].type_artiste;
    document.querySelector('.Dtype').querySelector("span").innerText = infos[0].style_musical;
    document.querySelector('.Dtrack').querySelector("span").innerText = infos[0].titre_morceau;
    document.querySelector('.Dalbum').querySelector("span").innerText = infos[0].titre_album;
    document.querySelector('.Dduree').querySelector("span").innerText = infos[0].duree;
    document.querySelector('.Dannee').querySelector("span").innerText = infos[0].date_parution;

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