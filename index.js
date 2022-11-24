var compteur = 1;
var p = 'p';

function getValue() {
    //variable pour les paragraphes
    var p1 = document.getElementById("p").innerHTML;
    var p2 = document.getElementById("p2").innerHTML;
    var p3 = document.getElementById("p3").innerHTML;
    var p4 = document.getElementById("p4").innerHTML;
    var p5 = document.getElementById("p5").innerHTML;
    var p6 = document.getElementById("p6").innerHTML;
    var p7 = document.getElementById("p7").innerHTML;
    var p8 = document.getElementById("p8").innerHTML;
    var p9 = document.getElementById("p9").innerHTML;
 //stockage info
 localStorage.setItem('1', p1);
 localStorage.setItem('2', p2);
 localStorage.setItem('3', p3);
 localStorage.setItem('4', p4);
 localStorage.setItem('5', p5);
 localStorage.setItem('6', p6);
 localStorage.setItem('7', p7);
 localStorage.setItem('8', p8);
 localStorage.setItem('9', p9);     

     // Sélectionner l'élément input et récupérer sa valeur
     compteur = compteur + 1;
     p = 'p' + compteur;
     var input = document.getElementById("in").value;
     var ip = document.getElementById("ip").value;
    
   

    // Afficher la valeur
    alert(input + " a bien été ajouté son addresse ip est " + ip);
   localStorage.setItem(p, ip);
    document.getElementById(p).innerHTML =compteur + " " + input + " " + ip;
}

function delet(){
var reponse = prompt("quelle id voullez vous suprimer");
localStorage.setItem(reponse, "");

}
function reeset() {
    document.getElementById("p2").innerHTML =  localStorage.getItem("2");
    document.getElementById("p3").innerHTML =  localStorage.getItem("3");
    document.getElementById("p4").innerHTML =  localStorage.getItem("4");
    document.getElementById("p5").innerHTML =  localStorage.getItem("5");
    document.getElementById("p6").innerHTML =  localStorage.getItem("6");
    document.getElementById("p7").innerHTML =  localStorage.getItem("7");
    document.getElementById("p8").innerHTML =  localStorage.getItem("8");
    document.getElementById("p9").innerHTML =  localStorage.getItem("9");
}
function enr(){
   var id = document.getElementById("select_id").value;
   var commande = document.getElementById("com").value;
   localStorage.setItem(id, commande);
   alert("la commande de l'" + id + " " + "est " + commande);
}
function affichage(){
    document.getElementById("p2").innerHTML =  localStorage.getItem("2");
    document.getElementById("p3").innerHTML =  localStorage.getItem("3");
    document.getElementById("p4").innerHTML =  localStorage.getItem("4");
    document.getElementById("p5").innerHTML =  localStorage.getItem("5");
    document.getElementById("p6").innerHTML =  localStorage.getItem("6");
    document.getElementById("p7").innerHTML =  localStorage.getItem("7");
    document.getElementById("p8").innerHTML =  localStorage.getItem("8");
    document.getElementById("p9").innerHTML =  localStorage.getItem("9");
}
function requete1(){
var idselectid = document.getElementById("idselect2").value;
var test1 = localStorage.getItem("p" + idselectid);
var idset = localStorage.getItem("id" + idselectid)
alert(test1 + idset)
}

function requete2(){
var idselectid = document.getElementById("idselect2").value;
var test1 = localStorage.getItem("p" + idselectid);
var idset = localStorage.getItem("id" + idselectid)
alert(test1 + idset)
}