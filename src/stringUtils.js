/**
 * String utility functions for common string operations
 */
class StringUtils {
  /**
   * Capitalize the first letter of a string
   * @param {string} str - Input string
   * @returns {string} String with first letter capitalized
   */
  static capitalize(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    if (str.length === 0) {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  /**
   * Reverse a string
   * @param {string} str - Input string
   * @returns {string} Reversed string
   */
  static reverse(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
  }

  /**
   * Check if a string is a palindrome
   * @param {string} str - Input string
   * @returns {boolean} True if string is a palindrome
   */
  static isPalindrome(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }

  /**
   * Count the number of words in a string
   * @param {string} str - Input string
   * @returns {number} Number of words
   */
  static wordCount(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Remove extra whitespace from a string
   * @param {string} str - Input string
   * @returns {string} String with normalized whitespace
   */
  static normalizeWhitespace(str) {
    if (typeof str !== 'string') {
      throw new Error('Input must be a string');
    }
    return str.trim().replace(/\s+/g, ' ');
  }
}

module.exports = StringUtils;