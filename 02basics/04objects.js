//const tinderuser = new Object ()
const tinderuser = {}

tinderuser.id = "123abh"
tinderuser.name ="Akash"
tinderuser.logedin = false
//console.log(tinderuser)

const regularuser = {
    email :"akash@gmail.com",
    fullname:{
        userfullname:{
            firstname:"akash",
            lastname:"mishra"
        }
    }
}
//console.log(regularuser.fullname.userfullname.firstname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"j", 4:"m"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1,obj2)
// const obj3 = {...obj1, ...obj2}
// console.log(obj3)
// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

//+++++++++++++++++++++++++//
 const course = {
    coursename : "javascript",
    price : 999,
    instructor:"akash",
 }
 //console.log(course.instructor)
 const {instructor: instruct} = course
// console.log(instructor)
console.log(instruct)

//json formate
// {
//     "name":"akash",
//     "coursename": "javascript",
//     "price" :"free"
// }
[
    {},
    {},
    {}
]
