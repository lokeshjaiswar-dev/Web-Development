const container = document.querySelector(".container")

let myHTML = ``

for(let i = 1; i <= 100; i++){
    myHTML += `
        <div>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
            <p>${i}</p>
        </div>
    `
}

container.innerHTML = myHTML