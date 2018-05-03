function VerifMail(adresse)  //Fonction qui retourne true si email valide, false sinon
{
	
	valide1 = false;
	for(var j=1;j<(adresse.length);j++) {
            if(adresse.charAt(j)==='@') { //Détection du caractère "@"
                if(j<(adresse.length-4)) {
                    for(var k=j;k<(adresse.length-2);k++) {
                        if(adresse.charAt(k)==='.') valide1=true;   //Détection du caractère "."
                    }
                }
            }
	}
	
	if(valide1===false) { 
            
            return valide1;
	}
        if(valide1===true){
            
            return valide1;
        }
    
}



function validateContactForm(){     // Formulaire de la page contact.html
    var c = document.forms["contactForm"]["email"].value;
    var b = document.forms["contactForm"]["firstname"].value;
    var a = document.forms["contactForm"]["lastname"].value;
    
    if(b!==""){
        if(a!==""){
            if(c!=="" && VerifMail(c)===true){ //Si prénom, nom et email sont validés 
                alert("Message envoyé");        //Tout est OK
            }
            else{
                alert("Veuillez saisir un adresse email valide.");
            }
        }
        else{
            alert("Veuillez saisir un nom valide");
        }
    }else{
        alert("Veuillez saisir un prénom valide");
    }
    
    return false;
}

function validateProjetForm(){          // Formulaire de pageperso.html
    
    var pro1=document.forms["myProjectForm"]["Projet1"].value;  //On récupère le nouveau nom du 1er projet
    document.getElementById("NomProjet1").innerHTML=pro1;       //On remplace l'ancien par le nouveau
    
    var pro2=document.forms["myProjectForm"]["Projet2"].value;
    document.getElementById("NomProjet2").innerHTML=pro2;
    
    return false;       // Permet de ne pas rafraichir la page 
    
}

function validateProAlForm(){    //Formulaire de la page Algo.html
                                    //Formulaire fonctionne mais les données envoyées ne restent qu'une fraction de seconde (voir commentaire Algo.html
    var nameproAl = document.forms["myProAlForm"]["nameProAl"].value;
    document.getElementById("titreproAl").innerHTML = nameproAl;
    
    var textproAl = document.getElementById('descriproAl').value.replace(/\n/g, "<br />");
    document.getElementById("textproAl").innerHTML = textproAl;
    
    return false;
}

function validateForm() { //Formulaire de la page index.html
    
    var x = document.forms["myForm"]["firstname"].value;        //On récupère les nouvelles données saisies
    document.getElementById("prenom").innerHTML = x;            //On remplace les anciennes données par les nouvelles
    
    var y = document.forms["myForm"]["lastname"].value;         //Pareil pour chaque champ
    document.getElementById("nom").innerHTML = y;
    
    var z = document.forms["myForm"]["age"].value;
    document.getElementById("age").innerHTML = z;

    
    var b = document.forms["myForm"]["link"].value;
    document.getElementById("logo").innerHTML = b;
    
    var messagetoSend1 = document.getElementById('p').value.replace(/\n/g, "<br />");
    document.getElementById("descri").innerHTML = messagetoSend1;
    
    var messagetoSend2 = document.getElementById('q').value.replace(/\n/g, "<br />");
    document.getElementById("item1").innerHTML = messagetoSend2;
  
    var messagetoSend3 = document.getElementById('r').value.replace(/\n/g, "<br />");
    document.getElementById("item2").innerHTML = messagetoSend3;
   
    var messagetoSend4 = document.getElementById('l').value.replace(/\n/g, "<br />");
    document.getElementById("f1").innerHTML = messagetoSend4;
    
    var messagetoSend5 = document.getElementById('m').value.replace(/\n/g, "<br />");
    document.getElementById("f2").innerHTML = messagetoSend5;
    
    var messagetoSend6 = document.getElementById('n').value.replace(/\n/g, "<br />");
    document.getElementById("f3").innerHTML = messagetoSend6;
 
    var messagetoSend7 = document.getElementById('o').value.replace(/\n/g, "<br />");
    document.getElementById("skills").innerHTML = messagetoSend7;
    
    return false;
}


        