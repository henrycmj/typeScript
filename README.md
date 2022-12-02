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


  type StrOrNum = string | number;

let a: string;
let b: number;
let c: boolean;
let d: string[]=[];
let e: (string|number|boolean)[]=[]
let f: object;
f: [] /* the f object can be called an array */
f: {} /* explicit calling f as an object */
let g: any /* can be of any type */
let h: any[] = []

let person: string;
person = 'Henry Matola'
console.log(person)

// function
let greet : Function;
greet = () => {
    console.log('hello')
}
// 
let add : Function
add = (a:number, b:number, c:(StrOrNum) = 21) => {
    console.log( a + b )
    console.log( c );
}
add(10, 10, 10)