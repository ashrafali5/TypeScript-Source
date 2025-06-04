"use strict";
// ! ---- TypeScript DATA TYPES ----
// let a: number; // number will store
// let b: string; // string will store
// let c: boolean; // boolean will store
// let d; // any *Try to avoid any*
class Product {
    constructor(name, stock, price) {
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.id = String(Math.random() * 100);
        this.getId = () => this.id;
    }
}
const product1 = new Product("EarBuds", 58, 1200);
console.log(product1.getId());
