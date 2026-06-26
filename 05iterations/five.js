const coding = ["js", "python", "java", "c++", "ruby"]

// coding.forEach (function (item) {
//     // console.log(item)
// })

// coding.forEach ((item) => {
//     console.log(item)
// })

// function printitem (item) {
//     console.log(item)
// }

// coding.forEach(printitem)   

const myCoding = [
    { Lnaguage : "javascript",
      languagefilename : "js"
    },
    { Lnaguage : "java",
      languagefilename : "java"
    },
    { Lnaguage : "python",
      languagefilename : "py"
    }
]
myCoding.forEach((item) => {
    console.log(item.languagefilename)
})