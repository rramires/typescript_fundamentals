// run with: node ./src/02_primitive_types.ts  

// If I declare without typing
// let firstname; 
// Or best option typing with any
let firstname: any; 
// accepts any value
firstname = "Any Value";
firstname = 123;
firstname = true;

// string
// But if I type
let lastname: string;
// accepts any value
lastname = "Only strings";
// lastname = 123; // Error: Type 'number' is not assignable to type 'string'.
// lastname = true; // Error: Type 'boolean' is not assignable to type 'string'.

// numbers
let mynumber: number;
mynumber = 10;
mynumber = 7.5;

// boolean
let isLoading: boolean = false;
isLoading = false;


