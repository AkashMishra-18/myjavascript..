// const useremail = "akash@.ai"
// if(useremail){
//     console.log(" got user email");
// }else{
//     console.log("not have user name");
// }
// const useremail = ""
// if(useremail){
//     console.log(" got user email");
// }else{
//     console.log("not have user name");
// }
const useremail = []
if(useremail){
    console.log(" got user email");
}else{
    console.log("not have user name");
}

//fasly values
// false, 0, "", -0, bigint 0n, null, undefined,NaN

//truthy values
//"0","false"," ",[],{},function(){}

// if (useremail.length==0){
//     console.log("there is empety array");
// }
const emptyobj ={}
if (Object.keys(emptyobj).length===0){
    console.log("objects is empty");
}