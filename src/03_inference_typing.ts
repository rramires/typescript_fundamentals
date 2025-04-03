// run with: 
// ts-node ./src/03_inference_typing.ts

// Explicit typing
let myName: string;
myName = "Tom";
//myName = 10; // Error: Type 'number' is not assignable to type 'string'.

// Inference typing 
// If you don't type, TypeScript will use the value assigned in the line that creates the variable.
//let message = ""; 
let message = "first message";
message = "Hello, how are you?";
// message = 20 // Error: Type 'number' is not assignable to type 'string'.
