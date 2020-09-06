function retourne(srt){
var texte = srt;
var size = texte.length;
var ret = "";
for(var j = size - 1; j >= 0; j--)
    ret = ret + texte[j];
return ret;   
}
retourne('Patrick');

 // ES6 : Arrow function

retourne = (str) =>{
 var size = str.length;
 var ret = " ";
 for( var j = size - 1; j >= 0; j--)
    ret = ret + str[j];
 return ret;
}
 retourne('Patrick'); 
