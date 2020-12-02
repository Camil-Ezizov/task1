function gonder() {
    var name=document.getElementById('personName').value;
    var lastName=document.getElementById('personLastname').value;
    var birthday=document.getElementById('date').value;
    var nomre=document.getElementById('number').value;

    if ( name.length==0 || lastName.length==0 || birthday.length==0 || nomre.length<10){
        document.getElementById("yaz").innerHTML = "Zehmet olmasa xanalari tam doldurun doldurun";
    }
     
    

    var eMail=document.getElementById('emailim').value;
    
    var seperated=eMail.split("");
    for(i=0; i<seperated.length;i++){
    if(seperated[i] == '@'){
        document.getElementById("camil").innerHTML = "nnnnnnnnnnndogru edirem yaziram";
    }else{
        document.getElementById("camil").innerHTML = " yalnis"; 
    }
   
    }
    
}
