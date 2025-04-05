// run with: 
// ts-node ./src/15_creating_enums.ts

enum Profile {
    Admin = 1,
    Client = 2,
    Seller = 3
}

let profile: number = Profile.Admin;

console.log(profile); // 1
console.log(Profile.Seller); // 3
