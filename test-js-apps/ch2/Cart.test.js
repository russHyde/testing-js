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

test("removeFromCart() does nothing when asked to remove a missing item", () => {
  const cart = new Cart();
  cart.addToCart("cheesecake");
  cart.removeFromCart("chocolate biscuits");

  expect(cart.items).toEqual(["cheesecake"]);
});

test("removeFromCart does not depend on the order that items were added to the cart", () => {
  const cart1 = new Cart();
  const cart2 = new Cart();

  cart1.addToCart("cheesecake");
  cart1.addToCart("chocolate biscuits");

  cart2.addToCart("chocolate biscuits");
  cart2.addToCart("cheesecake");

  cart1.removeFromCart("cheesecake");
  cart2.removeFromCart("cheesecake");

  expect(cart1.items).toEqual(cart2.items);
});
