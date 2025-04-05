// run with: 
// ts-node ./src/09_extending_interfaces.ts

// Let's create two interfaces: Teacher and Student    
/*
interface Teacher {
    id: number,
    name: string,
    subjects: string[]
}
interface Student {
    id: number,
    name: string,
    age: number
}
// This is a bad practice, because it has duplicate properties
const teacher: Teacher = { id: 1, name: "Tom", subjects: ["JavaScript", "TypeScript"]}
const student: Student = { id: 2, name: "Bart", age: 23}
*/

// This is a better practice, because it has no duplicate properties

interface Person {
    id: number;
    name: string;
    // When a new property is added to the interface
    // email: string // Remove the comment and see that it will give an error in all the places it was implemented.
}
// Extending Interfaces
interface Teacher extends Person {
    subjects: string[]
}
interface Student extends Person {
    age: number
}
const teacher2: Teacher = { id: 1, name: "Tom", subjects: ["JavaScript", "TypeScript"]}
const student2: Student = { id: 2, name: "Bart", age: 23}
