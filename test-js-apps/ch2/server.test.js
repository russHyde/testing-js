const { app, resetState } = require("./server");

const fetch = require("isomorphic-fetch");

const apiRoot = "http://localhost:3000";

const addItem = (username, item) => {
  return fetch(`${apiRoot}/carts/${username}/items/${item}`, {
    method: "POST",
  });
};

const deleteItem = (username, item) => {
  return fetch(`${apiRoot}/carts/${username}/remove/${item}`, {
    method: "POST",
  });
};

const getItems = (username) => {
  return fetch(`${apiRoot}/carts/${username}/items`, { method: "GET" });
};

beforeEach(() => {
  resetState();
});

afterAll(() => app.close());

test("removing items from a cart", async () => {
  const missingUserResponse = await deleteItem("notAUser", "cheesecake");
  expect(missingUserResponse.status).toEqual(404);

  await addItem("lucas", "cheesecake");

  const deleteItemResponse = await deleteItem("lucas", "cheesecake");
  expect(await deleteItemResponse.json()).toEqual([]);
});

test("adding items to a cart", async () => {
  const initialItemsResponse = await getItems("lucas");
  expect(initialItemsResponse.status).toEqual(404);

  const addItemResponse = await addItem("lucas", "cheesecake");
  expect(await addItemResponse.json()).toEqual(["cheesecake"]);

  const finalItemsResponse = await getItems("lucas");
  expect(await finalItemsResponse.json()).toEqual(["cheesecake"]);
});
