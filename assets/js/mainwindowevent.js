var callaccueil = document.querySelectorAll('.toaccueil');
var globalListnext = [];
var globalListbefore = [];
callaccueil.forEach(function(toaccueil) {
    //reload la section accueil à chaque click sur une class accueil (logo et nom) (affectation de l'html au mainwindow)
    toaccueil.addEventListener('click', () => {
        document.getElementById('Mainwindow').innerHTML = "<div class=\"Motd\" id=\"Motd\">Bonjour</div>\n" +
            "    <div class=\"titlesection\">Titres Récemments écoutés</div>\n" +
            "    <div class=\"previouslylistened divgrab\" id=\"firstcontain\" onwheel=\"scrollHorizontally(event, 'firstcontain')\">\n" +
            "        <!--<div class=\"soundprevlist\">\n" +
            "            <img alt=\"img\" class=\"Imgsec1\" src=\"../assets/img/sefa.jpg\">\n" +
            "            <div class=\"onhoversec1\">\n" +
            "                <div class=\"artistehover\">\n" +
            "                    Sefa\n" +
            "                </div>\n" +
            "                <div class=\"titrehover\">\n" +
            "                    Muzika (Remix)\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"lientitre\">../assets/music/Daft_Punk_Get_Lucky.mp3</div>\n" +
            "        </div>-->\n" +
            "    </div>\n" +
            "    <div class=\"titlesection\">Liste de lecture</div>\n" +
            "    <div class=\"previouslylistened divgrab\" id=\"secondcontain\" onwheel=\"scrollHorizontally(event, 'secondcontain')\" onmouseup=\"document.body.style.cursor = 'default'\">\n" +
            "        <!--<div class=\"soundprevlist\">\n" +
            "            <img alt=\"img\" class=\"Imgsec1\" src=\"../assets/img/sefa.jpg\">\n" +
            "            <div class=\"onhoversec1\">\n" +
            "                <div class=\"artistehover\">\n" +
            "                    Sefa\n" +
            "                </div>\n" +
            "                <div class=\"titrehover\">\n" +
            "                    Muzika (Remix)\n" +
            "                </div>\n" +
            "            </div>\n" +
            "            <div class=\"lientitre\">../assets/music/Daft_Punk_Get_Lucky.mp3</div>\n" +
            "        </div>-->\n" +
            "    </div>\n" +
            "    <div class=\"titlesection\">Les dernières sorties</div>\n" +
            "    <div class=\"previouslylistened divgrab\" id=\"thirdcontain\" onwheel=\"scrollHorizontally(event, 'thirdcontain')\">\n" +
            "        <!--<div class=\"soundprevlist\">\n" +
            "            <img alt=\"img\" class=\"Imgsec1\" src=\"../assets/img/sefa.jpg\">\n" +
            "            <div class=\"onhoversec1\">\n" +
            "                <div class=\"artistehover\">\n" +
            "                    Sefa\n" +
            "                </div>\n" +
            "                <div class=\"titrehover\">\n" +
            "                    Muzika (Remix)\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>-->\n" +
            "    </div>\n" +
            "    <div class=\"fog\" id=\"fog\"></div>\n" +
            "    <div class=\"containerpopupplaylist\" id=\"popupcontaincreateplaylist\"></div>"

        renewlistener();

    });
});

var inputField = document.getElementById('inputsearch');
inputField.addEventListener('keydown', function(event) {
    //reload la section search en appuyant sur entrer dans la recherche (affectation de l'html au mainwindow)
    if (event.key === 'Enter' || event.keyCode === 13) {
        var searchText = document.getElementById('inputsearch').value;
        var placeholderText = document.getElementById('inputsearch').getAttribute('placeholder');
        if (searchText !== '' && searchText !== placeholderText) {
            createsectionsearch()
            document.getElementById('Spopup').classList.remove("searchtransi");
            document.getElementById('backpopfilter').classList.remove("searchbacktransi");
        }
    }
});
const tosearch = document.querySelector('.svgsearch');
tosearch.addEventListener('click', () => {
    //reload la section search en cliquant sur la loupe dans la recherche (affectation de l'html au mainwindow)
    var searchText = document.getElementById('inputsearch').value;
    var placeholderText = document.getElementById('inputsearch').getAttribute('placeholder');
    if (searchText !== '' && searchText !== placeholderText) {
        createsectionsearch()
        document.getElementById('Spopup').classList.remove("searchtransi");
        document.getElementById('backpopfilter').classList.remove("searchbacktransi");
    }

});

