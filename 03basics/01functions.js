
function sayMyname(){
    console.log("A")
    console.log("k")
    console.log("a")
    console.log("s")
    console.log("h")
}
//sayMyname()


// function addTwonum(num1,num2){
//     console.log(num1+num2)
// }
// const result = addTwonum(3,5)
// console.log("result:",result)

function addTwonum(num1,num2){
    let result = num1+num2
    return result
}
const result = addTwonum(3,5)
//console.log("result:",result)

// function loginUsermessage(username){
//     //if(username===undefined)
//     if(!username){
//         console.log("please enter the username")
//         return
//     }
//     return `${username} just logged in`
//}
//console.log(loginUsermessage())
const user ={
    username:"Akash",
    price:"1000"
}

function handleobjects(anyobjects){
    console.log(`username is ${anyobjects.username} and price is${anyobjects.price}`)
}
//handleobjects(user)
// handleobjects( {
//     username:"dip",
//     price:78907
// })

const myarray=[23,100,4000,5454,765]

function returnSecondvalue(getarray){
    return getarray
}
console.log(returnSecondvalue(myarray))