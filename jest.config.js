/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  preset: 'jest-expo',
  collectCoverage: true,
  clearMocks: true,
  coverageReporters: ['json-summary', 'text', 'lcov'],
  testMatch: ['**/*.spec.[jt]s(x)?'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/config/',
    '/jest/',
    '__data__',
    '__interceptors__',
    '__tests__',
    'src/index.tsx'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80
    }
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)'
  ],
  setupFiles: ['./jest/jest.setup.js']
};
