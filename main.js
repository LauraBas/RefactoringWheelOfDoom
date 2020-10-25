'use strict';

window.onload = function() {
    document.getElementById('bola').addEventListener("click", chooseName);
    let names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
    let selected = [];
    let audio = new Audio('audio/witch.mp3');
    
    function chooseName(){
        let selectedName = takeRandomName();   
        printInBall(selectedName)
        addToSelectedNames(selectedName)
        if (namesIsEmpty()) {
            resetCannoliOfDoom()
        }
    }
    function takeRandomName() {
        let i = getRandomIndex();
        return names.splice(i, 1); 
    }
    function printInBall(name) {
        audio.play();
        document.getElementById("contestantName").innerHTML = name;
    }
    function addToSelectedNames(selectedName){
        selected.push("<li>" + selectedName + "</li>"); 
        document.getElementById("selectedNames").innerHTML = selected.join('');
    }
    function namesIsEmpty() {
        return names.length < 1
    }           
    function resetCannoliOfDoom(){
        names = ["Lucas","Laura","Estefanie","Mercedes","Giacomo","Gabri","Giselle","Laura R","Quim","Olga","Moi","Jose","Jackson","Carmen","Alejandra","Lorena","Loredana","Alvaro","Rene","MaxPower","Isma","Jorge","Sergi P","Vanessa"];
        selected = [];        
    }
    function getRandomIndex() {
        return Math.floor(Math.random() * names.length)
    }    
}