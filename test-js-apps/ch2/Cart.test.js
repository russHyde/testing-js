const assert = require("assert");
const Cart = require("./Cart.js");

const cart = new Cart();

cart.addToCart("cheesecake");
assert.deepStrictEqual(cart.items, ["cheesecake"]);
console.log("The addToCart function can add an item to the cart");

cart.removeFromCart("cheesecake");
assert.deepStrictEqual(cart.items, []);
console.log("The removeFromCart function can remove an item from the cart");
