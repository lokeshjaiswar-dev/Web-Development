const h1 = document.querySelector('h1')
const container = document.querySelector('.container')
const card = document.querySelector('.card')

let counter = 1

card.addEventListener('click', function(){
    const div = document.createElement('div')
    div.classList.add('card')
    div.textContent = counter++
    container.append(div)
})





// function sayHi(){
//     console.log("hiiiiiii")
// }

// h1.onclick = sayHi
// h1.onclick = function(){
//     console.log("lokesh")
// }

// h1.addEventListener('click', function(){
//     console.log("Lokesh")
// })

// h1.addEventListener('click', sayHi)