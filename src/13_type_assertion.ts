// run with: 
// ts-node ./src/13_type_assertion.ts

type UserResponse = {
    id: number;
    name: string;
    avatarUrl?: string;
}

// Type Assertion, using `as` keyword       

let userResponse = {} as UserResponse;

// Now the properties appear in code completion
userResponse.id;
userResponse.name;