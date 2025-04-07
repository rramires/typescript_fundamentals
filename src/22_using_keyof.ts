// run with: 
// ts-node ./src/22_using_keyof.ts

// Let's assume we have an icon library
const icons = {
    "home": "./path/home.svg",
    "add": "./path/add.svg",
    "remove": "./path/remove.svg",
}

// Use typeof to create a type from the icons object
type Icon = typeof icons

// Now we can use keyof to create a type that represents the keys of the icons object
const icon: keyof Icon = "add"; // This will be "home" | "add" | "remove"




