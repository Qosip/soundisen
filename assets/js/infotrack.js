
function renewlistenerfromlivesearch() {

    var displayresult = document.querySelectorAll(".resultlivesearch");

    displayresult.forEach(function (element) {
        //affichage des infos sur evenement click d'un chevron
        var track = element.querySelector(".titleinfolivesearch");
        var chevron = element.querySelector(".chevronlivesearch");
        var artiste = element.querySelector(".otherinfolivesearch").textContent;

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
    document.getElementById('grabplaylist').innerHTML =""
    for(let info of infos) {
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