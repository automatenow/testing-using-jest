const Database = require('../src/database');

describe('Database - Jest Hooks Demo', () => {
    let database;

    // RUNS ONCE - Before all tests
    beforeAll(() => {
        console.log('🔹 beforeAll: Setting up test suite...');
        database = new Database();
        database.connect();
    });

    // RUNS ONCE - After all tests
    afterAll(() => {
        console.log('🔹 afterAll: Cleaning up test suite...');
        database.disconnect();
    });

    // RUNS BEFORE EACH TEST
    beforeEach(() => {
        console.log('🔹 beforeEach: Clearing database for fresh test...');
        database.clear();
    });

    // RUNS AFTER EACH TEST
    afterEach(() => {
        const count = database.getRecordCount();
        console.log(`🔹 afterEach: Test complete. Records in DB: ${count}`);
    });

    // Individual Tests
    test('should insert a user into the database', () => {
        console.log('🧪 Test 1: Insert user');

        const user = database.insert({ name: 'Giulia', role: 'Admin' });

        expect(user).toEqual({ id: 1, name: 'Giulia', role: 'Admin' });
        expect(database.findAll()).toHaveLength(1);
    });

    test('should find user by id', () => {
        console.log('🧪 Test 2: Find user by ID');

        database.insert({ name: 'Joshua', role: 'Manager' });
        const user = database.findById(1);

        expect(user).toEqual({ id: 1, name: 'Joshua', role: 'Manager' });
    });

    test('should start each test with empty database', () => {
        console.log('🧪 Test 3: Verify clean state');

        // Verify that beforeEach() cleared the data
        expect(database.findAll()).toHaveLength(0);
        expect(database.isConnected()).toBe(true);
    });
});

/**
 * NESTED DESCRIBE BLOCKS
 * =======================
 * 
 * Hooks work within their describe block scope.
 * Each describe block can have its own setup/teardown hooks.
 */
describe('Database - Nested Hooks Demo', () => {
    let database;

    beforeAll(() => {
        console.log('🔸 Outer beforeAll: Creating database instance');
        database = new Database();
        database.connect();
    });

    afterAll(() => {
        console.log('🔸 Outer afterAll: Disconnecting database');
        database.disconnect();
    });

    describe('Insert Operations', () => {
        beforeEach(() => {
            console.log('🔸 Inner beforeEach: Clearing for insert tests');
            database.clear();
        });

        test('should handle insert with all fields', () => {
            console.log('🧪 Test 4: Handle full insert');

            const record = database.insert({ name: 'Tester', email: 'tester@automateNow.io' });
            expect(record.id).toBe(1);
        });
    });
});
