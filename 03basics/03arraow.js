const user ={
    username:"Akash",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`)
        //console.log(this)

    }
}
// user.welcomemessage()
// user.username ="dip"
// user.welcomemessage()
//console.log(this)
// function ak(){
//     let username = "akash"
//     console.log(this.username)// in function we cant access with this only this is used in objects
// }
// ak()
// //const ak = function(){//second way of function declaration
//     let username = "akash"
//     console.log(this.username)
// }
// //ak()


// const ak = () =>{             //this is arrow function declaration
//     let username = "akash"
//     console.log(this)
// }
// ak()
// const addtwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addtwo(5,6))
//const addtwonum = (num1,num2)=>num1+num2
//const addtwonum = (num1,num2)=>(num1+num2)//implicit function no need to write return keyword in this//
const addtwonum = (num1,num2)=>({username:"akash"})
console.log(addtwonum(7,8))