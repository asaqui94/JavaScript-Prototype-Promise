// Question 1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for(let i=0; i < Object.keys(person3).length; i++){
    console.log(Object.keys(person3)[i])
}

// Question 2

function People(name, age){
    this.name = name;
    this.age = age;
    this.printInfo = (nationality) => {
        return `${name} is ${nationality} and is ${age} years old.`
    }
    this.addAge = (number) => {
        return `Arpi will be ${arpi.age + number} in ${number} years`
}

let arpi = new People('Arpi', 26)
console.log(arpi.printInfo('American'))
let isra = new People('Isra', 29)
console.log(isra.printInfo('Spanish'))
console.log(arpi.addAge(3))

// Question 3
// const checkLength = (string) => {
//     return new Promise( (resolve, reject)  => {
//         if(string.length > 10){
//             resolve(true)
//         }else{
//             reject(false)
//         } 
//     })
// }

// checkLength('Delicious')
// .then ( (result) => {
//     console.log(`Big word ${result}`)
// })

const checkLength = (str) => {
    return new Promise( (resolve, reject) => {
        if(str.length < 10){
            resolve(false)
        }else{
            reject(true)
        }
    })
}

checkLength('Delicious')
.then( (result) => {
    console.log('Small number')
} )

checkLength('Scrumptious')
.catch( (result) => {
    console.log('Big Word')
} )
