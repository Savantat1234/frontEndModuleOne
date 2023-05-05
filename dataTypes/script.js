// var symb= Symbol("foo")
// var symb1= Symbol("foo")
// console.log(symb.description)

// // if-else statement  in js
// if(true){
//     console.log("true")
// }
// else{
//     console.log("false")
// }

// // switch-case in js
// switch (x){
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     default:
//         console.log("default");
//         break;    
// }

// // for loop in js
// for(var i=0;i<=5;i++){
//     console.log(i);
// }

//operators
// all oprators are similar like java except follqw
// var a= 6;
// var b= 6;  // assignment operators
 
// console.log(a==b) // camparision of values only
// console.log(a===b) // comparision of values as well as datatype



// function declaration
// function functionName(param,param,param){
//     // code
// }
// functionName() // functiona call

function add(a,b){  // a, b are the parameters... here u can give by default valu also
    //like... function add(a=2, b=3)
    // then if u dont pass any arguments inside function call ,,5 will be default ans
    console.log(a+b)
}
// function invokation
add(2, 45) // 2, 4 are the arguments



// function expression
//the functions which dont hv any names are called anonymous functions..
// here we assign a whole function to the variable
// this function expression does not hv any name .. so
// called  anonymous functions..

var multiply = function(a,b){
console.log(a*b)
}
multiply(1,5) // function call

console.log(multiply)