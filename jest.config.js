module.exports = {
  // Test environment
  testEnvironment: 'node',

  // Coverage collection
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'
  ],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },

  // Coverage reporters
  coverageReporters: [
    'text',
    'lcov',
    'html'
  ]
};