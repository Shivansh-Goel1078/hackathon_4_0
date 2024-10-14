// db.js
const mysql = require('mysql2/promise');
const config = require('./config');

async function getConnection() {
    return await mysql.createConnection(config.db);
}

async function query(sql, params) {
    const connection = await getConnection();
    const [results] = await connection.execute(sql, params);
    await connection.end(); // Close the connection after the query
    return results;
}

module.exports = {
    query,
};