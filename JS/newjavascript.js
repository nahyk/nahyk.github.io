function VerifMail(adresse)
{
	
	valide1 = false;
	for(var j=1;j<(adresse.length);j++) {
            if(adresse.charAt(j)==='@') {
                if(j<(adresse.length-4)) {
                    for(var k=j;k<(adresse.length-2);k++) {
                        if(adresse.charAt(k)==='.') valide1=true;
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



function validateContactForm(){
    var c = document.forms["contactForm"]["email"].value;
    var b = document.forms["contactForm"]["firstname"].value;
    var a = document.forms["contactForm"]["lastname"].value;
    
    if(b!==""){
        if(a!==""){
            if(c!=="" && VerifMail(c)===true){
                alert("Message envoyé");
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

function validateProjetForm(){
    
    var pro1=document.forms["myProjectForm"]["Projet1"].value;
    document.getElementById("NomProjet1").innerHTML=pro1;
    
    var pro2=document.forms["myProjectForm"]["Projet2"].value;
    document.getElementById("NomProjet2").innerHTML=pro2;
    
    return false;
}

/*function validateProjet1Form(){       Pareil le return false ne fonctionne pas ...
    
    var namepro1=document.forms["myProject1Form"]["nameProjet1"].value;
    document.getElementsById("titrepro1").innerHTML=namepro1;
    
    var textpro1 = document.getElementById('Projet2').value.replace(/\n/g, "<br />");
    document.getElementById("descriproject1").innerHTML = textpro1;
    
    return false;
}*/

/*function validateProjet2Form(){           Même avec le return false ça m'envoie Err_Empty_Response
    
    var namepro2 = document.forms["myProject2Form"]["nameProject1"].value;
    document.getElementById("prenom").innerHTML = namepro2;
    
    var textpro2 = document.getElementById('descriproject1').value.replace(/\n/g, "<br />");
    document.getElementById("textpro1").innerHTML = textpro2;
    
    return false;
}*/

function validateForm() {
    
    var x = document.forms["myForm"]["firstname"].value;
    document.getElementById("prenom").innerHTML = x;
    
    var y = document.forms["myForm"]["lastname"].value;
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


        