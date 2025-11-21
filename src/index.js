const ApiClient = require('./apiClient');
const Calculator = require('./calculator');
const StringUtils = require('./stringUtils');

async function main() {
  console.log('Jest Testing Demo Project');
  console.log('========================');
  
  // Demonstrate Calculator functionality
  console.log('\n--- Calculator Demo ---');
  const calculator = new Calculator();
  
  try {
    console.log('10 + 5 =', calculator.add(10, 5));
    console.log('10 - 3 =', calculator.subtract(10, 3));
    console.log('4 * 6 =', calculator.multiply(4, 6));
    console.log('15 / 3 =', calculator.divide(15, 3));
    console.log('2^8 =', calculator.power(2, 8));
    console.log('sqrt(16) =', calculator.sqrt(16));
  } catch (error) {
    console.error('Calculator Error:', error.message);
  }
  
  // Demonstrate StringUtils functionality
  console.log('\n--- String Utils Demo ---');
  try {
    const testString = 'hello world';
    console.log(`Original: "${testString}"`);
    console.log(`Capitalized: "${StringUtils.capitalize(testString)}"`);
    console.log(`Reversed: "${StringUtils.reverse(testString)}"`);
    console.log(`Word count: ${StringUtils.wordCount(testString)}`);
    
    const palindrome = 'racecar';
    console.log(`\nIs "${palindrome}" a palindrome?`, StringUtils.isPalindrome(palindrome));
    
    const sentence = 'A man a plan a canal Panama';
    console.log(`Is "${sentence}" a palindrome?`, StringUtils.isPalindrome(sentence));
  } catch (error) {
    console.error('StringUtils Error:', error.message);
  }
  
  // Demonstrate ApiClient functionality
  console.log('\n--- API Client Demo ---');
  const apiClient = new ApiClient();
  
  try {
    console.log('Fetching users...');
    const users = await apiClient.get('/users');
    console.log('Users:', users.data);
    
    console.log('\nCreating new user...');
    const newUser = await apiClient.post('/users', {
      name: 'Demo User',
      email: 'demo@example.com'
    });
    console.log('Created user:', newUser.data);
    
  } catch (error) {
    console.error('API Error:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };