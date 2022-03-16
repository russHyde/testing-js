const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

let carts;
carts = new Map();

const resetState = () => {
  carts = new Map();
};

router.get("/carts/:username/items", (ctx) => {
  const cart = carts.get(ctx.params.username);
  cart ? (ctx.body = cart) : (ctx.status = 404);
});

router.post("/carts/:username/items/:item", (ctx) => {
  const { username, item } = ctx.params;
  const newItems = (carts.get(username) || []).concat(item);
  carts.set(username, newItems);
  ctx.body = newItems;
});

router.post("/carts/:username/remove/:item", (ctx) => {
  const { username, item } = ctx.params;
  const cart = carts.get(username);
  if (!cart) {
    ctx.status = 404;
    return;
  }
  const newItems = carts.get(username).filter((x) => x != item);
  carts.set(username, newItems);
  ctx.body = newItems;
});

app.use(router.routes());

module.exports = {
  app: app.listen(3000),
  resetState,
};
