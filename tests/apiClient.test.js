const ApiClient = require('../src/apiClient');

describe('ApiClient - Basic Async Testing', () => {
  let apiClient;

  beforeEach(() => {
    apiClient = new ApiClient();
  });

  describe('Successful Operations', () => {
    test('should get users list', async () => {
      const response = await apiClient.get('/users');

      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(2);
      expect(response.data[0]).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@automateNow.io'
      });
    });

    test('should get first user', async () => {
      const response = await apiClient.get('/users/1');

      expect(response.status).toBe(200);
      expect(response.data).toHaveLength(2);
      expect(response.data[0]).toEqual({
        id: 1,
        name: 'John Doe',
        email: 'john@automateNow.io'
      });
    });

    test('should create new user', async () => {
      const userData = { name: 'Mark Twain', email: 'mark@automateNow.io' };
      // const userData = { name: 'Mark Twain' }; // Fails
      const response = await apiClient.post('/users', userData);

      expect(response.status).toBe(201);
      expect(response.data).toMatchObject({
        name: 'Mark Twain',
        email: 'mark@automateNow.io',
        id: expect.any(Number),
        createdAt: expect.any(String)
      });
    });
  });

  describe('Error Handling', () => {
    test('should handle 404 errors', async () => {
      const response = await apiClient.get('/invalid-endpoint');

      expect(response.status).toBe(404);
      expect(response.error).toBe('Not found');
    });

    test('should handle validation errors', async () => {
      const invalidData = { name: 'Test User' };

      await expect(apiClient.post('/users', invalidData)).rejects.toThrow('Name and email are required');
    });

    test('should handle POST 404 errors for invalid endpoints', async () => {
      const response = await apiClient.post('/invalid-endpoint');

      expect(response.status).toBe(404);
      expect(response.error).toBe('Not found');
    });
  });

});
