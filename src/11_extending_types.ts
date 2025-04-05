// run with: 
// ts-node ./src/11_extending_types.ts

type Person = {
    id: number,
    name: string
}

// To extend types, we assign the parent type and use 
// &(and in this case) to place the new properties
type Teacher = Person & {
    subjects: string[]
}

type Student = Person & {
    age: number
}

let teacher: Teacher
let student: Student
