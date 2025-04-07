// run with: 
// ts-node ./src/17_using_partial.ts

// In this interface all properties are required
interface User {
    id: number;
    name: string;
    email: string;
}

// Ok, we can create a user with all properties
const newUser: User = { id: 1, name: "Tom", email: "tom@email.com"}

// But if we want to update a user, we don't need to provide all properties
// const updatedUser: User = { id: 1, name: "Tom"} // Error: Property 'email' is missing in type

// But we can use Partial to make all properties optional
const updatedUser2: Partial<User> = { name: "Tom Hanks"}