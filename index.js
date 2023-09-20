
function receivesAFunction(callbackFunction){
    callbackFunction();
}
function returnsANamedFunction(){
    const namedFunction = hook => {
        console.log("before all");
    };
    return namedFunction;
}
const myFunction = returnsANamedFuncion();
myFunction();

function returnsAnAnonymousFunction(){
    return function(){
       console.log('');
    };
}
