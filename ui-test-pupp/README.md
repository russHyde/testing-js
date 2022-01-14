# Notes on JS / Puppeteer / Mocha projects

## Bugs

### "await is only valid in async functions and the top level bodies of modules"

Note the difference:

```js
it("Title should have Packt name", (async) => {
  // blah that fails
  await something();
});

it("Title should have Packt name", async () => {
  /** blah that works
   - parentheses after `async` keyword are required
    - otherwise js will complain about `await` being outside of
      an `async` function
    **/
  await something();
});
```

### Be careful about redefining variables

```js
let x;
it("should do something", () => {
  // this is a different 'x'
  const x = 123;
});
```

### Unexpected token "export"

In node:

- use `module.exports = class Blah {}`;
- not `export default class Blah {}`
