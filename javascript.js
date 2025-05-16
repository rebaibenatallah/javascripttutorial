// 1. Create a variable , x and set its value 
let x = 0
// ==========================================
// 2. Log the x variable to the console
console.log('x =',x)
// ====================================
// 3. Show the x variable to the html page 
document.getElementById('count-el').innerHTML= x
// =======================================
// Basic mathematical operations
let a = 5
let b = 11
console.log('a + b = ',a+b)
console.log('a * b = ',a*b)
console.log('a / b = ',a/b)
// order of operations
document.getElementById('order-operations').innerHTML = ' order of operations (12 +3)*10 :'+ (12+3)*10
// Reassigning and incrementing
let i = 5
console.log( 'i initialize :' ,i)
i = 3
console.log( 'i reassiging :' ,i)
i = i+1
console.log( 'i incrementing :' ,i)
// math round function
let math_round = Math.round(3.452)
document.getElementById('math-round').innerHTML = 'Math.round(3.452) expected output :' + math_round
// Adding a button to incrementing h2
let count = parseInt(document.getElementById("count-el").innerHTML)
function increment() {
  count = count +1
  document.getElementById('count-el').innerHTML = count  
  // create a popup 
  if(count == 14){
    alert('hello 14')
  }
}
// ================================= math opertations
// Strings 'rext'==================
// alert('good' + 'morning')
console.log(typeof(2))
console.log(typeof('hello'))
// when calculating money =========
console.log('$'+(20.95+7.99))
// 1. Calculate in cents
// 2. Convert back to dollar
console.log('$'+(2095+799)/100)
// 3 Ways to create astring
// 1. '...'
// 2. "..."
// 3. `...` = template strings (Interpolation): insert value directly into a string , Multi line string
console.log('hello!')
console.log("i'm learning JavaScript")
console.log('I\'m learning javascript') // \' it's singl quote that is just text
console.log(`Items(${3+2}):$${(2095+799)/100}`)
console.log(`some
text 
created 
here`)
// charater :
// 1. letter (a,b,c)
// 2. number(1.2.3)
// 3. symbol(!,@,#)
// 4. escape character \' \" \n
console.log('some\ntext')
// ================================
// HTML:creates the content,CSS:changes the appearance,JavaScript:makes it intractive 


