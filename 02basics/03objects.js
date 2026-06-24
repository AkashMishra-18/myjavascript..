//singleton

//objects literals

const mysym = Symbol("key1")

const jsuser ={
    name :"Akash",
    [mysym]:"mykesy1",
    age:18,
    location:"prayagraj",
    email:"akash@gmail.com",
    isLockedin: false,
    lastlogindays:["monday", "wednesday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
jsuser.email ="akash@chatgpt.com"
Object.freeze(jsuser)
jsuser.email ="akash@microsoft.com"
console.log(jsuser)