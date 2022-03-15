const { db, closeConnection } = require("./dbConnection");
const { createCart } = require("./cart");

test("createCart creates a cart for a username", async () => {
  await db("carts").truncate();
  await createCart("Russ Hyde");
  const result = await db.select("username").from("carts");
  expect(result).toEqual([{ username: "Russ Hyde" }]);

  await closeConnection();
});
