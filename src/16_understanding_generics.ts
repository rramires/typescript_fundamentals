// run with: 
// ts-node ./src/16_understanding_generics.ts

// Example of a regular function

function useState(){
    let state: number | string;

    function get() {
        return state;
    }
    function set(newState: number | string) {
        state = newState;
    }
    return { get, set};
}

let newState = useState();
newState.set(1);
console.log(newState.get()); // 1
newState.set("Hello");
console.log(newState.get()); // Hello

// Generics allow you to create reusable components that work with any data type.

// Sintaxe
// function myFn<T extends type1 | type2 | type2 = typeDefault>>() {  }
// type1 | type2 | type2 define the types that the generic can accept
// typeDefault defines the default type that will be used if no type is provided

function useState2<T extends number | string = string>(){
    // T is a generic type that can be either number or string
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue;
    }

    return {get, set};
}

// Example 1: Using the generic function with a <string> type
let newState2 = useState2<string>();

newState2.set("Tom");
console.log(newState2.get()); // Tom
// newState2.set(123); // Argument of type 'number' is not assignable to parameter of type 'string'
newState2.set("Harry");
console.log(newState2.get()); // Harry

// Example 2: Using the generic function with a <number> type
let newState3 = useState2<number>();
newState3.set(1);
console.log(newState3.get()); // 1
// newState3.set("Tom"); // Argument of type 'string' is not assignable to parameter of type 'number'
newState3.set(123);
console.log(newState3.get()); // 123

/**
 * Some conventions
 * 
 * S => state
 * T => type
 * K => key
 * V => value
 * E => element
 */