function createsectionsearch(){
    //creation de la section search (appel dans les deux listener precedents)
    document.getElementById('Mainwindow').innerHTML = "<div class=\"topresultsearch\">\n" +
        "            <div class=\"resultartist\">\n" +
        "                <div class=\"titlesectionresult\">Artistes</div>\n" +
        "                <div class=\"sliderresultartist divgrab\" id=\"resultfirstcontain\" onwheel=\"scrollHorizontally(event, 'resultfirstcontain')\">\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromartist\">\n" +
        "                        <img alt=\"img\" class=\"ImgResult1\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        <div class=\"onhoverResult1\">\n" +
        "                            <div class=\"artistehoversearch\">\n" +
        "                                Sefa\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"fogresultartist\" id=\"fogresultartist\"></div>\n" +
        "            </div>\n" +
        "            <div class=\"resulttitre\">\n" +
        "                <div class=\"titlesectionresult\">Titres</div>\n" +
        "                <div class=\"sliderresulttitres divgrabvertical\" id=\"resultsecondcontain\" onwheel=\"scrollVertically(event, 'resultsecondcontain')\">\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                    <div class=\"showresultfromtitres\">\n" +
        "                        <div class=\"imagesearch\">\n" +
        "                            <div class=\"playbuttononsearch \">\n" +
        "                            </div>\n" +
        "                            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"white\" class=\"bi bi-play-circle\" viewBox=\"0 0 16 16\">\n" +
        "                                <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/>\n" +
        "                                <path d=\"M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z\"/>\n" +
        "                            </svg>\n" +
        "                            <img alt=\"img\" src=\"../assets/img/sefa.jpg\">\n" +
        "                        </div>\n" +
        "                        <div class=\"infolivesearch\">\n" +
        "                            <div class=\"titleinfolivesearch\">Sefa</div>\n" +
        "                            <div class=\"otherinfolivesearch\">Muzika (remix) - unforgiven</div>\n" +
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
        "                            <div class=\"dureelivesearch\">00:10</div>\n" +
        "                            <div class=\"chevronlivesearch\">\n" +
        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#f6f4e5\" class=\"bi bi-chevron-compact-down\" viewBox=\"0 0 16 16\">\n" +
        "                                    <path fill-rule=\"evenodd\" d=\"M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z\"/>\n" +
        "                                </svg>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"fogresulttitre\" id=\"fogresulttitre\"></div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"albumresultsearch\">\n" +
        "            <div class=\"titlesectionresult\">Albums</div>\n" +
        "            <div class=\"sliderresultalbum divgrab\" id=\"resultthirdcontain\" onwheel=\"scrollHorizontally(event, 'resultthirdcontain')\">\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"showresultfromalbum\">\n" +
        "                    <img alt=\"img\" class=\"ImgResult2\" src=\"../assets/img/sefa.jpg\">\n" +
        "                    <div class=\"onhoverResult2\">\n" +
        "                        <div class=\"artistealbumhoversearch\">\n" +
        "                            Sefa\n" +
        "                        </div>\n" +
        "                        <div class=\"albumhoversearch\">\n" +
        "                            Klaagzang\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "            <div class=\"fogresultartist\" id=\"fogresultartistbis\"></div>\n" +
        "        </div>\n" +
        "\n" +
        "\n" +
        "    <div class=\"containerpopupplaylist\" id=\"popupcontaincreateplaylist\"></div>";
    let searchdata= document.getElementById('inputsearch').value
    ajaxRequestMS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=titre');
    ajaxRequestARS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=artiste');
    ajaxRequestALS('GET', '../php/request.php/livesearch?searchdata='+searchdata+'&searchtype=album');
    renewlistener();
}

