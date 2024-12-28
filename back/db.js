// db.js
const mysql = require('mysql2');

// Set up the MySQL connection
const users = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your database username
    password: 'Rrimel1234&', // Replace with your database password
    database: 'users' // Replace with your database name
});

// Connect to the database
users.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

module.exports = users;
