module.exports = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./setup-tests.js'],
  transform: {
    // '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