function renewlistener(){
    //On réinitialise tous les listener contenu dans mainwindow car l'html à été changé
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
    //// empeche aux images d'etre aggripée par la souris (sur les scroll)
    var images = document.querySelectorAll("img");
    images.forEach(function(image) {
        image.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });

        image.addEventListener("mousedown", function(event) {
            event.preventDefault();
        });
    });
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
    document.getElementById('Userr').addEventListener("click", appearaddtracktoplay);
    function appearaddtracktoplay(){
        document.getElementById('popupcontaincreateplaylist').style.zIndex = 15
        document.getElementById('popupcontaincreateplaylist').innerHTML = "<div class=\"backpopupplaylist\"></div>\n" +
            "     <div class=\"popupaddtrackp\">\n" +
            "        <select class=\"menuderoulantaddtop\">\n" +
            "            <option value=\"option1\">Option 1</option>\n" +
            "            <option value=\"option2\">Option 2</option>\n" +
            "            <option value=\"option3\">Option 3</option>\n" +
            "        </select>\n" +
            "        <button class=\"validaddtrack\">Valider</button>\n" +
            "    </div>";

    }
    var showsec1 = document.querySelectorAll(".soundprevlist");
    showsec1.forEach(function(show) {
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
        showplus.addEventListener("click", function() {
            appearaddtracktoplay();
        });
    });
    var showresultfromalbums = document.querySelectorAll(".showresultfromalbum");
    showresultfromalbums.forEach(function(showresultfromartist) {
        var onhoverResult1 = showresultfromartist.querySelector(".onhoverResult2");

        showresultfromartist.addEventListener("mouseover", function() {
            onhoverResult1.style.height = "100%";
        });

        showresultfromartist.addEventListener("mouseout", function() {
            onhoverResult1.style.height = "0";
        });
    });
    var toshowpopinfo = document.querySelectorAll(".chevronlivesearch");
    toshowpopinfo.forEach(function(chevron) {
        chevron.addEventListener("click", function (event) {
            document.getElementById('bigsectionpop').style.zIndex = "7"
            document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
        });
    });
    var toshowpopinfofromplaylist = document.querySelectorAll(".buttontimeandmoremore");
    toshowpopinfofromplaylist.forEach(function(chevron) {
        chevron.addEventListener("click", function (event) {
            document.getElementById('bigsectionpop').style.zIndex = "7"
            document.getElementById('toshowpopupinfo').classList.add('classaddtoshowinfo')
            document.getElementById('Spopup').classList.remove("searchtransi");
            document.getElementById('backpopfilter').classList.remove("searchbacktransi");
        });
    });
    if (document.getElementById('visu').style.zIndex === "-1"){
        hideElementById('fogsearch');
        hideElementById('fogresultartist');
        hideElementById('fog');
        hideElementById('fogresultartistbis');
        hideElementById('fogresulttitre');
    }
    else{
        showElementById('fogsearch');
        showElementById('fogresultartist');
        showElementById('fog');
        showElementById('fogresultartistbis');
        showElementById('fogresulttitre');
    }
    reloadScript();
}
renewlistener()

function reloadScript() {
    //reload du script à chaque changement de page pour refaire les requetes ajax
    var script = document.createElement('script');
    script.src = '../assets/js/sound.js';
    // Supprimez le script existant s'il existe déjà
    var existingScript = document.querySelector('script[src="../assets/js/sound.js"]');
    if (existingScript) {
        existingScript.remove();
    }

    // Ajoutez le nouveau script au document
    document.body.appendChild(script);
}