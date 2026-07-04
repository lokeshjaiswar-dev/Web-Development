const usernameInput = document.querySelector('#username')

// usernameInput.addEventListener('click', function(){
//     console.log('clicked')
// })

// usernameInput.addEventListener('dblclick', function(e){
//     console.log(e);
//     console.log('double clicked')
// })

// usernameInput.addEventListener('input', function(e){
//     // console.log("Data",e.data);
//     console.log('Value',e.target.value)
//     // console.log('input event triggered')
// })

// usernameInput.addEventListener('change', function(e){
    
//     console.log('Value',e.target.value)

// })

usernameInput.addEventListener('focus', function(e){

    console.log('focus',e.target.value)

})

usernameInput.addEventListener('blur', function(e){

    console.log('blur',e.target.value)

})

const form = document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log('konsa bhi event laga sakte hai par mainly submit event lagate hai')
})
