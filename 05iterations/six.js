// const coding = ["js", "python", "java", "c++", "ruby"]

// const value =coding.forEach((item) => {
//     // console.log(item)
//     return item
// })
// console.log(value)

const muNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums =muNum.filter((num) => num > 5)
// const newnums = muNum.filter((num) => { return num > 5
    
// })
// console.log(newnums)
 const newnums = []
 muNum.forEach ((num) => {
    if (num > 5) {
        newnums.push(num)
    } })
    console.log(newnums)