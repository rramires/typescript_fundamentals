// run with: 
// ts-node ./src/04_typing_arrays.ts

// Type Annotation - Check type in array content
//let names: string[] = ["Tom", "Harry", 15]; // Type 'number' is not assignable to type 'string'.
//let numbers: number[] = [10, 25, "Testing"]; // Type 'number' is not assignable to type 'string'.

// let products: string[] = [];
// or
//let products: string[] = new Array();
// or
//let products: string[] = Array();
// or
//let products: Array<string> = [];
// or
//let products: Array<string> = new Array();
// or
let products: Array<string> = Array();

products[0] = "Notebook";
// products[1] = 15; // Type 'number' is not assignable to type 'string'.
products.push("Video Card");
// products.push(15); // Type 'number' is not assignable to type 'string'.

console.log(products);
console.log(products[1]);

// It has all the other methods, the same as the Javascript array.
// Eg: concat(), unshift(), pop(), etc: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array