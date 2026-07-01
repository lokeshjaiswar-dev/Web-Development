const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')

function addCards(cardNo = 10){
    for(let i = 2; i <= cardNo; i++){
        const cloneCard = card.cloneNode()
        cloneCard.innerText = i
        container.appendChild(cloneCard)
    }
}