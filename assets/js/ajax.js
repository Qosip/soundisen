'use strict';

// creation de la requete ajax
function ajaxRequest(type, url, callback, data = null)
{
    let xhr;

    xhr = new XMLHttpRequest();
    if (type === 'GET' && data != null)
    url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onload = () =>
    {
      switch (xhr.status)
      {
          case 200:
          case 201:
            callback(JSON.parse(xhr.responseText));
            break;
          default:
            httpErrors(xhr.status);
      }
    };
    if (data == null)
      xhr.send();
    else
    xhr.send(JSON.stringify(data));
}

//creation de la requete ajax specialisee pour la recherche rapide
function ajaxRequestDQS(type, url, data = null)
{
    let xhr;

    xhr = new XMLHttpRequest();
    if (type == 'GET' && data != null)
    url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onload = () =>
    {
      switch (xhr.status)
      {
          case 200:
          case 201:
            afficheQS(JSON.parse(xhr.responseText));
            break;
          default:
            httpErrors(xhr.status);
      }
    };
    if (data == null)
      xhr.send();
    else
    xhr.send(JSON.stringify(data));
}

// affichage de la recherche rapide
function afficheQS(data){
  document.getElementById('idsearchresult').innerHTML = "";
  for (let sound of data)
  {
    document.getElementById('idsearchresult').innerHTML += 
        "<div class=\"resultlivesearch\"><div class=\"imagesearch\"><div class=\"playbuttononsearch\"></div><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\"><path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/></svg><img alt=\"img\" class=\"searchimmgg\" src=\""+sound.emplacement+"\"><div class=\"lientitre\">"+sound.emplacement_morceau+"</div><div class=\"titremorceau\">"+sound.titre+" - "+sound.album+" - "+sound.artiste+"</div></div><div class=\"infolivesearch\"><div class=\"titleinfolivesearch\">"+sound.artiste
        +"</div><div class=\"otherinfolivesearch\">"+sound.titre+" - "+sound.album+"</div></div><div class=\"endlivesearch\"><div class=\"dureelivesearch\">"+ sound.duree+"</div><div class=\"chevronlivesearch\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\"><path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/></svg></div></div></div>";
  }
  var showbigpop = document.querySelectorAll(".chevronlivesearch");
    showbigpop.forEach(function(chevron) {
      chevron.addEventListener("click", function (event) {
          document.getElementById('bigsectionpop').style.zIndex = "7"
          document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
          document.getElementById('Spopup').classList.remove("searchtransi");
          document.getElementById('backpopfilter').classList.remove("searchbacktransi");
      });
  });
    var toplaymus = document.querySelectorAll(".imagesearch");
    toplaymus.forEach(function(play) {
        play.addEventListener("click", function (event) {
            event.preventDefault();
            var link = play.querySelector(".lientitre");
            var musicPlayer = document.getElementById('musicPlayer');

            musicPlayer.src = link.innerHTML;
            musicPlayer.load();
            document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
            document.getElementById('imgplayerd').src = play.querySelector(".searchimmgg").src;
            musicPlayer.addEventListener('canplay', function () {
                musicPlayer.play();
                let data = {
                    url_morc: link.innerHTML,
                    email: login,
                    favori: 0
                }
                ajaxRequest('POST', '../php/request.php/a_lue/', function(){}, data);
            });
        });
    });
}

//creation de la requete ajax specialisee pour la recherche avancee des morceaux
function ajaxRequestMS(type, url, data = null)
{
    let xhr;

    xhr = new XMLHttpRequest();
    if (type == 'GET' && data != null)
    url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onload = () =>
    {
      switch (xhr.status)
      {
          case 200:
          case 201:
            afficheMS(JSON.parse(xhr.responseText));
            break;
          default:
            httpErrors(xhr.status);
      }
    };
    if (data == null)
      xhr.send();
    else
    xhr.send(JSON.stringify(data));
}

