// run with: 
// ts-node ./src/21_define_with_typeof.ts

// Using typeof to create a type based on an object
// This is useful for creating a type that is based on an existing object
// eg: consuming the response from an API

interface Product {
    id: number;
    name: string;
    quantity: number;
}
const product1: Product = { id: 1, name: "Product One", quantity: 3}

// This will create a type that is the same as the type of product1
const product2: typeof product1 = { id: 2, name: "Product Two", quantity: 5}