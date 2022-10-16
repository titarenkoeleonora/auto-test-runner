# Welcome to Auto test runner 👋

> An automated test runner that executes tests in the browser and reports on their results as soon as each test has completed.

### 🏠 [Homepage](https://github.com/titarenkoeleonora/auto-test-runner)

### ✨ [Demo](https://auto-test-runner.vercel.app/)

## What's done

- [x] The app should run all tests simultaneously
- [x] Initially, each test should be in the “Not Started” state, waiting for the user to press a button to run them. Once tests start running, the UI should update in real-time without needing further user interaction
- [x] Tests should have statuses: Not Started, Running, Passed, or Failed
- [x] Information about the number of ongoing, successful, and failed tests should be shown. An indication (such as "DONE!") when all tests are finished 

As a bonus :

- [x] App testing with Jest and react-testing-library allows testing the app from a user side and accessibility
- [x] Style-components to separate business logic from rendering logic
- [x] App deployed to Vercel
- [x] ESlint and prettier for automatic code formatting and matching it to best practices and code style. Folder .vscode contains the necessary settings for IDE
- [x] Responsive layout

Potential improvements :

- [x] The array of received tests is adapted and extended using the adapter pattern. The information about passing the tests is recorded. As a result, the array is ready for adding sorting, filtering and other functions
- [x] Using react-context/redux/other libraries to avoid props drilling and rerendering the application

## Install

```sh
npm install
```

## Start

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Eleonora Titarenko**

* Github: [@titarenkoeleonora](https://github.com/titarenkoeleonora)
* LinkedIn: [@eleonora-titarenko](https://linkedin.com/in/eleonora-titarenko)
