const bombaudio = document.querySelector ('#bombaudio')
const start = document.querySelector ('#start')
const aux = document.querySelector ('img')


start.addEventListener ('click', function() {
    const explosion = setTimeout(BUM, 3000);
    console.log(explosion)
    function BUM() {
        // bombaudio.play ();
        console.log("BUUUM")
    }

    // aux.onclick = function() {
    //     let mainSrc = aux.getAttribute("src")
    //     if (mainSrc === "./Assests/bomb.png") {
    //         aux.setAttribute("src","./Assests/bomb-off.png")
    //         clearTimeout(BUM)
    //     } else {
    //         aux.setAttribute ("src","./Assests/bomb.png" )
    //     }
    // }

})

// aux.addEventListener ('click', function() {
//     clearTimeout(BUM)
//     img.setAttribute("src","./Assests/bomb-off.png");
// })