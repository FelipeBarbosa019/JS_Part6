const start = document.querySelector ('#btnstart')
const regressivetext = document.getElementById("regressive");
let contSec
let contMin
let aux

function regressive () {
    start.addEventListener ('click', function() {
        start.addEventListener ('click', pause)
    })   
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

function pause () {
    clearInterval (aux)
    alarm.pause  ();
    document.getElementById("btnstart").style.backgroundColor = "#39b12a";
    start.textContent = "Armar"
}

start.addEventListener ('click', function() {
        contSec = document.querySelector ('#seconds').value
        contMin = document.querySelector ('#minutes').value
        aux = setInterval(regressive, 1000);
        document.getElementById("btnstart").style.backgroundColor = "#ff0000";
        start.textContent = "Desarmar"
})

start.addEventListener ('click', function() {
    start.addEventListener ('click', pause)
})      