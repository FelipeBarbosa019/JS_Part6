const btn = document.querySelector ('#submit')

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    const produto = document.getElementById ('produtos').value
    let img = document.querySelector("img");

    switch (produto) {  
        case "smartphone":
            img.setAttribute("src","../Imagens/smartphone.png");
            break;
        case "notebook":
            img.setAttribute("src","../Imagens/notebook.png");
            break;
        case "tv":
            img.setAttribute("src","../Imagens/tv.png");
            break;
        case "bateria":
            img.setAttribute("src","../Imagens/bateria.png");
            break;
        case "guitarra":
            img.setAttribute("src","../Imagens/guitarra.png");
             break;
    }
      
})
