const bombaudio = document.querySelector ('#bombaudio')
const start = document.querySelector ('#start')
const aux = document.querySelector ('img')
let explosion

function stopBomb () {
    let mainSrc = aux.getAttribute("src")
    aux.setAttribute("src","./Assests/bomb-off.png")
    clearTimeout(explosion) 
}

start.addEventListener ('click', function() {
    explosion = setTimeout(BUM, 3000);
    console.log(explosion)
    function BUM() {
        bombaudio.play ();
        console.log("BUUUM")
        aux.setAttribute("src","./Assests/explosion.png")
    }

    aux.addEventListener ('click', stopBomb)

})