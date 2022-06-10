const start = document.querySelector ('#btnstart')
const regressivetext = document.getElementById("regressive");
let contSec
let contMin
let aux
let type = "Armar"

function regressive () {
    regressivetext.textContent = `Restam: ${contMin}:${contSec}`
    contSec = contSec -1 
    if ((contSec ==-1) && (contMin == 0)){
        clearInterval (aux)
        alarm.play ();
    }
    else if (contSec == -1) {
         contMin = contMin - 1;
         contSec = 59
    }   
}

function init () {
    contSec = document.querySelector ('#seconds').value
    contMin = document.querySelector ('#minutes').value
    if ((contSec=="Segundos") || (contMin == "Minutos")) {
        alert ("Insira valores nos campos Minutos e Segundos.")
    }
    else {
        aux = setInterval(regressive, 1000);
        start.style.backgroundColor = "#ff0000";
        start.textContent = "Desarmar" 
        type = "Desarmar"
    }
}

function pause () {
    clearInterval (aux)
    alarm.pause ();
    start.style.backgroundColor = "#39b12a";
    start.textContent = "Armar"
    type = "Armar"
    regressivetext.textContent = ``
}

function change () {
    if (type === "Desarmar"){
        pause()
        return
    }

    else {
        init()
        return
    }
}

    start.addEventListener ("click", change)


