# testing-js

Notes on testing & testing frameworks for JavaScript.

Includes notes on books:

- "Testing JavaScript Applications": Lucas da Costa
- "UI Testing with Puppeteer": Dario Kondratiuk

## New test-framework checklist

- How to evoke the test-runner?
  - eg, what bash command to use, what to add in project.json::script::test
- How are test scripts identified?
  - eg, should test scripts have specific suffix? be in a specific directory?
- How to segregate:
  - test suites within a test script
  - test cases within a test suite

## Testing concepts

Forms of equality:

- Deep equality: do two objects have equal values
- Strict equality: do two references point to the same object?
