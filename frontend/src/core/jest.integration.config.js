/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const baseJestConfig = require("./jest.config");

module.exports = {
  ...baseJestConfig,
  testMatch: ["**/__tests__/**/*.integration.test.ts"],
};
