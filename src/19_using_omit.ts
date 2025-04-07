// run with: 
// ts-node ./src/19_using_omit.ts

// In this interface all properties are required
interface Book {
    title: string
    pages: number
    author: string
    description: string
}

// But if we don't want to provide all properties, we can use Omit to remove some properties
const book: Omit<Book, "description" | "pages"> = { title: "TypeScript", author: "Tom"}
