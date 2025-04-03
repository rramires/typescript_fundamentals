// run with: node ./src/01_error_indication.ts  

const message = "Hello TypeScript!";

console.log(message);
// [LOG]: "Hello TypeScript!" 

// If I try to change the value of the constant
// It is underlined indicating an error
// message = "Other content"; // << Try it!

// [ERR]: Assignment to constant variable.

// If I try to call it as a function
// It is underlined indicating an error
//message(); // << Try it!

// [ERR]: message is not a function

// If I create an object
const user = {
    name: "No One",
    email: "no@one.com"
}
// And try to access a non-existent property
// It is underlined indicating an error
// console.log(user.notdefined); // << Try it!