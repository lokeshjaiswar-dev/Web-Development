const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
const animals = ["Tiger", 'Lion', 'Elephant', 'Bear', 'bear']

evenNumbers.shift() // pehla element nikal dega
evenNumbers.unshift(0) //pehle position pe add karega
const addedArray = evenNumbers.concat(animals)
const index = evenNumbers.indexOf(6)
const included = animals.includes('bear')
evenNumbers.reverse()
const slicedArray = animals.slice(2,4)
const splicedArray = animals.splice(2,0, "Bear", "Leapord", "Cheetah")