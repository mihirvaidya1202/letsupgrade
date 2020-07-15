//var variables do not allow the scoping of the variable and can be reinitialized many times
var a="Outside Var";
{
    a="Inside Var";
    console.log(a);
}
console.log(a);

//Let allows the scoping of the variables when used in the block(global/local reference)
let b="Outside Let"
{
    let b="Inside Let";
    console.log(b);
}
console.log(b);

//Const is used to define the variable which are to be remain unchanged the whole code
const c="Outside Const";//Const has to be initiated with a start value
{
    //c="Inside const"; Not possible as const can be initialized once
    console.log(c);
}
console.log(c);

const fruits=["apple","banana"];
fruits.push("guava");//const array can use push/pop but fruits array can't be reassigned
console.log(fruits);