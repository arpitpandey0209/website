# Browser testing

## Running the tests

The tests are automatically run by the CI environment.

To run them locally, you can use the Cypress test runner. Make sure you have the correct dependencies install by running: `yarn cypress verify`

If you want to, you can override the launch URLs:
```sh
export CYPRESS_baseUrl='http://localhost:1314'
```

Then, run `yarn cypress open` to open the test runner.
