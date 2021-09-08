/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const baseJestConfig = require("../../jest.config");

module.exports = {
  ...baseJestConfig,
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
    "!**/__tests__/**/*.integration.test.ts",
  ],
};
