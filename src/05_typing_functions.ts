// run with: 
// ts-node ./src/05_typing_functions.ts



/*
// Note that the parameters, x and y, are underlined in red.
// It means that the parameters must be typed too.
function sum(x, y){
    const result = x + y;
    console.log("Result = ", result);
}
*/
// Fixing this
function sum(x: number, y: number){
    const result = x + y;
    console.log("Result = " + result);
}
//sum(10, "Text"); // Argument of type 'string' is not assignable to parameter of type 'number'.

sum(10, 7.5); // "Result = 17.5"

// Ok, but if the function returns something
function sum2(x: number, y: number){
    const result = x + y;
    return result;
}
// If you hover your mouse over the function and constant, you will notice 
// that assumes implicit typing
// function sum2(x: number, y: number): number
// const ret: number 
const ret = sum2(15, 10);
console.log("Sum2 return = " + ret)

// To avoid problems we should always type explicitly
// This is the main reason to use TypeScript
// The best way is:
function sum3(x: number, y: number): void{
    const result = x + y;
    console.log("Result = " + result);
}
// And
function sum4(x: number, y: number): number{
    const result = x + y;
    return result;
}
const ret2: number = sum4(5, 3);
console.log("Sum4 return = " + ret2);

// How it looks with arrow functions

const showMessage = (name: string): void => {
    console.log("The name is: " + name);
}
showMessage("Tom");

// And
const showMessage2 = (msg: string): string => {
    const message: string = "The name is: " + msg + "!";
    return message;
}
const message: string = showMessage2("Harry");
console.log(message);

