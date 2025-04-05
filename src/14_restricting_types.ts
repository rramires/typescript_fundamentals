// run with: 
// ts-node ./src/14_restricting_types.ts

// Use the pipe| to separate the values
type Size = "small" | "medium" | "large";

let size: Size;

size = "medium"; // OK
// size = "extra-large"; // Error: Type '"extra-large"' is not assignable to type 'Size'.