const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../db'); // Import database connection
const router = express.Router();

// Sign-Up route
router.post('/', async (req, res) => {
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
        return res.status(400).send('Email, password, and username are required.');
    }

    // Check if the email already exists in the database
    const checkQuery = 'SELECT * FROM signup WHERE email = ?';
    db.execute(checkQuery, [email], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Internal server error.');
        }

        if (results.length > 0) {
            return res.status(400).send('Email already exists.');
        }

        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the signup table
        const insertQuery = 'INSERT INTO signup (email, password, username) VALUES (?, ?, ?)';
        db.execute(insertQuery, [email, hashedPassword, username], (err, results) => {
            if (err) {
                console.error('Error inserting user:', err);
                return res.status(500).send('Error during sign-up.');
            }

            res.status(201).send('User created successfully.');
        });
    });
});

module.exports = router;
