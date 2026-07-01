// const addSprites = (sprite = 10) => {
//     const img = document.querySelector('img')

//     for(let i = 2; i <= sprite; i++){
    
//         const clonedImg = img.cloneNode()
//         clonedImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//         container.append(clonedImg)

//     }
// }

// const addSprites = (sprite = 10) => {
    
    //     for (let i = 2; i <= sprite; i++) {
        
    //         const img = document.createElement('img')
    //         img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    //         container.append(img)
    
    //     }
    
    // }
    

// const h1 = document.querySelector('h1')
// const container = document.querySelector(".container")
// const divInsideContainer = document.querySelector('.container div')

// for(let i = 2; i <= 100; i++){
//     const divElement = document.createElement('div')

//     const myHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     `
//     divElement.innerHTML = myHTML

//     container.append(divElement)
// }

// for(let i = 2; i <= 100; i++){
//     const divElement = document.createElement('div')

//     const img = document.createElement('img')
//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

//     const p = document.createElement('p')
//     p.innerText = i

//     divElement.append(img, p)
//     container.append(divElement)
// }


// for(let i = 2; i <= 100; i++){
//     const divCopy = divInsideContainer.cloneNode(true)
//     const [img, p] = divCopy.children

//     // console.log(`Printing for ${i}`);
//     // console.log(img)
//     // console.log(p)

//     img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//     p.innerText = i

//     divCopy.append(img, p)
//     container.append(divCopy)
// }

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






