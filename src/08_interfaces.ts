// run with: 
// ts-node ./src/08_interfaces.ts

// Interfaces are used to define the structure of an object

// Basic interface definition
interface IProduct {
    id: number;
    name: string;
}

// Using an interface
const person: IProduct = {
    id: 5,
    name: "Cellphone"
};

// Interface with optional properties
interface ICar {
    brand: string;
    model: string;
    year?: number;  // Optional property with '?'
}
// Optional properties can be omitted
const car: ICar = {
    brand: "Toyota",
    model: "Corolla"
    
};
// Or fully defined
const car2: ICar = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Interface with readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
// The properties of a readonly interface cannot be changed
const point: Point = {
    x: 10,
    y: 20
};
// point.x = 5; // Error: Cannot assign to 'x' because it is a constant or a read-only property
// point.y = 15; // Error: Cannot assign to 'y' because it is a constant or a read-only property

// Interface with method definition
interface Animal {
    name: string;
    makeSound(): void;
}

// Implementing an interface
class Dog implements Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Woof!");
    }
}
// Using the class that implements the interface
const dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof!
