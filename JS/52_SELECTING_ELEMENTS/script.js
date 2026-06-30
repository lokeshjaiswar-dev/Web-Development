// const images = document.images
// const li = document.getElementsByTagName('li')
// const img = document.getElementsByClassName('css-img')
// const idSelector = document.getElementById('css-img')

// // industry mai jo sabse jyada use hota hai
// const selector = document.querySelector('li') 
// const allSelector = document.querySelectorAll('li')
// const firstLi = document.querySelector("ul li")

// I added three img now i would create a script(function) when i will execute the script all the images should change.

const img = [
    "https://plus.unsplash.com/premium_photo-1781902600064-71b1322f6da6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1777715329812-2929a84636ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D",
    'https://images.unsplash.com/photo-1779792829852-92a3e1e051b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D'
]

const changeImages = () => {
    const images = document.querySelectorAll('.css-img')

    images.forEach((imgTag,i) => {
        // console.log(i)
        // console.log(imgTag)

        // console.log(img.src)
        imgTag.src = img[i]

    })
}