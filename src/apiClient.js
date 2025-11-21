class ApiClient {
  constructor(baseUrl = 'https://api.automateNow.io') {
    this.baseUrl = baseUrl;
  }

  /**
   * Simulates a GET request
   * @param {string} endpoint - API endpoint
   * @returns {Promise<Object>} Response data
   */
  async get(endpoint) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (endpoint === '/users') {
      return {
        status: 200,
        data: [
          { id: 1, name: 'John Doe', email: 'john@automateNow.io' },
          { id: 2, name: 'Jane Smith', email: 'jane@automateNow.io' }
        ]
      };
    }
    
    if (endpoint === '/users/1') {
      return {
        status: 200,
        data: { id: 1, name: 'John Doe', email: 'john@automateNow.io' }
      };
    }
    
    return {
      status: 404,
      error: 'Not found'
    };
  }

  /**
   * Simulates a POST request
   * @param {string} endpoint - API endpoint
   * @param {Object} data - Request body
   * @returns {Promise<Object>} Response data
   */
  async post(endpoint, data) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 100));
    
    if (endpoint === '/users') {
      if (!data || !data.name || !data.email) {
        throw new Error('Name and email are required');
      }
      
      return {
        status: 201,
        data: {
          id: Math.floor(Math.random() * 1000),
          ...data,
          createdAt: new Date().toISOString()
        }
      };
    }
    
    return {
      status: 404,
      error: 'Not found'
    };
  }
}

module.exports = ApiClient;