// affichage de la recherche avancee des morceaux
function afficheMS(data){
  document.getElementById('resultsecondcontain').innerHTML = "";
  for (let sound of data)
  {
    document.getElementById('resultsecondcontain').innerHTML += "<div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img class=\"searchimmgg\" alt=\"img\" src=\""+sound.emplacement+"\">" +
        "                            <div class=\"lientitre\">"+sound.emplacement_morceau+"</div><div class=\"titremorceau\">"+sound.titre+" - "+sound.album+" - "+sound.artiste+"</div>\n"+
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">"+sound.artiste+"</div>\n" +
        "                            <div class=\"otherinfolivesearch\">"+sound.titre+" - "+sound.album+"</div>\n" +
        "                            <div class=\"actionlivesearch\">\n" +
        "                                <div class=\"heartlivesearch\">\n" +
        "                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n" +
        "                                        <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n" +
        "                                    </svg>\n" +
        "                                </div>\n" +
        "                                <div class=\"pluslivesearch\">\n" +
        "                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-plus\" viewBox=\"0 0 16 16\">\n" +
        "                                        <path d=\"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z\"/>\n" +
        "                                    </svg>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"endlivesearch\">\n" +
        "                            <div class=\"dureelivesearch\">"+sound.duree+"</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>"
      var toplaymusfromstitre = document.querySelectorAll(".imagesearch");
      toplaymusfromstitre.forEach(function(play) {
          play.addEventListener("click", function (event) {
              event.preventDefault();
              var link = play.querySelector(".lientitre");
              var musicPlayer = document.getElementById('musicPlayer');

              musicPlayer.src = link.innerHTML;
              musicPlayer.load();
              document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
              musicPlayer.addEventListener('canplay', function() {
                  musicPlayer.play();
                  let data={
                      titre: link.innerHTML,
                      email: login,
                      favori: 0
                  }
                  ajaxRequest('POST', '../php/request.php/a_lue/', function(response){console.log(response)}, data);
              });
          });
      });
  }
  var showbigpop = document.querySelectorAll(".chevronlivesearch");
    showbigpop.forEach(function(chevron) {
      chevron.addEventListener("click", function (event) {
          document.getElementById('bigsectionpop').style.zIndex = "7"
          document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
          document.getElementById('Spopup').classList.remove("searchtransi");
          document.getElementById('backpopfilter').classList.remove("searchbacktransi");
      });
  });
    var plustoaddplaylist = document.querySelectorAll(".pluslivesearch");
    plustoaddplaylist.forEach(function(showplus) {
        showplus.addEventListener("click", function() {
            appearaddtracktoplay();
        });
    });
    var toplaymus = document.querySelectorAll(".imagesearch");
    toplaymus.forEach(function(play) {
        play.addEventListener("click", function (event) {
            event.preventDefault();
            var link = play.querySelector(".lientitre");
            var musicPlayer = document.getElementById('musicPlayer');

            musicPlayer.src = link.innerHTML;
            musicPlayer.load();
            document.getElementById('divshowtitre').innerText = play.querySelector(".titremorceau").innerText;
            document.getElementById('imgplayerd').src = play.querySelector(".Imgsec1").src;
            musicPlayer.addEventListener('canplay', function() {
                musicPlayer.play();
                let data={
                    titre: link.innerHTML,
                    email: login,
                    favori: 0
                }
                ajaxRequest('POST', '../php/request.php/a_lue/', function(response){console.log(response)}, data);
            });
        });
    });
}

//creation de la requete ajax specialisee pour la recherche avancee des artistes
function ajaxRequestARS(type, url, data = null)
{
    let xhr;

    xhr = new XMLHttpRequest();
    if (type == 'GET' && data != null)
        url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onload = () =>
    {
        switch (xhr.status)
        {
            case 200:
            case 201:
                afficheARS(JSON.parse(xhr.responseText));
                break;
            default:
                httpErrors(xhr.status);
        }
    };
    if (data == null)
        xhr.send();
    else
        xhr.send(JSON.stringify(data));
}

