console.log("JavaScript is working!");

function greet(name) {
  return `Hello, ${name}!`;
}


console.log(greet("Trương Lộc Thiên"));

const x = 1
let y = 5

console.log(x, y)   // 1 5 are printed
y += 10
console.log(x, y)   // 1 15 are printed
y = 'sometext'
// console.log(x, y)   // 1 sometext are printed
// x = 4               // causes an error


const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})                    


value => {
    console.log(value)
  }

