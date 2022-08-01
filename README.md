# Project structure

React stateful/controller components -- located at `src/Components/`

React presentation/view components -- located at `src/Layouts/`

React state management/model -- located at `src/Features/Redux`

App-related business logic modules -- located at `src/Features`

E2E tests -- located at `cypress/e2e/ConditionBuilderApp`

Some unit tests -- located as adjacent `.spec` files alongside the corresponding module/component

## Available Scripts

For full list of scripts please refer to `package.json`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run e2e:run`
Runs the e2e Cypress test suite \
For more e2e running modes please refer to `package.json`
