const lokesh = document.querySelector('.lokesh')
// console.log(lokesh.style)

lokesh.style.color = 'hotpink'
lokesh.style.backgroundColor = 'pink'

function changeToTeal(){
    const li = document.querySelectorAll('li')

    li.forEach((el) => {
        // approach 1        
        // el.style.color = 'teal'
        // el.style.fontFamily = 'cursive'
        // el.style.fontWeight = '700'

        // approach 2
        // el.style.cssText = `
        //     color: teal;
        //     font-family: cursive;
        //     font-weight: 700;
        // `

        // approach 3
        // el.className = 'teal-li'
        // el.setAttribute('class', 'teal-li')

        // approach 4
        el.classList.add('teal-li')

    })
}