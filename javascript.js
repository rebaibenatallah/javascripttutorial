// 1. Create a variable , x and set its value 
let x = 12
// 2. Log the x variable to the console
console.log('x =',x)
// 3. Show the x variable to the html page 
document.getElementById('count-el').innerHTML= x
// Basic mathematical operations
let a = 5
let b = 11
// let c = a + b
console.log('a + b = ',a+b)
console.log('a * b = ',a*b)
console.log('a / b = ',a/b)
// Reassigning and incrementing
let i = 5
console.log( 'i initialize :' ,i)
i = 3
console.log( 'i reassiging :' ,i)
i = i+1
console.log( 'i incrementing :' ,i)
// Adding a button
let count = 0
function increment() {
    count = count +1
    document.getElementById('count-el').innerHTML = count 
}

