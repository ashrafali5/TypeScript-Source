"use strict";
// ! ---- TypeScript DATA TYPES ----
// let a: number; // number will store
// let b: string; // string will store
// let c: boolean; // boolean will store
// let d; // any *Try to avoid any*
const getData = (product) => {
    console.log(product);
};
const ProductOne = {
    name: "Dumbbells",
    stock: 45,
    price: 1500,
    photo: "lslkjlrkj4324",
    id: "12345-abcde", // Readonly property, cannot be changed
};
getData(ProductOne);
getData({
    name: "Barbell",
    stock: 64,
    price: 2999,
    photo: "slkdjfsjk",
    id: "67890-fghij",
});
