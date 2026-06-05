
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

function loginUsermessage(username){
    //if(username===undefined)
    if(!username){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUsermessage())

