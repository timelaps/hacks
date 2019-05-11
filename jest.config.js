module.exports = {
  "coverageReporters": [
    "json-summary",
    "lcov",
    "json",
    "text",
    "clover"
  ],
  "runInBand": true,
  "collectCoverage": true,
  "setupFilesAfterEnv": ["jest-extended", "jest-chain"],
  "roots": [
    "<rootDir>/dist"
  ],
}
