var email;
document.getElementById('insc').addEventListener("click", showinsc);

function checkInputs() {
    //fonction qui verifie si les deux password sont identiques
    var value1 = document.getElementById('vmdp').value;
    var value2 = document.getElementById('vvmdp').value;

    if (value1 === value2 && value1.length>=6) {
        document.getElementById('idtoerror').classList.add("showerror")
        document.getElementById('txttoerror').innerText = "Valid : Les mots de passes sont identiques"
        toleaveanim()
        return true
    } else if (value1!=='' && value1.length<6){
        document.getElementById('idtoerror').classList.add("showerror")
        document.getElementById('txttoerror').innerText = "Erreur : Les mots de passes sont trop courts"
        toleaveanim()
        return false
    }
    else if (value1!==''){
        document.getElementById('idtoerror').classList.add("showerror")
        document.getElementById('txttoerror').innerText = "Erreur : Les mots de passes ne sont pas identiques"
        toleaveanim()
        return false
    }
    else {
        document.getElementById('idtoerror').classList.add("showerror")
        document.getElementById('txttoerror').innerText = "Erreur : Les mots de passes ne peuvent pas etre vides"
        toleaveanim()
        return false
    }
}
function showinsc() {
    //affiche la partie inscription quand on clique sur le bouton inscription
    document.getElementById('txtcnx').innerHTML = "Inscrivez-vous"
    document.getElementById("log").innerHTML = "<div class=\"nom\">\n" +
        "            <input placeholder=\"Nom\" id=\"nom\">\n" +
        "        </div>\n" +
        "        <div class=\"prenom\" >\n" +
        "            <input placeholder=\"Prénom\" id=\"prenom\">\n" +
        "        </div>\n" +
        "        <div class=\"date_naissance\" >\n" +
        "            <input type=\"date\" placeholder=\"Date de Naissance\" id=\"date_naissance\">\n" +
        "        </div>\n" +
        "        <div class=\"mail\" >\n" +
        "            <input placeholder=\"Mail\" id=\"mail\">\n" +
        "        </div>\n" +
        "        <div class=\"Vmdp\" >\n" +
        "            <input placeholder=\"Mot de passe\" type=\"password\" id=\"vmdp\">\n" +
        "        </div>\n" +
        "        <div class=\"V2mdp\">\n" +
        "            <input placeholder=\"Vérification mot de passe\" id=\"vvmdp\" type=\"password\">\n" +
        "        </div>\n" +
        "        <button class=\"retour\" id=\"back\">Retour</button>\n" +
        "        <button class=\"validinsc\" id=\"vinsc\">Valider</button>";
    document.getElementById('log').style.height = "20.4rem"
    document.getElementById('back').addEventListener("click", showConnect);
    renewlistenvinsc();
}


function showConnect(){
    //affiche la section connexion sur appuie du bouton retour
    document.getElementById('txtcnx').innerHTML = "Connectez-vous"
    document.getElementById("log").innerHTML = "<div class=\"mail\">\n" +
        "            <input placeholder=\"Mail\">\n" +
        "        </div>\n" +
        "        <div class=\"mdp\">\n" +
        "            <input placeholder=\"Mot de passe\" type=\"password\">\n" +
        "        </div>\n" +
        "        <button class=\"connexion\" id=\"cnx\">Connexion</button>\n" +
        "        <button class=\"inscription\" id=\"insc\">Inscription</button>"
    document.getElementById('log').style.height = "12rem"
    document.getElementById('insc').addEventListener("click", showinsc);
    renewlisten();
}

let bouton = document.getElementById('cnx');
bouton.onclick = function() {
    //bouton de connexion avec la requete ajax
    email = $('#email').val();
    let password = $('#passwd').val();
    let data = {
        email: email,
        password: password
    }; 
    ajaxRequest('POST', '../../php/request.php/login', connexion, data);
};

function connexion(data){
    //check si la connexion est reussie
    if (data.success === true ) {
        window.location.href="page/accueil.html?login="+email;
    } else if (data.success === false ) {
        if (data.code_err === 2){
            document.getElementById('idtoerror').classList.add("showerror")
            document.getElementById('txttoerror').innerText = "Erreur : Email ou mot de passe incorrect"
            toleaveanim()
        }
        else if (data.code_err === 1){
            document.getElementById('idtoerror').classList.add("showerror")
            document.getElementById('txttoerror').innerText = "Erreur : Veuillez saisir votre email et votre mot de passe"
            toleaveanim()
        }
    }
}

function inscription(data){
    //check si l'inscription est réussit
    //console.log("email : "+email)
    if(data.success === true){
        window.location.href="page/accueil.html?login="+email;
    } else if (data.success === false){
        if (data.code_err === 1){
            document.getElementById('idtoerror').classList.add("showerror")
            document.getElementById('txttoerror').innerText = "Erreur : Veuillez saisir tous les champs"
            toleaveanim()
        } else if (data.code_err === 3){
            document.getElementById('idtoerror').classList.add("showerror")
            document.getElementById('txttoerror').innerText = "Erreur : Email déjà utilisé"
            toleaveanim()
        }
    }
}

function toleaveanim(){
    //gère l'animation du message d'erreur
    const divElement = document.getElementById('idtoerror');
    divElement.addEventListener('animationend', () => {
        divElement.classList.remove('showerror');
    });
}


function renewlisten(){
    //réconnecte les listener car une partie de l'html a été modifiée
    let bouton = document.getElementById('cnx');

    bouton.onclick = function() {
        window.location.href="page/accueil.html?login="+email;
    };
}
function renewlistenvinsc(){
    //réconnecte les listener car une partie de l'html a été modifiée
    let bouton2 = document.getElementById('vinsc');
    bouton2.onclick = function() {
        val = checkInputs()
        if (val){
            $("#vinsc").click(function() {
                let nom = $('#nom').val();
                let prenom = $('#prenom').val();
                let date_naissance = $('#date_naissance').val();
                email = $('#mail').val();
                let password = $('#vmdp').val();
                let data = {
                    nom: nom,
                    prenom: prenom,
                    date_naissance: date_naissance,
                    email: email,
                    password: password
                };
                ajaxRequest('POST', '../../php/request.php/inscription', inscription, data);
            });
        }
        // window.location.href="page/accueil.html";
    };
}
class BubbleManager {
    //courte animation sur les bulles violettes en fond au chargement de la page
    constructor() {
        this.bubbles = $('.bubble');
    }
    init() {
        this.animateExistingBubbles();
    }
    animateBubble(bubble) {
        let startX = parseInt(bubble.css('left'), 10);
        let startY = parseInt(bubble.css('top'), 10);
        let endX = this.getRandomValue(startX - 200, startX + 200);
        let endY = this.getRandomValue(startY - 200, startY + 200);
        let duration = this.getRandomValue(3000, 8000);
        bubble.animate({
            left: endX + 'px',
            top: endY + 'px',
        }, {
            duration: duration,
        });
    }
    animateExistingBubbles() {
        this.bubbles.each((index, bubble) => {
            this.animateBubble($(bubble));
        });
    }
    getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    }
}
let bubbleManager = new BubbleManager();
bubbleManager.init();