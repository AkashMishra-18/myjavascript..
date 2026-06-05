let a =300 //gobalscope
if(true){
    let a =10// blockscope
    const b=45
    //var c =89
    //console.log("inner value:",a)
}
//console.log(a);

function one(){
    const username = "akash"
    function two(){
        const website = "youtube.com"
        console.log(username)
        console.log(website)
    }
    //console.log(website)
    two()
}
//one()

//**********intersting******************** */
addone(5)
function addone(num1){//function
    return num1+1
}

addtwo()//Cannot access 'addtwo' before initialization
const addtwo = function(num2){//function expression
    return num2+2
}

