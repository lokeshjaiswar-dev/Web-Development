const allJaiswar = document.querySelectorAll('[jaiswar]')
const Lokesh = document.querySelector('[jaiswar="Lokesh"]')

// accessing the attribute without getAttribute
console.log(Lokesh.attributes.jaiswar.value)

// Setting the attribute without setAttribute
Lokesh.attributes.jaiswar.value = 'Pooja'

// after changing the attribute, then changing the content of element
document.querySelector('[jaiswar="Pooja"]').innerText = 'My name is Pooja'

// now using the method given by the dom
document.querySelector('[jaiswar="Pooja"]').getAttribute('jaiswar')

// now setting using the method of dom
document.querySelector('[jaiswar="Pooja"]').setAttribute('title', 'Hello World')
