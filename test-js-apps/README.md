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
- use `test(description, callback)` to define tests in a test script
