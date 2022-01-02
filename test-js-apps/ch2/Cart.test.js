const assert = require("assert");
const Cart = require("./Cart.js");

test("The addToCart function can add an item to the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");

  expect(cart.items).toEqual(["cheesecake"]);
});

test("multiple calls to addToCart() will add mutliple items to the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.addToCart("cheesecake");
  cart.addToCart("chocolate biscuits");

  expect(cart.items).toEqual([
    "cheesecake",
    "cheesecake",
    "chocolate biscuits",
  ]);
});

test("The removeFromCart function can remove an item from the cart", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.removeFromCart("cheesecake");

  expect(cart.items).toEqual([]);
});
