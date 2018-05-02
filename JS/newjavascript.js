function VerifMail(adresse)
{
	
	valide1 = false;
	for(var j=1;j<(adresse.length);j++) {
            if(adresse.charAt(j)=='@') {
                if(j<(adresse.length-4)) {
                    for(var k=j;k<(adresse.length-2);k++) {
                        if(adresse.charAt(k)=='.') valide1=true;
                    }
                }
            }
	}
	
	if(valide1==false) { 
            alert("Veuillez saisir une adresse email valide.");
            return valide1;
	}
        if(valide1==true){
            alert("Message envoyé.");
            return valide1;
        }
    
}

function validateContactForm(){
    var c = document.forms["contactForm"]["email"].value;
    VerifMail(c);
    return false;
}



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


        