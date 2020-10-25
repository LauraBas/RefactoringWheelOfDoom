'use strict';

document.getElementById('bola').addEventListener("click", chooseName);
let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
let selected = [];
let audio = new Audio('audio/witch.mp3');

function chooseName(){
    let n = names.length;
    let i = Math.floor(Math.random()*n);
    let selectedName = names[i];
    audio.play();
    document.getElementById("contestantName").innerHTML = selectedName;
    names.splice(i, 1);       
    n--;
    addSelectedNameToList(selectedName)
    resetCannoliOfDoom(n)
    
}
function addSelectedNameToList(selectedName){
    selected.push("<li>" + selectedName + "</li>"); 
    document.getElementById("selectedNames").innerHTML = selected.join('');
}

function resetCannoliOfDoom(namesLength){
    if(namesLength < 1){
        names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
        selected = [];
    }
}




