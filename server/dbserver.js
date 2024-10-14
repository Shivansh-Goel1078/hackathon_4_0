


const config = {
db: {
        host: 'localhost',
        user: 'root', // replace with your MySQL username
        password: 'syspassword', // replace with your MySQL password
        database: 'dropzone_python', // replace with your database name
    },
  };


  const mysql = require('mysql2/promise');
const config = require('./config');

async function getConnection() {
    return await mysql.createConnection(config.db);
}

async function query(sql, params) {
    const connection = await getConnection();
    const [results] = await connection.execute(sql, params);
    await connection.end(); // Close the connection after the query
    return results
}
    
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Example route to get all records from a table (e.g., users)
app.get('/doctors', async (req, res) => {
try {
const results = await db.query('SELECT * FROM doctors'); // Adjust table name as needed
res.json(results);
} catch (error) {
console.error(error);
res.status(500).send('Server error');
}
});

// Example route to add a new user
app.post('/users', async (req, res) => {
const { name, email } = req.body; // Adjust fields as necessary
try {
const result = await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
res.status(201).json({ id: result.insertId, name, email });
} catch (error) {
console.error(error);
res.status(500).send('Server error');
}
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});