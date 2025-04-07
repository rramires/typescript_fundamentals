// run with: 
// ts-node ./src/18_using_pick.ts

// In this interface all properties are required
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

// But you only needed one or two of these properties in a view, for example
// The first idea is to have to create a new interface, only with the properties that will be used
// But this is not a good idea, because if you change the Book interface, you will have to change the new interface too
interface BookPreview {
    title: string
}
const book1: BookPreview = { title: "TypeScript"}

// So, the best way is to use Pick and select the properties that you need
const book2: Pick<Book, "title" | "pages"> = { title: "TypeScript", pages: 150}