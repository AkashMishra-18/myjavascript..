//primitive
// 7 types => string, number, boolean, bigint, symbol, null, undefined;
// const score = 100
// const scorevalue = 100.6

// const isLogedin = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123');
// const anotherid = Symbol('123');
// console.log(id === anotherid);



//Reference(non primitive)
// array, object, function 

// const heros =["krish","spiderman", "sktiman"];
// let myObj  ={
//     name = "Akash"
//     age = 20
// };


// const myFunction = function(){
//     console.log("hello world");

// }




//*************************************************** */
//stack(primitive)    heap(Non primitive)

let myname = "akash"
let myname2 = myname
myname2 = "sky"
console.log(myname);
console.log(myname2);//stack 


let userone={
    email: "dfhhsmail.com",
    upi:"user@ypl"
}
 let usertwo = userone
 userone.email ="akash@.com"

 console.log(userone);
 console.log(usertwo);