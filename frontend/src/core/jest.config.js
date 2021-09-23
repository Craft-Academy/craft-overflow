/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const baseJestConfig = require('../../jest.config');

module.exports = {
  ...baseJestConfig,
  testEnvironment: 'node',
  testMatch: [...baseJestConfig.testMatch, '!**/__tests__/**/*.integration.test.ts'],
};
