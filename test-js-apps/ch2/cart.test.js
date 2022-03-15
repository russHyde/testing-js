const { db, closeConnection } = require("./dbConnection");
const { createCart, addItem } = require("./cart");

test("createCart creates a cart for a username", async () => {
  await db("carts").truncate();
  await createCart("Russ Hyde");
  const result = await db.select("username").from("carts");
  expect(result).toEqual([{ username: "Russ Hyde" }]);

  await closeConnection();
});

test("addItem adds an item to a cart", async () => {
  await db("carts_items").truncate();
  await db("carts").truncate();

  const username = "Lucas da Costa";
  await createCart(username);
  const { id: cartId } = await db.select().from("carts").where({ username });

  await addItem(cartId, "cheesecake");
  const result = await db.select("itemName").from("carts_items");

  expect(result).toEqual([{ cartId, itemName: "cheesecake" }]);

  await closeConnection();
});
