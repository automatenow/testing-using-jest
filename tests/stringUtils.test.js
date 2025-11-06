const StringUtils = require('../src/stringUtils');

describe('Strings', () => {
  describe('capitalize', () => {
    test('should capitalize first letter of lowercase string', () => {
      // Arrange
      const input = 'hello';
      const expected = 'Hello';

      // Act
      const result = StringUtils.capitalize(input);

      // Assert
      expect(result).toBe(expected);
    });

    test('objects', () => {
      const obj1 = { name: 'Alice', age: 30 };
      const obj2 = { name: 'Alice', age: 30 };

      // This will fail because toBe checks for reference equality
      // expect(obj1).toBe(obj2);

      // This will pass because toEqual checks for value equality
      expect(obj1).toEqual(obj2);
    });

    test('should handle already capitalized strings', () => {
      expect(StringUtils.capitalize('Hello')).toBe('Hello');
      expect(StringUtils.capitalize('HELLO')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(StringUtils.capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(StringUtils.capitalize('a')).toBe('A');
      expect(StringUtils.capitalize('A')).toBe('A');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.capitalize(123)).toThrow('Input must be a string');
      expect(() => StringUtils.capitalize(null)).toThrow('Input must be a string');
      expect(() => StringUtils.capitalize(undefined)).toThrow('Input must be a string');
    });
  });

  describe('reverse', () => {
    test('should reverse a string correctly', () => {
      expect(StringUtils.reverse('hello')).toBe('olleh');
      expect(StringUtils.reverse('world')).toBe('dlrow');
    });

    test('should handle palindromes', () => {
      expect(StringUtils.reverse('racecar')).toBe('racecar');
      expect(StringUtils.reverse('level')).toBe('level');
    });

    test('should handle empty string', () => {
      expect(StringUtils.reverse('')).toBe('');
    });

    test('should handle single character', () => {
      expect(StringUtils.reverse('a')).toBe('a');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.reverse(123)).toThrow('Input must be a string');
    });
  });

  describe('palindrome', () => {
    test('should identify palindromes correctly', () => {
      expect(StringUtils.isPalindrome('racecar')).toBe(true);
      expect(StringUtils.isPalindrome('level')).toBe(true);
      expect(StringUtils.isPalindrome('madam')).toBe(true);
    });

    test('should identify non-palindromes correctly', () => {
      expect(StringUtils.isPalindrome('hello')).toBe(false);
      expect(StringUtils.isPalindrome('world')).toBe(false);
    });

    test('should handle case insensitive palindromes', () => {
      expect(StringUtils.isPalindrome('Racecar')).toBe(true);
      expect(StringUtils.isPalindrome('Level')).toBe(true);
    });

    test('should handle palindromes with spaces and punctuation', () => {
      expect(StringUtils.isPalindrome('A man a plan a canal Panama')).toBe(true);
      expect(StringUtils.isPalindrome('race a car')).toBe(false);
    });

    test('should handle empty string and single character', () => {
      expect(StringUtils.isPalindrome('')).toBe(true);
      expect(StringUtils.isPalindrome('a')).toBe(true);
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.isPalindrome(123)).toThrow('Input must be a string');
    });
  });

  describe('word count', () => {
    test('should count words correctly', () => {
      expect(StringUtils.wordCount('hello world')).toBe(2);
      expect(StringUtils.wordCount('the quick brown fox')).toBe(4);
    });

    test('should handle single word', () => {
      expect(StringUtils.wordCount('hello')).toBe(1);
    });

    test('should handle multiple spaces', () => {
      expect(StringUtils.wordCount('hello    world')).toBe(2);
      expect(StringUtils.wordCount('  hello  world  ')).toBe(2);
    });

    test('should handle empty string', () => {
      expect(StringUtils.wordCount('')).toBe(0);
      expect(StringUtils.wordCount('   ')).toBe(0);
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.wordCount(123)).toThrow('Input must be a string');
    });
  });

  describe('whitespace', () => {
    test('should normalize multiple spaces', () => {
      expect(StringUtils.normalizeWhitespace('hello    world')).toBe('hello world');
      expect(StringUtils.normalizeWhitespace('the  quick   brown    fox')).toBe('the quick brown fox');
    });

    test('should trim leading and trailing spaces', () => {
      expect(StringUtils.normalizeWhitespace('  hello world  ')).toBe('hello world');
    });

    test('should handle tabs and newlines', () => {
      expect(StringUtils.normalizeWhitespace('hello\t\tworld')).toBe('hello world');
      expect(StringUtils.normalizeWhitespace('hello\n\nworld')).toBe('hello world');
    });

    test('should handle empty string', () => {
      expect(StringUtils.normalizeWhitespace('')).toBe('');
      expect(StringUtils.normalizeWhitespace('   ')).toBe('');
    });

    test('should throw error for non-string input', () => {
      expect(() => StringUtils.normalizeWhitespace(123)).toThrow('Input must be a string');
    });
  });
});