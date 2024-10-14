




// app.js
const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Example route to get all records from the doctors table
app.get('/doctors', async (req, res) => {
    try {
        const results = await db.query('SELECT * FROM doctor'); // Adjust table name as needed
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Example route to add a new user (adjust fields as necessary)
app.post('/users', async (req, res) => {
    const { name, email } = req.body; 
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