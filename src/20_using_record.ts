// run with: 
// ts-node ./src/20_using_record.ts

// Using Record to create an object where all keys are strings and values ​​are numbers
const scores: Record<string, number> = {
    "Tom": 10,
    "Harry": 15
    //"Harry": 15 // Erro: Duplicate identifier 'Harry'
}


// Using Record to limit options with custom Types
type Profile = "admin" | "user" | "guest"

// Creates an object where all keys are Profile and values ​​are numbers
const user: Record<Profile, number> = {
    "admin": 1,
    "guest": 2,
    "user": 3
}


// Using Record with custom objects
interface User {
    name: string
    email: string
}

// Creates an object where all keys are numbers and values ​​are User
const users: Record<number, User> = {
    1: { name: "Tom", email: "tom@email.com" },
    2: { name: "Harry", email: "harry@email.com" },
}