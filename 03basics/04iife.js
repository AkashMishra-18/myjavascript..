//Immedialtly Invoked Function Expressions (IIFE)


(function Immedialtly(){
    //name iife
    console.log("DB conected");
})();
//Immedialtly()
((name) =>{
    //iife
    console.log(`DB CONECTED TWO ${name}`);
})("AKASH")