"use strict";
// ! ---- TypeScript DATA TYPES ----
// let a: number; // number will store
// let b: string; // string will store
// let c: boolean; // boolean will store
// let d; // any *Try to avoid any*
// let a:number = 56;
// a = "hello"; // Error:because type of a is number
// let b:number = 43;
// b = 234;
// let hi = <string>"hello";
// let bl = <boolean>"hello"; // Error: boolean but storing string
// let bl2 = <boolean>true; // Ok
// let surname: string | number;
// surname = "Ashraf Ali"; // Ok
// surname = 786; // Ok
// const func = (n: number, m: number) => {
//   console.log(n, m);
// }; // returning Void(empty)
// const func = (n: number, m: number) => {
//   return n * m;
// }; // returning number
// const func = (n: number, m: number) => {
//   return String(n * m);
// }; // returning string
// const func = (n: number, m: number): number => {
//   return String(n * m);
// }; // Error: Returning String, now number must be return
// type userName = (n: number, m: number) => number;
// const func: userName = (n, m) => {
//   return n * m;
// };
// ! ---- TypeScript ARRAY ----
// const arr: number[] = [34, 4, 63, 64]; // Ok
// const arr1: number[] = [34, "hello", 63]; // Error: number must
// const arr2: string[] = ["apple", "mango", "banana"]; // Ok
// const arr3: string[] = ["apple", true]; // Error: string must
// const arr4: Array<string> = []; // Good Form Of Array
// const arr5: Array<string | number | boolean> = []; // All String,Number,Boolean
// const arr6: Array<number | string> = [44, 66, "mango"];
// console.log(arr6);
// arr6[0] = "Ashraf Ali";
// console.log(arr6);
// const arr7: Array<number | string> = new Array(5);
// arr7[0] = 10;
// arr7[1] = 20;
// arr7[2] = 30;
// arr7[3] = 40;
// arr7[4] = "Hello";
// console.log(arr7);
// ! ---- TypeScript Objects ----
// type Obj = {
//   height: number;
//   width: number;
//   gender?: boolean; // TODO:  ? = optional
// };
// const obj: Obj = {
//   height: 34,
//   width: 432,
//   gender: false,
// };
// const obj1: Obj = {
//   height: 43,
//   width: 4532,
// };
// TODO: Interface
// interface Obj {
//   height: number;
//   width: number;
//   gender?: boolean;
// }
// type FuncType = (n: number, m: number) => void;
// interface newObj extends Obj {
//   name: string;
//   age: number;
//   isMarried?: boolean;
//   func?: FuncType; // Optional function property
// }
// const object: newObj = {
//   name: "Ashraf Ali",
//   age: 23,
//   height: 5.8,
//   width: 2.5,
//   isMarried: false,
//   func: (n, m) => {
//     console.log(n * m);
//   },
// };
// object.func?.(10, 50); // Optional chaining to call the function if it exists
// const obj2: newObj = {
//   name: "Ashraf Ali",
//   age: 23,
//   height: 5.8,
//   width: 2.5,
//   isMarried: false,
//   gender: true,
// };
// ! ---- TypeScript Function ----
// type FuncType = (n: number, m: number) => number;
// const func: FuncType = (a, b) => {
//   return a - b;
// }; // a and b and n and m are same, but we can use any name
// ? Optional Parameters in TypeScript
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l) => {
//   if (l === undefined) {
//     return n * m; // If l is not provided, return n * m
//   }
//   return n * m * l;
// };
// console.log(func(10, 20));
// console.log(func(10, 20, 30));
// ? Default Parameters in TypeScript
// const func = (n: number, m: number, l: number = 18) => {
//   return n * m * l; // If l is not provided, it defaults to 18
// };
// console.log(func(23, 35));
// TODO: Another Way
// type FuncType = (n: number, m: number, l?: number) => number;
// const func2: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };
// console.log(func2(23, 35));
// ? Function using Rest Operator
// const func = (...m: number[]) => {
//   return m;
// };
// console.log(func(34, 53, 65, 34, 56));
// TODO: Another way
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// console.log(func(34, 53, 521, 56, 64));
// ! ---- Function With Objects ----
// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }
// type getDataType = (product: Product) => void; // product is the name object, and Product is the type of that object
// const getData: getDataType = (product) => {
//   console.log(product);
// };
// const ProductOne: Product = {
//   name: "Dumbbells",
//   stock: 45,
//   price: 1500,
//   photo: "lslkjlrkj4324",
//   id: "12345-abcde", // Readonly property, cannot be changed
// };
// getData(ProductOne);
// getData({
//   name: "Barbell",
//   stock: 64,
//   price: 2999,
//   photo: "slkdjfsjk",
//   id: "67890-fghij",
// });
// ? Never Type in TypeScript for Function
// const errorHandler = (): never => {
//   throw new Error();
// }; // by hovering over the function, it shows that it returns never type
// const errorHandler1 = () => {
//   return new Error();
// }; // by hovering over the function, it shows that it returns Error type
// * for Type Alias
// type themeMode = "light" | "dark" | "system" | "auto";
// const setTheme: themeMode = "system";
// ! ---- TypeScript Classes ----
// ? Private, Protected, and Public properties in TypeScript
// class Player {
//   height;
//   public weight; // Public is by default
//   private age;
//   gender;
//   constructor(height: number, weight: number, age: number, gender: string) {
//     this.height = height;
//     this.weight = weight;
//     this.age = age;
//     this.gender = gender;
//   }
//   myAge = () => {
//     return this.age; // This method can access the private property age
//   };
// }
// const Player1 = new Player(5.1, 74, 23, "male");
// console.log(Player1.age); // Error: age is private and cannot be accessed outside the class
// console.log(Player1.myAge()); // Accessing private property through a public method
// TODO: Easy syntax for classes
// class PlayerII {
//   public readonly id: string;
//   constructor(
//     height: number,
//     public weight: number,
//     private age: number,
//     protected gender: string
//   ) {
//     this.id = String(Math.random() * 100);
//   }
//   get MyAge(): number {
//     return this.age;
//   }
//   set ChangeMyAge(newAge: number) {
//     this.age = newAge;
//   }
// }
// class childPlayerII extends PlayerII {
//   spacial: boolean;
//   constructor(
//     height: number,
//     weight: number,
//     age: number,
//     gender: string,
//     spacial: boolean
//   ) {
//     super(height, weight, age, gender); // super means parent class properties
//     this.spacial = spacial;
//   }
//   getMyGender = () => {
//     return this.gender;
//   };
// }
// const Player2 = new PlayerII(234, 245, 43, "male");
// console.log(Player2.gender); // gender is protected
// console.log(Player2.MyAge); // Accessing private property
// console.log(Player2.id); // id is public and readonly, can be accessed but not modified
// console.log((Player2.ChangeMyAge = 23));
// const childPlayer = new childPlayerII(23, 32, 64, "male", true);
// console.log(childPlayer.getMyGender()); // Accessing protected property through a method in the child class
