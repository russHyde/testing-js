# testing-js

Notes on "Testing Javascript Applications"

See [https://github.com/lucasfcosta/testing-javascript-applications]()

## node.js tools

- `assert` module: `assert.deepStrictEqual(object, expected)`

## project structure

- package.json:
  - `scripts: {test: "jest"}` to use jest as the test runner

## jest

- runs all test scripts ending in `.test.js` or `.spec.js` or files in `./tests/`
- makes some jest functions available globally (`test()`, `expect()`)
  - so you don't need to `require()` jest in a simple test script

### jest functions / methods

- `test(description, callback)`
  - define tests in a test script
- `expect()`
  - create an object with various comparison methods ("matcher functions")
- `expect(some_object).toEqual(some_other)`
  - deep comparison of two objects (as for assert.deepStrictEqual())
