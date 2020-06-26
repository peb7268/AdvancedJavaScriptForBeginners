
// const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  verbose: true,
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  moduleDirectories: [
    "node_modules",
    "public/dist",
    "public/js"
  ],
  testPathIgnorePatterns: [
    "./tests/cypress",
    "cypress_examples"
  ]
};