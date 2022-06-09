const btn = document.querySelector ('#submit')
const text = document.querySelector ('h3')
let weekday
let monthtext

btn.addEventListener ("click", function(e) {
    e.preventDefault()
    let date = document.getElementById ('date').value
    const infos = new Date(date);
    const day = String(infos.getDate() + 1).padStart(2,'0')
    const month = String(infos.getMonth() + 1).padStart(2,'0')
    const year = infos.getFullYear()
    const dayw = infos.getDay()
    switch (dayw) {
        case 0:
            weekday = "Segunda"
            break;
        case 1:
            weekday = "Terça"
            break;
        case 2:
            weekday = "Quarta"
            break;
        case 3:
            weekday = "Quinta"
            break;
        case 4:
            weekday = "Sexta"
            break;
        case 5:
            weekday = "Sabado"
            break;
        case 6:
            weekday = "Domingo"
    }
    const monthnumber = Number(infos.getMonth() + 1)
    switch (monthnumber) {
        case 1:
            monthtext = "Janeiro"
            break;
        case 2:
            monthtext = "Fevereiro"
            break;
        case 3:
            monthtext = "Março"
            break;
        case 4:
            monthtext = "Abril"
            break;
        case 5:
            monthtext = "Maio"
            break;
        case 6:
            monthtext = "Junho"
        case 7:
            monthtext = "Julho"
            break;
        case 8:
            monthtext = "Agosto"
            break;
        case 9:
            monthtext = "Setembro"
            break;
        case 10:
            monthtext = "Outubro"
            break;
        case 11:
            monthtext = "Novembro"
            break;
        case 12:
            monthtext = "Dezembro"
    }
    const time = infos.getTime ()
    

    text.textContent = `i. Dia: ${day}; 
    ii. Mês: ${month};
    iii. Ano: ${year};
    iv. Dia da semana: ${weekday};
    v. Mês: ${monthtext} ;
    vi. Valor da data em milissegundos: ${time} .`   
})

