// run with: 
// ts-node ./src/07_undefined_null.ts

// if you not define initial values = undefined
let name: string;
let value: number;

//console.log("name = " + name); // "name = undefined" 
//console.log("value = " + value); // "value = undefined" 

// null is used when you want to set a value as non-existent explicitly or at runtime.
let value2: number; 
// In Javascript it would work, but in TypeScript it turns red
// value2 = null; // Type 'null' is not assignable to type 'number'.

// The correct way is to assign null as optional valid type 
let age: number | null = null;

age = 25;
console.log("age = " + age); // "age = 25"

age = null;
console.log("age = " + age); // "age = null"