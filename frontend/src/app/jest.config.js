/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const baseJestConfig = require("../../jest.config");

module.exports = {
  ...baseJestConfig,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$":
      "<rootDir>/file-transformer.js",
  },
};
