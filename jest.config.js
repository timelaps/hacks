module.exports = {
  "verbose": true,
  "setupFilesAfterEnv": ["jest-extended", "jest-chain"],
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}
