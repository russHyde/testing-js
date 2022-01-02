class Cart {
  constructor() {
    this.items = [];
  }

  addToCart(item) {
    this.items = [...this.items, item];
  }

  removeFromCart(item) {
    this.items = this.items.filter((arrayItem) => arrayItem !== item);
  }
}

module.exports = Cart;
