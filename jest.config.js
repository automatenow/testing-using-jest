module.exports = {
    // Test environment
    testEnvironment: 'node',

    collectCoverageFrom: [
        'src/**/*.js',
        '!src/index.js'
    ],

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            statements: 80,
            lines: 80
        },
        './src/apiClient.js': {
            branches: 100,
            functions: 100,
            statements: 100,
            lines: 100
        }
    },

    coverageReporters: [
        'text',
        'lcov',
        'html'
    ]
};