const { db, closeConnection } = require("../dbConnection");
const { createCart, addItem } = require("../cart");

(async () => {
  console.log("In the async block");
  await createCart("Russ");
  await addItem(1, "cheesecake");
  await closeConnection();
})();
