const user2 = {
    firstName: "Lokesh",
    lastName: "Jaiswar",
    pata: {
        city: "Mumbai",
        state: 'Maharashtra',
        pincode: 400086,
        moreDetails: {
            population: 23424234,
            area: '233 sq km'
        }
    },
    age: 21,
    isGraduate: true
}

// Object.seal(user2)
Object.freeze(user2)

const brotherName = "Jayesh"