// ---- TypeScript DATA TYPES ----

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

// ---- TypeScript ARRAY ----

// const arr: number[] = [34, 4, 63, 64]; // Ok
// const arr1: number[] = [34, "hello", 63]; // Error: number must
// const arr2: string[] = ["apple", "mango", "banana"]; // Ok
// const arr3: string[] = ["apple", true]; // Error: string must

// const arr4: Array<string> = []; // Good Form Of Array
// const arr5: Array<string | number | boolean> = []; // All String,Number,Boolean

const arr6: Array<number | string> = [44, 66, "mango"];
console.log(arr6);
arr6[0] = "Ashraf Ali";
console.log(arr6);
