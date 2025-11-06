const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calculator;

  // Setup before each test
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('Addition', () => {
    test('should add two positive numbers correctly', () => {
      // Arrange
      const a = 5;
      const b = 2
      const expected = 7;

      // Act
      const result = calculator.add(a, b);

      // Assert
      expect(result).toBe(expected);
    });

    test('arrays', () => {
      const arr1 = [1, 2, 3];
      const arr2 = [1, 2, 3];

      // This will fail because toBe checks for reference equality
      // expect(arr1).toBe(arr2);

      // This will pass because toEqual checks for value equality
      expect(arr1).toEqual(arr2);
    });

    test('should add negative numbers correctly', () => {
      expect(calculator.add(-5, -3)).toBe(-8);
      expect(calculator.add(-5, 3)).toBe(-2);
      expect(calculator.add(5, -3)).toBe(2);
    });

    test('should add zero correctly', () => {
      expect(calculator.add(5, 0)).toBe(5);
      expect(calculator.add(0, 5)).toBe(5);
      expect(calculator.add(0, 0)).toBe(0);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.add('5', 3)).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(5, '3')).toThrow('Both arguments must be numbers');
      expect(() => calculator.add(null, 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
      expect(calculator.subtract(4, 10)).toBe(-6);
    });

    test('should subtract negative numbers correctly', () => {
      expect(calculator.subtract(-5, -3)).toBe(-2);
      expect(calculator.subtract(-5, 3)).toBe(-8);
      expect(calculator.subtract(5, -3)).toBe(8);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.subtract('10', 4)).toThrow('Both arguments must be numbers');
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(6, 7)).toBe(42);
      expect(calculator.multiply(0, 5)).toBe(0);
    });

    test('should multiply negative numbers correctly', () => {
      expect(calculator.multiply(-5, -3)).toBe(15);
      expect(calculator.multiply(-5, 3)).toBe(-15);
      expect(calculator.multiply(5, -3)).toBe(-15);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.multiply('6', 7)).toThrow('Both arguments must be numbers');
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(15, 3)).toBe(5);
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should divide negative numbers correctly', () => {
      expect(calculator.divide(-15, -3)).toBe(5);
      expect(calculator.divide(-15, 3)).toBe(-5);
      expect(calculator.divide(15, -3)).toBe(-5);
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(10, 3)).toBeCloseTo(3.333333, 5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
      expect(() => calculator.divide(-5, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.divide('15', 3)).toThrow('Both arguments must be numbers');
    });
  });

  describe('Power', () => {
    test('should calculate power correctly', () => {
      expect(calculator.power(2, 3)).toBe(8);
      expect(calculator.power(5, 2)).toBe(25);
      expect(calculator.power(10, 0)).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(calculator.power(2, -2)).toBe(0.25);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => calculator.power('2', 3)).toThrow('Both arguments must be numbers');
    });
  });
});