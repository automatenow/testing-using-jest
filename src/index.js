const Calculator = require('./calculator');
const StringUtils = require('./stringUtils');

function main() {
  console.log('Jest Testing Demo Project');
  console.log('==========================');
  
  const calc = new Calculator();
  console.log('Calculator: 5 + 3 =', calc.add(5, 3));
  console.log('Calculator: 10 - 4 =', calc.subtract(10, 4));
  console.log('Calculator: 6 * 7 =', calc.multiply(6, 7));
  console.log('Calculator: 15 / 3 =', calc.divide(15, 3));
  
  console.log('\nString Utils Demo:');
  console.log('Capitalize "hello" =', StringUtils.capitalize('hello'));
  console.log('Reverse "world" =', StringUtils.reverse('world'));
  console.log('Is "racecar" palindrome?', StringUtils.isPalindrome('racecar'));
}

if (require.main === module) {
  main();
}

module.exports = { main };