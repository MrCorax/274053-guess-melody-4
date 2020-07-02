module.exports = {
  "setupFiles": ["./jest.setup.js"],
  "testURL": "http://localhost",
  "verbose": true,
  "testRegex": "(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$",
  "moduleFileExtensions": ["jsx", "js", "ts", "tsx", "json", "node"],
  "moduleNameMapper": {
    "^@components(.*)$": "<rootDir>/src/components/$1",
    "^@mock(.*)": "<rootDir>/src/mocks/$1",
  }
};
