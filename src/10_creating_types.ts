// run with: 
// ts-node ./src/10_creating_types.ts

// Types are used to make an object more specific. 
// In this case, we are using a type to define the shape of the object.
type Product = {
    id: number,
    name: string
}

// Example of using the type
function newProduct(product: Product) {
    console.log(`Product created: ${product.name}`);
}       
newProduct({ id: 1, name: "Product 1" });

// Other example, if we have the result of a database query, 
// we can create an array type that only accepts products. 
// If the query is empty, we would use null              
type SelectResponse = Product[] | null

// And typing the function with this type
function selectProducts(): SelectResponse {
    return null
}
