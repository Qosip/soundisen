
var progressRange = document.getElementById("rang2");
const musicPlayer = document.getElementById("musicPlayer");

const vol = document.getElementById("rangvol");
vol.addEventListener('mouseup', () => {
    //listener que sur up et pas sur change car sinon la valeur n'est pas defnie
    changevol(vol.value)
});
function changevol(val){
    //changement du volume et chagement du svg en fonction
    if (val <= 0){
        val = 0.01
    }
    if (!isNaN(val) && isFinite(val)) {
        musicPlayer.volume = val/100;
    }
    if (val>66.6){
        document.getElementById('iconvolume').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#4a4a79\" class=\"bi bi-volume-up-fill\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z\"/>\n" +
            "  <path d=\"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z\"/>\n" +
            "  <path d=\"M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zM6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z\"/>\n" +
            "</svg>"
    }
    else if (val>33.3){
        document.getElementById('iconvolume').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#4a4a79\" class=\"bi bi-volume-down-fill\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zm3.025 4a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z\"/>\n" +
            "</svg>"
    }
    else{
        document.getElementById('iconvolume').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"#4a4a79\" class=\"bi bi-volume-off-fill\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z\"/>\n" +
            "</svg>"
    }
}
const thumbBIS = document.querySelector('.t2');
const progressBIS = document.querySelector('.p2');
thumbBIS.style.width = '0%'
progressBIS.style.left = `0%`;
const monslidtime = document.getElementById('slid')
function changeprogress(val){
    //click sur la barre de progression pour changer l'avancement dans la musique
    progressInSeconds = (val / 100) * musicPlayer.duration;
    musicPlayer.currentTime = progressInSeconds;
}
musicPlayer.addEventListener("timeupdate", function() {
    //update dans les timer sous la barre de la musique + on gère le passage à la musique suivante automatiquement
    progressInPercentage = (musicPlayer.currentTime / musicPlayer.duration) * 100;
    progressRange.value = progressInPercentage;
    if (musicPlayer.currentTime >= musicPlayer.duration){
        event.preventDefault();
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
        /*document.getElementById('tri').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-triangle-fill\" viewBox=\"0 0 16 16\">\n" +
            "                        <path fill-rule=\"evenodd\" d=\"M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z\"/>\n" +
            "                    </svg>"


        document.getElementById('tri').style.transitionDuration = "0.2s"
        document.getElementById('tri').style.left = "calc(50% - 0.75rem + 0.1rem)"
        document.getElementById('tri').style.transform = "rotate(0deg)"*/
    }
    var secondtime = Math.floor(musicPlayer.currentTime%60.0)
    var mintime = Math.floor(musicPlayer.currentTime/60.0)
    if (secondtime<10){
        secondtime = "0"+secondtime
    }
    if (mintime<10){
        mintime = "0"+mintime
    }
    var secondduration = Math.floor(musicPlayer.duration%60.0)
    var minduration = Math.floor(musicPlayer.duration/60.0)
    if (secondduration<10){
        secondduration = "0"+secondduration
    }
    if (minduration<10){
        minduration = "0"+minduration
    }
    document.getElementById('currtime').innerText = mintime +":"+secondtime
    document.getElementById('tottime').innerText = minduration+":"+secondduration

    const percent = (progressRange.value - monslidtime.min) / (monslidtime.max - monslidtime.min) * 100;
    progressBIS.style.width = `${percent}%`;
    thumbBIS.style.left = `${percent}%`;
});
var playorpause = document.getElementById('rd')
playorpause.addEventListener("click", function() {
    //affectation du bouton play/pause au player avec modification du svg
    var isPlaying = !musicPlayer.paused;

    if (isPlaying) {
        musicPlayer.pause()
        document.getElementById('tri').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-triangle-fill\" viewBox=\"0 0 16 16\">\n" +
            "                        <path fill-rule=\"evenodd\" d=\"M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z\"/>\n" +
            "                    </svg>"


        document.getElementById('tri').style.transitionDuration = "0.2s"
        document.getElementById('tri').style.left = "calc(50% - 0.75rem + 0.1rem)"
        document.getElementById('tri').style.transform = "rotate(0deg)"


    } else if(!isPlaying) {
        musicPlayer.play()
        document.getElementById('tri').innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-pause-fill\" viewBox=\"0 0 16 16\">\n" +
            "  <path d=\"M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z\"/>\n" +
            "</svg>"
        document.getElementById('tri').style.transitionDuration = "0.2s"
        document.getElementById('tri').style.left = "calc(50% - 0.75rem)"
        document.getElementById('tri').style.transform = "rotate(-90deg)"
    }
});

