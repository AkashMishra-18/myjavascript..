//array
const myArray = [1,2,3,2,4,5]
const myHeros = ["krish", "sktiman"]

const myArr2 = new Array(8,9,4,5,34)
//console.log(myArray[1]);

//Array method ++++++++++++++++++++++
// 
// myArray.unshift(9)
// myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(2))
// console.log(myArray.indexOf(5))

// const newarray = myArray.join()
// console.log(typeof(newarray))

//slice and splice

console.log("A  ", myArray)

const myn1 = myArray.slice(1,3)
console.log(myn1)

console.log("B ", myArray)
const myn2 = myArray.splice(1,3);
console.log(myn2)

console.log("c ", myArray)
console.log(myn2)
