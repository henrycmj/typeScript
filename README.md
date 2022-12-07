# TypeScript Lessons Picked

## Intro To Typescript
- Install typescript globally
- Complie a typescript file by typing in the terminal: (tsc <name>.ts -w). This watches and compoiles a js file into a ts file.

## Type Basics
- Once a variable has been declared to a string, number, boolean, or object, it can not be changed or assigned to another variable type. This is Strict Typing.
- Values of the variables can be changed but not the 'TYPE'.
- const circ = (diameter) => {} : In this example, the diameter carries an 'any' assignment {meaning it can be a boolean, string, number or object}. This can cause an error in the future. So the diameter has to be typed like follows: (diameter:number) to explicitly say it carries a number.

## Arrays and Objects
### Arrays
- An array that carries that are strings, can not be changed to number or boolean. But its values can be updated to a new string.
- If the array type carries an 'Any' type, the array can carry any type of values(string,boolean,number)
### Objects
- Objecrts do act some what the same as arrays.
- If the varible object exits and has to be redeclared, its values types should be the same as the previous existing object

## Explicity Types
- variables whoes value is not known but its type is, can be decalred explicitlly with a type value. ( let fname:string; ).
- In an array, its done as follows: ( let net:string[] = [] ). The ending empty array is declared to allow pushing of values to the array. Without it, no values can be added.
- < let net:(string|number)[]=[]; > This alows am array to have values of string and number
- < let mixes:object; > This decalres a varible that will be an object in the future.

## Dynamic (any) type
- If a variable is declared to 'any' type, its values can be boolean, string, number, object, fuction or array. < let name:any >

## Better Workflow & tsConfig
- To configure the tsc to complie, in the cmd directory, type < tsc --init > to configure the file.
- in the tsconfig file, change the outDir and name a folder to output the ts to javascript. And outside the compilerOption, type < "include": ["src"] > to enable ts file in the src folder to be complied `ONLY` and no other file.

## Function Basics
- This uses the same rule as the type basics. variables can be declared as a function.
- parameters can be declared type. We can declare an optional parameter as follows:
  `const add = (a:number, b:number, c?: number | string)`
- The code below shows a parameter with a default value:
`const add = (a:number, b:number, c: number | string = 10)`
- We can also explicitly say that a function will return a number or string or void(returns nothing). See the code below:
`const add = (a:number, b:number): number => {}`
 
 ## Type Aliases
 - Sometimes parameters in a function can make the code dirty and look complicated. A way around it is by declaring type variables that can be used or reused. The following is a type aliase being declared:
 `type strOrNum = string | number;`
 `type obNumOrStr = { name: string, vid: strOrNum};`

 ## Function Signitures
 - A function signiture describs the general structure of the function, what arguments it takes in, varibles, objects, data it returns, e.t.c
 - The following are examples of function signature.
  1. `let greet: (a:string, b:string) => void;`
  2. `let calc: (a:number, b:number, c:string) => number;`
  3. `let logDetail: (obj: {name: string, age: number}) => void;`

  ## DOM interaction & Typecasting
  - When collecting elements of html, Typescript usually identifies them as elements. This could lead to errors, but to over come these errors, typescript does know these elements and can be served or called in a way they originally are. E.G (notice the ending of the function)
  1. `const form = document.querySelector('.new-item-form') as HTMLFormElement;` I `console.log(form.children);` 
  2. `const anchor = document.querySelector('a');` I `console.log(anchor?.href);`

  ## Access Modifies
  1. Read only - The read only access modify only allows the variables to be read only and be access outside a class.
  2. Public - A public variable, like the name suggests, can be accessed everywhere outside the class and modified. 
  3. Private - A variable of private can 'only' be accessed inside the class its initiated and not outside. It can not be modified

  ## Modules
  - This helps seperate and generate fileswhen compilling. The Javascript reference in the html file, needs to be of type module. And in the tsconfig file, the module should be of es2022(depending with the leatest version) and target should be es6.

  ## Interfaces
  1. An interface allows us to inforce a certain structure of an class or an object. Think of it as bluebrint for classes and objects. Its never used to generate objects,classes, variables or parameters. But only to structure them.

  ## Interfaces with Classes
  When a class is declared and needs to be structured with an interface, we use the key word 'implements'. EG
  export class Person implements personDetails {}

  ## Rendering an HTML template
  TypeScript does follow the DOM manipulations for HTML and can output them.

  ## Generics
  Generics capture items that passed in to the function, and what properties are on it, if its an object. For example
  1. const addUID = <T extends object>(obj: T) => {}
  - The generic is T, and it captures the object and identifies the object properties only. So only objects are passed in.
  2. interface Resource <T> {data: T}
  - This implies that the interface will structure whatever type of input to the data as string, number, or object 
  - const doc: Resource<string> = {data: 'henry'} => from the previous interface, the doc will be of type resource and only brings in a string element to the data variable
  - const doc2: Resource<string[]> = {} => This function brings in an array of strings inside the function

  ## Enums
  - If you have data that has numbers that each represent a certain set on data, enum(data type) is used to represent predefined constraints. For example a country to reprsent a number, an author to represent a book, a letter to present a grade. (Only numbers)
  - enum Resourcetype { BOOK, AUTHOR, FILM, DIRECTOR, PERSON} 
  - const docThree: Resource<object> = {resourceType: Resourcetype.BOOK}
  - BOOK represents index of 0.

  ## Tuples
  - A tuple is an array that explicitly defines each postion in an array as a string, number, or boolean.
  - let tup: [string, number, boolean, number] = [] => Each position in this should be according to the data type.