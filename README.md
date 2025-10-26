# Jest Testing Project

A JavaScript project demonstrating the Jest testing framework with comprehensive examples of unit testing best practices.

This Jest testing project was created by [Marco A. Cruz](http://www.linkedin.com/in/marco-a-cruz). Please refer to the [video tutorial playlist](https://youtube.com/playlist?list=PLZMWkkQEwOPmets0bgWmF7eltYvz9MhiD&si=GkSehWgdOf9ZcINU) on the Lambdatest YouTube channel for more details.

## 🚀 Features

- Complete Jest setup with configuration
- Sample source code with utility functions
- Comprehensive unit tests demonstrating Jest features
- Test coverage reporting
- Watch mode for development
- VS Code tasks integration

## 📁 Project Structure

```
testing-using-jest/
├── src/
│   ├── calculator.js       # Calculator class with arithmetic operations
│   ├── stringUtils.js      # String utility functions
│   └── index.js            # Main entry point
├── tests/
│   ├── calculator.test.js  # Unit tests for Calculator class
│   └── stringUtils.test.js # Unit tests for StringUtils class
├── .github/
│   └── copilot-instructions.md # Copilot configuration
├── jest.config.js        # Jest configuration
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## 🛠 Setup

1. Install dependencies:
   ```bash
   npm install
   ```

## 📋 Available Scripts

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (re-runs on file changes)
- `npm run test:coverage` - Run tests with coverage report
- `npm start` - Run the main application

## 🧪 Testing Features Demonstrated

### Test Organization
- **Describe blocks**: Group related tests together
- **Test suites**: Separate files for different modules
- **Setup/Teardown**: `beforeEach` for test preparation

### Test Types
- **Unit tests**: Testing individual functions and methods
- **Error testing**: Verifying error conditions and exceptions
- **Edge cases**: Empty strings, zero values, boundary conditions

### Jest Features Used
- **Matchers**: `toBe`, `toBeCloseTo`, `toThrow`
- **Mocking**: Error handling validation
- **Coverage**: Code coverage reporting with thresholds
- **Watch mode**: Development-friendly test running

### Testing Patterns
- **AAA Pattern**: Arrange, Act, Assert structure
- **Descriptive names**: Clear test descriptions
- **Multiple assertions**: Testing various scenarios
- **Input validation**: Testing type checking and error cases

## 📊 Coverage

The project is configured with coverage thresholds:
- **Branches**: 80%
- **Functions**: 80%
- **Lines**: 80%
- **Statements**: 80%

Run `npm run test:coverage` to see detailed coverage reports.

## 🎯 Example Test Structure

```javascript
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('should add two positive numbers correctly', () => {
      // Arrange
      const a = 5;
      const b = 3;
      const expected = 8;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });
  });
});
```

## 🔧 VS Code Integration

This project includes VS Code tasks:
- **Run Jest Tests**: Execute all tests via Command Palette (Ctrl+Shift+P > Tasks: Run Task)

## 📚 Learning Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Jest Matchers](https://jestjs.io/docs/expect)

## 🤝 Contributing

Feel free to add more test examples or improve existing ones. Follow the established patterns:
1. Add source code to `src/` directory
2. Create corresponding test file in `tests/` directory
3. Use descriptive test names and follow AAA pattern
4. Maintain test coverage above 80%

## 📄 License

MIT License - feel free to use this project as a learning resource or template for your own Jest testing projects.

## Visit the [Lambdatest website](https://www.lambdatest.com/) to learn more.