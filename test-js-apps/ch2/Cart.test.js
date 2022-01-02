const Cart = require("./Cart.js");

const cart = new Cart();
cart.addToCart("cheesecake");

const hasOneItem = cart.items.length === 1;
const hasACheesecake = cart.items[0] === "cheesecake";

if (hasOneItem && hasACheesecake) {
  console.log("Adding an item works correctly");
} else {
  const actualContent = cart.items.join(", ");

  console.error("addToCart failed!");
  console.error(`Actual content of cart: ${actualContent}`);

  throw new Error("Test failed!");
}
