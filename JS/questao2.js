const bombaudio = document.querySelector ('#bombaudio')
const start = document.querySelector ('#start')
const aux = document.querySelector ('#bomb')
const regressivetext = document.getElementById("regressive");
let explosion
let cont = 60

function stopBomb () {
    let mainSrc = aux.getAttribute("src")
    aux.setAttribute("src","../Assests/bomb-off.png")
    clearInterval(explosion) 
}

function regressive () {
    cont = cont -1
    regressivetext.textContent = `Contagem regressiva: ${cont}`
    timer.play ();
    if (cont == 0) {
            bombaudio.play ();
            aux.setAttribute("src","../Assests/explosion.png")
            clearInterval (explosion)
    }
}

start.addEventListener ('click', function() {
    explosion = setInterval(regressive, 1000);
    aux.addEventListener ('click', stopBomb)
})

// setinter(BUM, 10000);