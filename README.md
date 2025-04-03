# typescript_fundamentals
Beginning of TypeScript studies

#### Install TypeScript and types:

```sh
npm install typescript @types/node -D
```

#### Init TypeScript:

```sh
npx tsc --init 
```

#### Access the recommended settings for the installed NodeJs version:

[Node Target Mapping](https://github.com/microsoft/TypeScript/wiki/Node-Target-Mapping)

Eg, my current node v22.14.0, use Node 20 and edit **tsconfig.json** and modify with this values:

```sh
{
  "compilerOptions": {
    "lib": ["ES2023"],
    "module": "node16",
    "target": "ES2023"
  }
}
```

#### Create src folder and hello_world.ts inside with a simple console.log:

```js
console.log("Hello World");
```

#### Install TSX:
```sh
npm install tsx -D
```

#### Edit **package.json** and add **"dev": "tsx watch src/hello_world.ts"** in scripts:
```json
"scripts": {
  "dev": "tsx watch src/hello_world.ts"
}
```

#### Run it: 
```sh
npm run dev 
```

Modify and save **hello_world.ts** and see the changes in the terminal.
```sh
Hello World 123 !!!
```
