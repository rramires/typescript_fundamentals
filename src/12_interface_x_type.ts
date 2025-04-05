// run with: 
// ts-node ./src/12_interface_x_type.ts

// Interface x Type

// Interfaces
interface IBaseProduct {
    id: number;
}
// Interfaces use 'extends' to extend
interface IProduct extends IBaseProduct {
    name: string;
    price: number;
}

// Interfaces can be overridden
// New property values ​​are merged
interface IProduct {
    quantity: number;
}

// Types
type TBaseProduct = {
    id: number;
}
// Interfaces use 'intersection (&)' to extend
type TProduct = TBaseProduct & {
    name: string;
    price: number;
}

// Types CANNOT be overridden
// Error: Duplicate identifier 'TProduct'
/* 
type TProduct = {
    id: number,
} 
*/

let product1: IProduct = { id: 1, name: "Produto 1", price: 500, quantity: 12}
let product2: TProduct = { id: 2, name: "Produto 2", price: 550}

// At first both forms seem to do the same thing, but types cannot be overridden
//
// Best Practices:
// - Use interfaces for object definitions that may need extension
// - Use types for unions, intersections, and mapped types
// - Use types when you need to work with primitive types
// - Use interfaces when you're creating object-oriented interfaces