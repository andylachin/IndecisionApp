// const add = (a,b) => {
//   console.log(arguments)
//   return a + b
// }

// console.log(add(55,1))

const multiplier = {
  numbers: [4,7,8,9],
  multiplyBy: 8,
  multiply(){
   return this.numbers.map((number)=>number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())