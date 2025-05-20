# TypeScript/Jest Test Suite for FastAPI Backend

This directory contains automated tests for the FastAPI backend, written in TypeScript and run using Jest.

## Prerequisites
- Node.js (v16 or newer recommended)
- npm (comes with Node.js)
- The FastAPI backend running locally at `http://localhost:8000`

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```

2. Ensure your FastAPI backend is running. You can start it with:
   ```sh
   uvicorn backend.main:app --reload
   ```

## Running Tests
To run all tests:
```sh
npm test
```

## Test File Structure
- `calculatePriority.test.ts`: Tests the `/calculate-priority` endpoint of your FastAPI backend.

## Adding More Tests
- Place additional `.test.ts` files in this directory or its subdirectories.
- Use Jest and axios for HTTP requests and assertions.

## Troubleshooting
- If you see errors about missing modules (e.g., `axios`), ensure you have run `npm install`.
- If the backend is not running, tests will fail to connect to `localhost:8000`.
- For TypeScript or Jest errors, check your `tsconfig.json` and `jest.config.js` files.

## Useful Commands
- Run a specific test file:
  ```sh
  npx jest tests/calculatePriority.test.ts
  ```
- Run tests in watch mode:
  ```sh
  npx jest --watch
  ```
