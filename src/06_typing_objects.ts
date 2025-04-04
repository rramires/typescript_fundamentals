// run with: 
// ts-node ./src/06_typing_objects.ts

// This is the generic object like in javascript
let user = {};

// Let's type, defining the properties
// It turned red, hover over it
// let user2: {name: string, age: number} = {}; // Type '{}' is missing the following properties from type

// We need to define property values
let user3: {name: string, age: number} = {name: "Tom", age: 10};

// But what if I need an optional property?
// let user4: {name: string, age: number, avatarUrl: string} = {name: "Tom", age: 10}; // Property 'avatarUrl' is missing in type

// We can use the wildcard "?" followed by the property name
// If you hover the mouse, it shows: (property) avatarUrl?: string | undefined
let user4: {name: string, age: number, avatarUrl?: string} = {name: "Tom", age: 10};

// Properly typed objects used as parameters help create stricter, less error-prone functions.

// With normal params
function singIn(user: string, pass: string):boolean{
    // Simulate the login logic...
    return user === "tom@email.com" && pass === "abc123";
}
const isAuth: boolean = singIn("tom@email.com", "abc123"); 
console.log("isAuth = " + isAuth);

// Passing an object as a parameter

function singIn2( {user,  pass} : {user: string, pass: string} ):boolean{
    // Simulate the login logic...
    return user === "tom@email.com" && pass === "abc123";
}

const isAuth2: boolean = singIn2({user: "tom@emailXXX.com", pass: "abc123"}); 
console.log("isAuth2 = " + isAuth2);