// affichage de la recherche avancee des artistes
function afficheARS(data){
    document.getElementById('resultfirstcontain').innerHTML = "";
    for (let sound of data)
    {
        document.getElementById('resultfirstcontain').innerHTML += "<div class=\"showresultfromartist\">\n" +
            "                        <img alt=\"img\" class=\"ImgResult1\" src=\""+sound.emplacement+"\">\n" +
            "                        <div class=\"onhoverResult1\">\n" +
            "                            <div class=\"artistehoversearch\">\n" +
            "                                "+sound.artiste+"\n" +
            "                            </div>\n" +
            "                        </div>\n" +
            "                    </div>"
    }

    var showresultfromartists = document.querySelectorAll(".showresultfromartist");

    showresultfromartists.forEach(function(showresultfromartist) {
        var onhoverResult1 = showresultfromartist.querySelector(".onhoverResult1");

        showresultfromartist.addEventListener("mouseover", function() {
            onhoverResult1.style.height = "100%";
        });

        showresultfromartist.addEventListener("mouseout", function() {
            onhoverResult1.style.height = "0";
        });
    });
    var containers = document.querySelectorAll('.divgrab');

    containers.forEach(function(container) {
        var isMouseDown = false;
        var startX;
        var scrollLeft;

        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'pointer';
        });

        container.addEventListener('mousemove', function(event) {
            if (!isMouseDown) return;
            event.preventDefault();
            var x = event.pageX - container.offsetLeft;
            var walk = (x - startX) * 2; //Vitesse de défilement
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener('mouseup', function() {
            isMouseDown = false;
            container.style.cursor = 'default';
        });
    });

    var containers2 = document.querySelectorAll('.divgrabvertical');

    containers2.forEach(function(container) {
        var isMouseDown = false;
        var startY;
        var scrollTop;

        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            startY = event.pageY - container.offsetTop;
            scrollTop = container.scrollTop;
            container.style.cursor = 'pointer';
        });

        container.addEventListener('mousemove', function(event) {
            if (!isMouseDown) return;
            event.preventDefault();
            var x = event.pageY - container.offsetTop;
            var walk = (x - startY) * 2;
            container.scrollTop = scrollTop - walk;
        });

        container.addEventListener('mouseup', function() {
            isMouseDown = false;
            container.style.cursor = 'default';
        });
    });
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
        image.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });

        image.addEventListener("mousedown", function(event) {
            event.preventDefault();
        });
    });

}

//creation de la requete ajax specialisee pour la recherche avancee des albums
function ajaxRequestALS(type, url, data = null)
{
    let xhr;

    xhr = new XMLHttpRequest();
    if (type == 'GET' && data != null)
        url += '?' + data;
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/JSON');
    xhr.onload = () =>
    {
        switch (xhr.status)
        {
            case 200:
            case 201:
                afficheALS(JSON.parse(xhr.responseText));
                break;
            default:
                httpErrors(xhr.status);
        }
    };
    if (data == null)
        xhr.send();
    else
        xhr.send(JSON.stringify(data));
}

// affichage de la recherche avancee des albums
function afficheALS(data){
    document.getElementById('resultthirdcontain').innerHTML = "";
    for (let sound of data)
    {
        document.getElementById('resultthirdcontain').innerHTML += "<div class=\"showresultfromalbum\">\n" +
            "                    <img alt=\"img\" class=\"ImgResult2\" src=\""+sound.emplacement+"\">\n" +
            "                    <div class=\"onhoverResult2\">\n" +
            "                        <div class=\"artistealbumhoversearch\">\n" +
            "                            "+ sound.artiste +"\n" +
            "                        </div>\n" +
            "                        <div class=\"albumhoversearch\">\n" +
            "                            "+ sound.album +"\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>"
    }
    var showbigpop = document.querySelectorAll(".chevronlivesearch");
    showbigpop.forEach(function(chevron) {
        chevron.addEventListener("click", function (event) {
            document.getElementById('bigsectionpop').style.zIndex = "7"
            document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
            document.getElementById('Spopup').classList.remove("searchtransi");
            document.getElementById('backpopfilter').classList.remove("searchbacktransi");
        });
    });

    var showresultfromalbum = document.querySelectorAll(".showresultfromalbum");

    showresultfromalbum.forEach(function(showresultfromartist) {
        var onhoverResult2 = showresultfromartist.querySelector(".onhoverResult2");

        showresultfromartist.addEventListener("mouseover", function() {
            onhoverResult2.style.height = "100%";
        });

        showresultfromartist.addEventListener("mouseout", function() {
            onhoverResult2.style.height = "0";
        });
    });
    var containers = document.querySelectorAll('.divgrab');

    containers.forEach(function(container) {
        var isMouseDown = false;
        var startX;
        var scrollLeft;

        container.addEventListener('mousedown', function(event) {
            isMouseDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'pointer';
        });

        container.addEventListener('mousemove', function(event) {
            if (!isMouseDown) return;
            event.preventDefault();
            var x = event.pageX - container.offsetLeft;
            var walk = (x - startX) * 2; //Vitesse de défilement
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener('mouseup', function() {
            isMouseDown = false;
            container.style.cursor = 'default';
        });
    });

    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
        image.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });

        image.addEventListener("mousedown", function(event) {
            event.preventDefault();
        });
    });

}

// fonction de gestion des erreurs
function httpErrors(errorCode)
{
  let messages =
  {
    400: 'Requête incorrecte',
    401: 'Authentifiez vous',
    403: 'Accès refusé',
    404: 'Page non trouvée',
    500: 'Erreur interne du serveur',
    503: 'Service indisponible'
  };

  if (errorCode in messages)
  {
    console.log(messages[errorCode]);
  }
}
