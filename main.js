'use strict';

document.getElementById('bola').addEventListener("click", chooseName);
let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
let selected = [];

function chooseName(){
    let n = names.length;
    let i = Math.floor(Math.random()*n);
    let selectedName = names[i];
    document.getElementById("contestantName").innerHTML = selectedName;

    names.splice(i, 1);       
    selected.push("<li>" + selectedName + "</li>"); 
    document.getElementById("selectedNames").innerHTML = selected.join('');
    n--;

    if (n < 1){
        names = selected;
        selected = [];
    }
    
}




