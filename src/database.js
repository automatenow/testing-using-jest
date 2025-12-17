/**
 * Simple Database class to demonstrate Jest hooks
 * This simulates a database connection and operations
 */
class Database {
    constructor() {
        this.connected = false;
        this.data = [];
    }

    connect() {
        if (this.connected) {
            throw new Error('Database is already connected');
        }
        this.connected = true;
        console.log('✅ Database connected');
    }

    disconnect() {
        if (!this.connected) {
            throw new Error('Database is not connected');
        }
        this.connected = false;
        this.data = [];
        console.log('🛑 Database disconnected');
    }

    isConnected() {
        return this.connected;
    }

    insert(item) {
        if (!this.connected) {
            throw new Error('Cannot insert: Database is not connected');
        }
        const id = this.data.length + 1;
        const record = { id, ...item };
        this.data.push(record);
        return record;
    }

    findAll() {
        if (!this.connected) {
            throw new Error('Cannot query: Database is not connected');
        }
        return this.data;
    }

    findById(id) {
        if (!this.connected) {
            throw new Error('Cannot query: Database is not connected');
        }
        return this.data.find(record => record.id === id);
    }

    clear() {
        if (!this.connected) {
            throw new Error('Cannot clear: Database is not connected');
        }
        this.data = [];
        console.log('🧹 Database cleared');
    }

    getRecordCount() {
        return this.data.length;
    }
}

module.exports = Database;
