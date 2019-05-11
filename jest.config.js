module.exports = {
  // globalSetup: './jest/setup.js',
  // globalTeardown: './jest/teardown.js',
  // testEnvironment: './jest/puppeteer_environment.js',
  // "preset": "jest-puppeteer",
  "setupFilesAfterEnv": ["jest-extended", "jest-chain"],
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}
